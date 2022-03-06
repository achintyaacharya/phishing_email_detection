import flask
import pandas as pd
from flask import request, jsonify, url_for, render_template_string, render_template
from flask_assets import Bundle,Environment

import sklearn
from sklearn.preprocessing import minmax_scale
from difflib import SequenceMatcher
import numpy as np
from scipy.sparse import hstack, vstack, csr_matrix
import re
import pickle
import os

# os.chdir()
money_words=["account","bank","credit","limit","statement","debit","fund","transaction","price","dollars","grants","insurance","$","dollar"]
identity_words=["account","identity","password","user","social","security","member","email"]
access_words=["access","restrict","log","locked","login"]
linker_words=["click","verify","online"]
hook_words = ["inconvenience","update","risk","recently","service","suspension","suspended","confirm","free","win","won","work","closed","easy","opportunity"]
maybe_words=["information","limited","minutes","client","hold","wish"]
meeting_words = ["calender invite", "microsoft teams meeting", "session", "meeting", "meeting id", "zoom.us", "webex.com"]
company_words = ["microsoft", "gartner", "google"]

model = pickle.load(open("nb_model", 'rb'))
vectorizer = pickle.load(open("vectorizer", 'rb'))

text_file = open("templates/output.html", "r")
output = text_file.read()
text_file.close()

bundles = {

    'mailbox_css': Bundle(
        'css/lib/reset.css',
        'css/common.css',
        'css/home.css',
        output='gen/home.css'),

    'admin_js': Bundle(
        'js/lib/jquery-1.10.2.js',
        'js/lib/Chart.js',
        'js/admin.js',
        output='gen/admin.js'),


}

#region Function definitions
def list_urls(string):
    # findall() has been used
    # with valid conditions for urls in string
#     regex_1 = r"(?i)\b((?:https?://|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’]))"
#     regex_2 = r"http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+"
    regex_2 = r"(http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])"
#     regex_3 = r"http[s]? : / / (?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+"
    regex_3 = r"(http|ftp|https): / / ([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])"
    url = []
    try:
#         url_1 = re.findall(regex_1, string)
#         url_first = [x for element in url_1 for x in element if x !=""]
        url_2 = re.findall(regex_2, string)
        url_second = [x for element in url_2 for x in element if x !=""]
        url_3 = re.findall(regex_3, string)
        url_third = [x for element in url_3 for x in element if x !=""]
        # print("got urls")
        # print("1 :", url_first)
        # print("2 :", url_2)
        # print("3 :", url_3)
        url = url_second + url_third # + url_first
        # print(url)
        # num = len(url_1)+len(url_2)+len(url_3)
#         print(i,"->",num)

    except:
        print("error")

    finally:
        return url

def count_urls(url_list):
    num=0
    for url in url_list:
        num = num + len(url)
    return num

def text_url_similarity(text):
    url_list = list_urls(text)
    new_text = text
    count = 0
    for url in url_list:
        # print(url)
        if url != "":
            if url in text:
                try:
                    new_text = re.sub(url, "", new_text)
                except:
                    count = count + 1

    words = nltk.word_tokenize(new_text)
    sim = 0
    try:
        sim = max([similar(url, word) for word in words for url in url_list])
    except:
        sim = 0
    return sim

def domain_url_similarity(domain, text):
    url_list = list_urls(text)
    sim = 0
    try:
        sim = max([similar(url, domain) for url in url_list])
    except:
        sim = 0
    return sim

def isNaN(string):
    return string != string

def similar(a, b):
    if isNaN(a) | isNaN(b):
        return 0
    else:
        return SequenceMatcher(None, a, b).ratio()

def probability(test_x):
    probs = model.predict_proba(test_x)
    prob = 0
    if round(probs[0][1],4)>0.5:
        prob = round(probs[0][1],6)-0.000001
    else:
        prob = round(probs[0][1], 6)
    return prob

