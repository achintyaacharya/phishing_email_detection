# Phishing Email Detection
About 1 in 4200 mails is a phishing email. Even one person clicking on phishing clickbait can lead to huge amounts of losses of data. This solution provides a classification model and an API which can be integrated to any mailing server to notify the user of mails which have been classified as phishing by the classification model.
The code in the jupyter notebok implements a stacked ensemble with 7 base learners and 1 meta learner. There is also implementation of Gradient Boosting and Naive Bayes which actually perform much better than the stacked ensemble.
There are various feature extraction techniques used however, with text analysis, sky is the limit. There are so many more things that can be done to better classify phishing emails.