# <h3 style="font-family:calibri;"><a href='/'>Home</a></h3></td><a href='/ui/phishingitout'>UI Search</a></h3></td>
def create_working_dataset(sender, sender_email,subject, body):
    sender = [sender]
    sender_email = [sender_email]
    subject = [subject]
    body = [body]
    df = pd.DataFrame({"SenderName":sender,"SenderEmailAddress":sender_email,"Subject":subject,"Body":body})
    df["Text"] = df["Subject"].astype(str) + " " + df["Body"].astype(str)

    #region Get domain
    domainList = []
    for mail in df["SenderEmailAddress"]:
        try:
            if '@' in mail:
                spl = mail.split('@')
                if len(spl) > 1:
                    domainList.append(spl[1])
                else:
                    domainList.append("na")
            else:
                domainList.append("na")
        except:
            domainList.append("na")

    df["domain"] = domainList
    #endregion

    #region Name Email Similarity
    name_email_sim = []
    for i in range(len(df)):
        spl = []
        try:
            spl = df["SenderEmailAddress"][i].split('@')
        except:
            name_email_sim.append(0)
            continue
        email_name = df["SenderEmailAddress"][i].split('@')[0]
        name_email_sim.append(similar(df["SenderName"][i], email_name))

    df["name_email_sim"] = name_email_sim
    #endregion

    #region Domain URL Similarity
    df["domain_url_sim"] = [domain_url_similarity(str(df["domain"][i]), str(df["Text"][i])) for i in range(len(df))]
    #endregion

    #region Common Words
    df["exclamation_count"] = [str(doc).count('!') for doc in df.Text]
    df["url_count"] = [count_urls(str(doc)) for doc in df.Text]
    df["money_count"] = [sum(str(s).lower().count(x) for x in money_words) for s in df.Text]
    df["identity_count"] = [sum(str(s).lower().count(x) for x in identity_words) for s in df.Text]
    df["access_count"] = [sum(str(s).lower().count(x) for x in access_words) for s in df.Text]
    df["linker_count"] = [sum(str(s).lower().count(x) for x in linker_words) for s in df.Text]
    df["hook_count"] = [sum(str(s).lower().count(x) for x in hook_words) for s in df.Text]
    df["maybe_count"] = [sum(str(s).lower().count(x) for x in maybe_words) for s in df.Text]
    df["meeting_count"] = [sum(str(s).lower().count(x) for x in meeting_words) for s in df.Text]
    df["company_count"] = [sum(str(s).lower().count(x) for x in company_words) for s in df.Text]

    df["money_std"] = minmax_scale(df["money_count"])
    df["identity_std"] = minmax_scale(df["identity_count"])
    df["url_std"] = minmax_scale(df["url_count"])
    df["exclamation_std"] = minmax_scale(df["exclamation_count"])
    df["access_std"] = minmax_scale(df["access_count"])
    df["linker_std"] = minmax_scale(df["linker_count"])
    df["hook_std"] = minmax_scale(df["hook_count"])
    df["maybe_std"] = minmax_scale(df["maybe_count"])
    df["meeting_std"] = minmax_scale(df["meeting_count"])
    df["company_std"] = minmax_scale(df["company_count"])
    #endregion

    x = vectorizer.transform(df.Text)
    x = hstack(blocks=[x, np.array(df[['money_std', 'identity_std', 'url_std', 'exclamation_std',
                                                        'access_std', 'linker_std', 'hook_std', 'maybe_std',
                                                        'meeting_std', 'company_std', 'name_email_sim',
                                                        'domain_url_sim']])]).tocsr()

    return x

#endregion


app = flask.Flask(__name__, static_url_path="/static")
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return render_template("home.html")

@app.route('/aboutus', methods=['GET'])
def about_us():
    return render_template('aboutus.html')
# <a href='/ui/phishingitout'>Launch UI</a>
# @app.route('/api/v1/phishingitout', methods=['GET'])
# def api_all():
#     return jsonify(books)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.route('/api/v1/phishingitout', methods=['GET'])
def api_filter():
    query_parameters = request.args

    sender = query_parameters.get('sender')
    sender_email = query_parameters.get('senderemail')
    subject = query_parameters.get('subject')
    body = query_parameters.get('body')
    # print("Sender:",sender)
    # print("Sender Email:", sender_email)
    # print("Subject:", subject)
    # print("Body:", body)
    df = create_working_dataset(sender, sender_email, subject, body)
    # return probability(df)
    return flask.jsonify({'prob':probability(df)})

@app.route('/ui/phishingitout', methods=['GET', 'POST'])
def form_example():
    if request.method == 'POST':
        sender = request.form.get('sender')
        sender_email = request.form.get('senderemail')
        subject = request.form.get('subject')
        body = request.form.get('body')
        df = create_working_dataset(sender, sender_email, subject, body)
        p = probability(df)
        if p > 0.5:
            return render_template_string(output.format(color = 'red', text = 'This could be a phishing email!', prob = p))
        else:
            return render_template_string(output.format(color='green', text='This is not a phishing email!', prob=p))
    else:
        return render_template('ui.html')


@app.route('/ui/mail', methods=['GET'])
def mailbox():
    return render_template('mailbox.html')
# app.register_error_handler(404, page_not_found)

# @app.route('/get_prob')
# def get_prob():
#   # word = flask.request.args.get('word')
#   print(request.args.get("sender"))
#   sender = flask.request.args.get('sender')
#   sender_email = flask.request.args.get('senderemail')
#   subject = flask.request.args.get('subject')
#   body = flask.request.args.get('body')
#   print("sender:",sender)
#   print("sender email:", sender_email)
#   print("subject:", subject)
#   print("body:", body)
#   df = create_working_dataset(sender, sender_email, subject, body)
#   p = probability(df)
#   print(p)
#   return flask.jsonify({'prob':p})
app.run( )