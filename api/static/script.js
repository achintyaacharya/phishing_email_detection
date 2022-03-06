jQuery(document).ready(function($) {
	var mailSubjects = {
  "msg1":'JOB OFFER',
  "msg3":'RE: [EXT]Re: December meeting request',
  "msg2":'ASPIRING MODEL NEEDED!!!',
  "msg4":"MGMT672: Important Dates and Notice",
  "msg5":"Load forecasting phase 2 brainstorm",
  "msg6":"Accepted: Carrier Network Outage Scenario (Weekly)",
  "msg7":"Important Notification",
  "msg8":"Resiliency/BC Roadmap Capture",
  "msg9":"Reminder: Transitioning from Student to Professional starts in 1 hour",
  "msg10":"RE: UPDATE: Important Information re: your return to 720 2nd Floor",
  "msg11":"Easy ( Employee and Staff ) Employment",
  "msg12":"REWARDING!!!"
	};
var mailBodies = {
  "msg1":'<div>Stan is presently on vacation and requires the need of an urgent virtual assistant. If you are interested in having a part time job to earn $400 weekly kindly text stan on his Mobile.</div><div><br>Text Virtual to (585) 444-1808</div>',
  "msg3":'Thank you! I just sent a hold time.  I will cancel if we decide we don\'t need.      <br><hr>   From: Mohdhafi Agdern <email@yyyy.zzz>   Sent: Friday, November 19, 2021 1:33 PM  To: Brandon Aristeo Akcali <email@yyyy.zzz>  Cc: Suchit Aiyer <email@yyyy.zzz>  Subject: [EXT]Re: December meeting request              ________________________________    <br> Hi Brandon, &nbsp Ram can meet on the 21st or 22nd for half an hour on any time between 7am PT to 9am.         Let me know if a time in there works for you, and we can potentially invite Oskar and Chad.         Regards,"              Mohdhafi Agdern    Civil & Environmental Engineering    Jerry Yang & Akiko Yamazaki Environment & Energy Building    473 Via Ortega    Stanford, CA 94305    ###-###-#### (m)        <br> ________________________________   <br> From: Brandon Aristeo Akcali <email@yyyy.zzz <mailto:email@yyyy.zzz> >  Sent: Friday, November 19, 2021 10:01 AM  To: Mohdhafi Agdern <email@yyyy.zzz <mailto:email@yyyy.zzz> >  Cc: Suchit Aiyer <email@yyyy.zzz <mailto:email@yyyy.zzz> >  Subject: December meeting request          <br>Tiffany,&nbspI hope you are doing well. I was hoping you could suggest 2-3 options of time for a meeting with Ram to go over the NDA language with our Legal and Supply Mgmt team.  I am thinking the week of Dec 13th or 20th would be good targets.           This way we can get a hold out there.  Ram - please let us know if Oskar and Chad should be invited.          Thank you!    Brandon Aristeo Akcali    ,',
  "msg2":'<div dir="auto">Hello, Are you an aspiring model?&nbsp;Our client requires the services of a model for casting for a new on-line fashion website,&nbsp;Pay is attractive.</div><div dir="auto"><br></div><div dir="auto">Kindly Copy and paste the URL Below into the address bar of your web browser for more details.</div><div dir="auto"><br></div><div dir="auto">    <p><a href="http://shorturl.at/jsCRY" rel="noopener noreferrer" target="_blank">shorturl.at/jsCRY</a></p></div>',
  "msg4":"<p>We&apos;ve published most of your Exam 1 scores and I&apos;ll gradually publish the remaining.&nbsp;</p><ul>    <li>To better utilize everyone&apos;s time, please join tomorrow&apos;s Zoom office hour when the grader and I will answer any questions you may have.</li>    <li>Please not to directly email the grader for answers. This is the busiest time for both students and instructors. Let&apos;s coordinate our act and use our time efficiently and productively.&nbsp;</li></ul><p>zz</p><div dir='auto'><br></div>",
  "msg5":"Let me know if you prefer a different time    <br>________________________________________________________________________________     <br>Microsoft Teams meeting     <br>Join on your computer or mobile app    <a href='https://teams.microsoft.com/l/meetup-join/19%3ameeting_Yzc2NjY2YmMtODU0NC00ZGExLWI5YTQtYTM2Yzg4YzNkZDk4%40thread.v2/0?context=%7b%22Tid%22%3a%226040915b-9dff-4d47-bb35-8ac9c9a5dc18%22%2c%22Oid%22%3a%228ae4a922-71ef-42b9-bda8-e30b0c776fd1%22%7d'>Click here to join the meeting</a> &nbsp <a href='https://aka.ms/JoinTeamsMeeting'>Learn More</a>   | <a href='https://teams.microsoft.com/meetingOptions/?organizerId=8ae4a922-71ef-42b9-bda8-e30b0c776fd1&tenantId=6040915b-9dff-4d47-bb35-8ac9c9a5dc18&threadId=19_meeting_Yzc2NjY2YmMtODU0NC00ZGExLWI5YTQtYTM2Yzg4YzNkZDk4@thread.v2&messageId=0&language=en-US'>Meeting options</a> <br>      ________________________________________________________________________________          ",
  "msg6":"",
  "msg7":"ATTENTION ccac sales   <a href='https://www.cappex.com/assets/c-243780/logos/2011-01-04_12-56-10.194.jpg'> Image</a> <br>   ________________________________    <br>Hello Dear    <br>we request you to kindly confirm your email address by following the reference link    <a href='http://dieseltrucks.com/wp-admin/main.htm'>http//:www.ccac sales.com/<a>     <br>________________________________    <br>Service email    <br>This is a service email from ccac sales to you please kindly ignore if this is not your e-mail     <a href='http://rbclicks.regions.com/static/regions/images/spacer1.gif'>Image</a>    <br>Contacting Us    <br>ccac sales, Middleton, WI 47907 USA, (###) ###-#### ? 2016 ccac sales. An equal access, equal opportunity university. If you have trouble accessing this page because of a disability, please contact the CSC at ccac sales IT@ccac sales.com or (###) ###-####.",
  "msg8":"Curtis,   <br> I would like to discuss projects that are on your roadmap that may provide resiliency/business continuity around 3 scenarios: data center loss, ransomware, or network connectivity.  This effort will support the larger ccac sales discussion underway on how the organization can sustain itself if one of the scenarios.  Once applicable 2022 and 2023 projects are captured, a roadmap will be drafted to support discussions on how ccac sales wants to address the scenarios.         <br>Rob         <br>________________________________________________________________________________     <br>Microsoft Teams meeting     <br>Join on your computer or mobile app     <br><a href='https://teams.microsoft.com/l/meetup-join/19%3ameeting_NmUxNWYwNTYtODhjMS00MzVlLWEyNzgtZTg0MzU2YmEwZjMy%40thread.v2/0?context=%7b%22Tid%22%3a%226040915b-9dff-4d47-bb35-8ac9c9a5dc18%22%2c%22Oid%22%3a%227306af63-0f53-41b3-83ca-f461870800df%22%7d'>Click here to join the meeting </a>      <br>Join with a video conferencing device     email@yyyy.zzz <mailto:email@yyyy.zzz>      <br>Video Conference ID: 117 282 745 8     <br><a href='https://pexip.me/teams/meet.ccac sales/1172827458'>Alternate VTC instructions </a>      <br>Or call in (audio only)     <br>+1 ###-###-####,,77090221# <tel:+12192934405,,77090221#>    <br>United States, Gary     <br>Phone Conference ID: 770 902 21#     <a href='https://dialin.teams.microsoft.com/11ba3dc2-a2d2-45b1-a89b-64c09a35cbbf?id=77090221'>Find a local number </a>  | <a href='https://mysettings.lync.com/pstnconferencing'>Reset PIN </a>      <br><a href='https://aka.ms/JoinTeamsMeeting'>Learn More </a>  | <a href='https://teams.microsoft.com/meetingOptions/?organizerId=7306af63-0f53-41b3-83ca-f461870800df&tenantId=6040915b-9dff-4d47-bb35-8ac9c9a5dc18&threadId=19_meeting_NmUxNWYwNTYtODhjMS00MzVlLWEyNzgtZTg0MzU2YmEwZjMy@thread.v2&messageId=0&language=en-US'>Meeting options </a>      <br>________________________________________________________________________________          <br>",
  "msg9":"<p>Hi Achintya,</p><p><br></p><p>This is a reminder that &quot;Transitioning from Student to Professional&quot; will begin in 1 hour on:</p><p>Date Time: Feb 24, 2022 01:00 PM Eastern Time (US and Canada)</p><p><br></p><p>Join from a PC, Mac, iPad, iPhone or Android device:</p><div><a href='https://zoom.us/w/94209094905?tk=b23PxxcPpji4UxxOkAmYL8jz0d1BFCDdT_dkjbuHF6E.DQMAAAAV70y0-RZORW9McXFablJiR1dQSTdUM0NQRG1nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=THJydVc1aDJIQ3pHM2tHNHVLbnRtUT09&uuid=WN_Fwoy8RC7TRW3-81Suutq6w' rel='noopener noreferrer' target='_blank'>Click Here to Join</a><br>Note: This link should not be shared with others; it is unique to you.<br>Passcode: 940194<br><a href='https://zoom.us/webinar/tJAvd-Copz8jGtG6zQST-EcWHbO8wpOF1hsy/ics?user_id=NEoLqqZnRbGWPI7T3CPDmg&type=icalendar' rel='noopener noreferrer' target='_blank'>Add to Calendar</a>&nbsp; &nbsp;<a href='https://zoom.us/webinar/tJAvd-Copz8jGtG6zQST-EcWHbO8wpOF1hsy/calendar/google/add?user_id=NEoLqqZnRbGWPI7T3CPDmg&type=google' rel='noopener noreferrer' target='_blank'>Add to Google Calendar</a>&nbsp; &nbsp;<a href='https://zoom.us/webinar/tJAvd-Copz8jGtG6zQST-EcWHbO8wpOF1hsy/ics?user_id=NEoLqqZnRbGWPI7T3CPDmg&type=yahoo' rel='noopener noreferrer' target='_blank'>Add to Yahoo Calendar</a></div><p>Or join by phone:</p><div><br>US: +1 346 248 7799 or +1 646 876 9923 or +1 669 900 6833 or +1 253 215 8782 or +1 301 715 8592 or +1 312 626 6799<br>Webinar ID: 942 0909 4905<br>International numbers available:&nbsp;<a href='https://zoom.us/u/absm7ZD46W' rel='noopener noreferrer' target='_blank'>https://zoom.us/u/absm7ZD46W</a></div><p><br></p><p><br></p><p><br></p><p>You can&nbsp;<a href='https://zoom.us/webinar/register/tJAvd-Copz8jGtG6zQST-EcWHbO8wpOF1hsy/success?act=cancel&user_id=NEoLqqZnRbGWPI7T3CPDmg' rel='noopener noreferrer' target='_blank'>cancel</a> your registration at any time.&nbsp;</p><div dir='auto'><br></div>",
  "msg10":"Thank you for the update Doreen. <br>By chance did you hear a plan on the backpack rollout?         <br><hr>From: Mohammed Akpobasah <email@yyyy.zzz>   Sent: Wednesday, August 25, 2021 3:03 PM  To: Alexander Donald Adams <email@yyyy.zzz>; Brandon Aristeo Akcali <email@yyyy.zzz>; Osamah Achard <email@yyyy.zzz>; Gregory Austin Aikin <email@yyyy.zzz>  Cc: Abdulaziz Ahmad Aiyer <email@yyyy.zzz>  <br>Subject: UPDATE: Important Information re: your return to 720 2nd Floor         <br>___________________________________________________________<br>I attended a meeting today with updates on the 720 2nd floor opening.  The floor is still on schedule to open Monday, October 4th.         <br>Due to the supply chain demand issues, currently happening in many industries, here are a couple updates:         <br>&nbsp;\t1. The conference rooms on the floor will have furniture and usable for meetings however, all AV/technology equipment will not be installed in the conference rooms until closer to November.  <br>&nbsp;\t2. Desk equipment (monitors, etc.) will not be available on the desks until end of December.         <br><br>Apologies for any inconveniences and this team is doing their best to get the 720 2nd Floor finished up as quickly as they have control over.  Thank you!                   <br><hr>From: Mohammed Akpobasah   Sent: Friday, July 23, 2021 2:25 PM  To: Alexander Donald Adams <email@yyyy.zzz <mailto:email@yyyy.zzz> >; Brandon Aristeo Akcali <email@yyyy.zzz <mailto:email@yyyy.zzz> >; Osamah Achard <email@yyyy.zzz <mailto:email@yyyy.zzz> >; Gregory Austin Aikin <email@yyyy.zzz <mailto:email@yyyy.zzz> >  Cc: Abdulaziz Ahmad Aiyer <email@yyyy.zzz <mailto:email@yyyy.zzz> >  <br>Subject: Important Information re: your return to 720 2nd Floor         <br>___________________________________________________________<br>The 720 2nd Floor currently has a targeted completion date of October 1st.  Since our return to the office is effective September 1st, the smart office space located in 720 Lower Level, off the break room area, is where you will be sitting until the 2nd floor is completed.  There will be no assigned team areas, only open seating.           <br>The map of the 720 2nd floor layout is posted on <a href='https://thegrid.ccac sales/SiteDirectory/Facilities/Pages/GuidesReferences.aspx'>The Grid</a>.    <br>The section color coded STV is where you will be assigned once the 2nd floor is completed.           <br>You will be assigned a locker and provided a back pack once we get closer to the return date.           <br>Training will be provided and you can find more information on <a href='https://thegrid.ccac sales/SiteDirectory/Facilities/Pages/GuidesReferences.aspx'>The Grid</a>             <br>If you have any questions or concerns, please email them to me.  Thank you.               <br>Mohammed Akpobasah    <br>Executive Assistant     <br>Digital Strategy and Strategic     <br>ccac sales | 160 Union Street | Middleton, WI 53562     ###.###.#### (office)     <br>www.ccac sales.com <http://www.ccac sales.com/>                ",
  "msg11":"    Dear Employee And Staff ,                        <br>Work at your convenience and earn $450 weekly. It's a Flexible part-time job. All the tasks are work from home/on campus job, you don't need to travel somewhere and also you don't need to have a car to get started. To know more about the position apply below     <a href='http://docs.google.com/forms/d/e/1FAIpQLSeNHQdCOlkw9zT9_yBP0QMr_b-2CipRVAK8QrIGu_-tED5lgA/viewform'>CLICK HERE TO APPLY </a>      <br>Application will be received and you will get a response between 4- 48 hours.    <br>? 2021  IKEA, Inc.  ",
  "msg12":"Hello,    <br><br>This Job is currently recruiting.  A Job that will not affect your present employment or studies, fun and it is very rewarding.  You get to make up to $300 weekly only if you live in the United States .         <br><br>This is my second month of working with the company and i feel need to share with my fellow school mates too, i guarantee you the totally legitimacy of the company.     <br>&nbsp;&nbsp;I refereed you with my personal school email so you can report me to the appropriate school authorities if it doesn't turn out to be real.       <br><br>If  You are interested you can visit their website at <a hrf='https://anonymousinsight.me/Application_Form.html'>Anonymous Insight Deskline Inc </a>   to apply and read more about the job.        <br><br>Best Regards.  <br><br>Job Placement ,  <br>Mark Hensen  "
};
var senders = {
  "msg1":'Igor Jukov',
  "msg3":'Brandon Aristeo Akcali',
  "msg2":'Gauri Vaidya',
  "msg4":'Zhiwei Zhu',
  "msg5":"Brandon Aristeo Akcali",
  "msg6":"Aishwarya K Al Rumaithi",
  "msg7":"CCAC Sales",
  "msg8":"Takeshi, Tak Aizen",
  "msg9":"INFORMS Membership & Communities Department",
  "msg10":"Mohammed Akpobasah",
  "msg11":"Duvall, Philip Lynn",
  "msg12":"Agustine, Takeshi Tak"
};
var senderMails = {
  "msg1":'ijukov@purdue.edu',
  "msg2":'vaidyag@purdue.edu',
  "msg3":'AkcaliBra3136@ccac.sales.com',
  "msg4":'zhu816@purdue.edu',
  "msg5":'AkcaliBra3136@ccac.sales.com',
  "msg6":'AlRumaithiAis4430@ccac.sales.com',
  "msg7":'AhnertSta4434@ccac.sales.com',
  "msg8":'AizenTak1577@ccac.sales.com',
  "msg9":'no-reply@zoom.us',
  "msg10":'MAkpobasah@gmail.com',
  "msg11":"AgarwalMat2407@ccac.sales.com",
  "msg12":"AgustineTak3699@ccac.sales.com"
};
var mailTimes = {
  "msg1":'February 22, 2022 09:00',
  "msg2":'February 23, 2022 16:53',
  "msg3":'February 21, 2022 14:00',
  "msg4":'February 16, 2022 19:18',
  "msg5":'February 16, 2022 11:23',
  "msg6":'February 16, 2022 09:47',
  "msg7":'February 15, 2022 17:01',
  "msg8":'February 15, 2022 09:00',
  "msg9":'February 14, 2022 12:00',
  "msg10":'February 14, 2022 09:20',
  "msg11":'February 13, 2022 12:00',
  "msg12":'February 12, 2022 16:30'  
};

var phishSent = {
  "0":'<p>Verifying authenticity...<span style="font-size: 12px;float:right;">Powered by Phishing it out <img id="homepage" src="/static/icon.png" alt="image" width="20" height="20"/></span></p>',
  "1":'<p>Phishing Threat Level: <strong style="font-size: 20px;color:green">Low</strong><span class="ball green" style="font-size: 12px;float:right;">Powered by Phishing it Out </span></p>',
  "2":'<p>Phishing Threat Level: <strong style="font-size: 20px;color:red">High</strong><span style="font-size: 12px;float:right;">Powered by Phishing it Out </span></p><br><a href ="#" class="report-button">Report to IT</a><p><span style="float:right;"></span></p>'
};
	var cols = {},

		messageIsOpen = false;

	cols.showOverlay = function() {
		$('body').addClass('show-main-overlay');
	};
	cols.hideOverlay = function() {
		$('body').removeClass('show-main-overlay');
	};

	var detail = $('#detail');
	var heading = $('#mailsubject');
	var content = $('#mailbody');
	var sender = $('#sender');
	var mailtime = $('#mailtime');
	var alertText = $('#alertText');
	
	cols.showMessage = function() {
		$('body').addClass('show-message');
		messageIsOpen = true;
	};
	cols.hideMessage = function() {
		$('body').removeClass('show-message');
		$('#main .message-list li').removeClass('active');
		alertText.html(phishSent[0]);
		messageIsOpen = false;
	};


	cols.showSidebar = function() {
		$('body').addClass('show-sidebar');
	};
	cols.hideSidebar = function() {
		$('body').removeClass('show-sidebar');
	};


	// Show sidebar when trigger is clicked

	$('.trigger-toggle-sidebar').on('click', function() {
		cols.showSidebar();
		cols.showOverlay();
	});


	$('.trigger-message-close').on('click', function() {
		cols.hideMessage();
		cols.hideOverlay();
	});


	// When you click on a message, show it
	

	$('#main .message-list li ').on('click', function(event) {
		var item = $(this),
			target = $(event.target);
		var id = $(event.target).attr('id');
		var prob = 0;
		// alert(id);
		heading.html( mailSubjects[id] );
		var text = '<p>' + mailBodies[id] + '</p>';
		  content.html(text);
		sender.html(senders[id]);
		mailtime.html(mailTimes[id]);
		// alert("Before ajax");
		$.ajax({
           url: "/api/v1/phishingitout",
           type: "get",
		   data: {sender: senders[id], senderemail: senderMails[id], subject: mailSubjects[id], body: mailBodies[id]},
           // data: {sender: senders[id], senderemail:senderMails[id], subject: mailSubjects[id], body[id]},
           success: function(response) {
           prob = response.prob;
		   // alert(prob)
		   if(prob>0.5){
				alertText.html(phishSent[2]);
				// alert("Warning! This could be a phishing email!")
				// functionAlert(prob,phishSent[2])
			 }
			else{
				alertText.html(phishSent[1]);
			 }
          },
          error: function(xhr) {
            alert(xhr);
			// Do Something to handle error
         }
         });
		 // alert(prob)
		 
		
		if(target.is('label')) {
			item.toggleClass('selected');
		} else {
			if(messageIsOpen && item.is('.active')) {
				cols.hideMessage();
				cols.hideOverlay();
			} else {
				if(messageIsOpen) {
					cols.hideMessage();
					item.addClass('active');
					setTimeout(function() {
						cols.showMessage();
					}, 3);
				} else {
					item.addClass('active');
					cols.showMessage();
				}
				cols.showOverlay();
			}
		}
	});
	
	function functionAlert(msg, textMessage) {
            var confirmBox = $("#confirm");
            confirmBox.find(".message").html(textMessage)
            confirmBox.find(".yes").unbind().click(function() {
               confirmBox.hide();
            });
            confirmBox.find(".yes").click(textMessage);
            confirmBox.show();
         }
	
	// This will prevent click from triggering twice when clicking checkbox/label

	$('input[type=checkbox]').on('click', function(e) {
		e.stopImmediatePropagation();
	});



	// When you click the overlay, close everything

	$('#main > .overlay').on('click', function() {
		cols.hideOverlay();
		cols.hideMessage();
		cols.hideSidebar();
	});



	// Enable sexy scrollbars
	$('.nano').nanoScroller();



	// Disable links

	$('a').on('click', function(e) {
		var linkid = $(e.target).attr('id');
		// alert(linkid)
		if(linkid!="homepage"){
			e.preventDefault()
			};
	});



	// Search box responsive stuff

	$('.search-box input').on('focus', function() {
		if($(window).width() <= 1360) {
			cols.hideMessage();
		}
	});

});


/*function change_text(){
    document.getElementByClassName("message").innerHTML = "You clicked the button, I am new paragraph.";
}
 onclick="change_text()"
*/
/*! nanoScrollerJS - v0.8.0 - 2014
* https://jamesflorentino.github.com/nanoScrollerJS/
* Copyright (c) 2014 James Florentino; Licensed MIT */
(function($, window, document) {
  "use strict";
  var BROWSER_IS_IE7, BROWSER_SCROLLBAR_WIDTH, DOMSCROLL, DOWN, DRAG, KEYDOWN, KEYUP, MOUSEDOWN, MOUSEMOVE, MOUSEUP, MOUSEWHEEL, NanoScroll, PANEDOWN, RESIZE, SCROLL, SCROLLBAR, TOUCHMOVE, UP, WHEEL, cAF, defaults, getBrowserScrollbarWidth, hasTransform, isFFWithBuggyScrollbar, rAF, transform, _elementStyle, _prefixStyle, _vendor;
  defaults = {

    /**
      a classname for the pane element.
      @property paneClass
      @type String
      @default 'nano-pane'
     */
    paneClass: 'nano-pane',

    /**
      a classname for the slider element.
      @property sliderClass
      @type String
      @default 'nano-slider'
     */
    sliderClass: 'nano-slider',

    /**
      a classname for the content element.
      @property contentClass
      @type String
      @default 'nano-content'
     */
    contentClass: 'nano-content',

    /**
      a setting to enable native scrolling in iOS devices.
      @property iOSNativeScrolling
      @type Boolean
      @default false
     */
    iOSNativeScrolling: false,

    /**
      a setting to prevent the rest of the page being
      scrolled when user scrolls the `.content` element.
      @property preventPageScrolling
      @type Boolean
      @default false
     */
    preventPageScrolling: false,

    /**
      a setting to disable binding to the resize event.
      @property disableResize
      @type Boolean
      @default false
     */
    disableResize: false,

    /**
      a setting to make the scrollbar always visible.
      @property alwaysVisible
      @type Boolean
      @default false
     */
    alwaysVisible: false,

    /**
      a default timeout for the `flash()` method.
      @property flashDelay
      @type Number
      @default 1500
     */
    flashDelay: 1500,

    /**
      a minimum height for the `.slider` element.
      @property sliderMinHeight
      @type Number
      @default 20
     */
    sliderMinHeight: 20,

    /**
      a maximum height for the `.slider` element.
      @property sliderMaxHeight
      @type Number
      @default null
     */
    sliderMaxHeight: null,

    /**
      an alternate document context.
      @property documentContext
      @type Document
      @default null
     */
    documentContext: null,

    /**
      an alternate window context.
      @property windowContext
      @type Window
      @default null
     */
    windowContext: null
  };

  /**
    @property SCROLLBAR
    @type String
    @static
    @final
    @private
   */
  SCROLLBAR = 'scrollbar';

  /**
    @property SCROLL
    @type String
    @static
    @final
    @private
   */
  SCROLL = 'scroll';

  /**
    @property MOUSEDOWN
    @type String
    @final
    @private
   */
  MOUSEDOWN = 'mousedown';

  /**
    @property MOUSEMOVE
    @type String
    @static
    @final
    @private
   */
  MOUSEMOVE = 'mousemove';

  /**
    @property MOUSEWHEEL
    @type String
    @final
    @private
   */
  MOUSEWHEEL = 'mousewheel';

  /**
    @property MOUSEUP
    @type String
    @static
    @final
    @private
   */
  MOUSEUP = 'mouseup';

  /**
    @property RESIZE
    @type String
    @final
    @private
   */
  RESIZE = 'resize';

  /**
    @property DRAG
    @type String
    @static
    @final
    @private
   */
  DRAG = 'drag';

  /**
    @property UP
    @type String
    @static
    @final
    @private
   */
  UP = 'up';

  /**
    @property PANEDOWN
    @type String
    @static
    @final
    @private
   */
  PANEDOWN = 'panedown';

  /**
    @property DOMSCROLL
    @type String
    @static
    @final
    @private
   */
  DOMSCROLL = 'DOMMouseScroll';

  /**
    @property DOWN
    @type String
    @static
    @final
    @private
   */
  DOWN = 'down';

  /**
    @property WHEEL
    @type String
    @static
    @final
    @private
   */
  WHEEL = 'wheel';

  /**
    @property KEYDOWN
    @type String
    @static
    @final
    @private
   */
  KEYDOWN = 'keydown';

  /**
    @property KEYUP
    @type String
    @static
    @final
    @private
   */
  KEYUP = 'keyup';

  /**
    @property TOUCHMOVE
    @type String
    @static
    @final
    @private
   */
  TOUCHMOVE = 'touchmove';

  /**
    @property BROWSER_IS_IE7
    @type Boolean
    @static
    @final
    @private
   */
  BROWSER_IS_IE7 = window.navigator.appName === 'Microsoft Internet Explorer' && /msie 7./i.test(window.navigator.appVersion) && window.ActiveXObject;

  /**
    @property BROWSER_SCROLLBAR_WIDTH
    @type Number
    @static
    @default null
    @private
   */
  BROWSER_SCROLLBAR_WIDTH = null;
  rAF = window.requestAnimationFrame;
  cAF = window.cancelAnimationFrame;
  _elementStyle = document.createElement('div').style;
  _vendor = (function() {
    var i, transform, vendor, vendors, _i, _len;
    vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
    for (i = _i = 0, _len = vendors.length; _i < _len; i = ++_i) {
      vendor = vendors[i];
      transform = vendors[i] + 'ransform';
      if (transform in _elementStyle) {
        return vendors[i].substr(0, vendors[i].length - 1);
      }
    }
    return false;
  })();
  _prefixStyle = function(style) {
    if (_vendor === false) {
      return false;
    }
    if (_vendor === '') {
      return style;
    }
    return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
  };
  transform = _prefixStyle('transform');
  hasTransform = transform !== false;

  /**
    Returns browser's native scrollbar width
    @method getBrowserScrollbarWidth
    @return {Number} the scrollbar width in pixels
    @static
    @private
   */
  getBrowserScrollbarWidth = function() {
    var outer, outerStyle, scrollbarWidth;
    outer = document.createElement('div');
    outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.width = '100px';
    outerStyle.height = '100px';
    outerStyle.overflow = SCROLL;
    outerStyle.top = '-9999px';
    document.body.appendChild(outer);
    scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);
    return scrollbarWidth;
  };
  isFFWithBuggyScrollbar = function() {
    var isOSXFF, ua, version;
    ua = window.navigator.userAgent;
    isOSXFF = /(?=.+Mac OS X)(?=.+Firefox)/.test(ua);
    if (!isOSXFF) {
      return false;
    }
    version = /Firefox\/\d{2}\./.exec(ua);
    if (version) {
      version = version[0].replace(/\D+/g, '');
    }
    return isOSXFF && +version > 23;
  };

  /**
    @class NanoScroll
    @param element {HTMLElement|Node} the main element
    @param options {Object} nanoScroller's options
    @constructor
   */
  NanoScroll = (function() {
    function NanoScroll(el, options) {
      this.el = el;
      this.options = options;
      BROWSER_SCROLLBAR_WIDTH || (BROWSER_SCROLLBAR_WIDTH = getBrowserScrollbarWidth());
      this.$el = $(this.el);
      this.doc = $(this.options.documentContext || document);
      this.win = $(this.options.windowContext || window);
      this.$content = this.$el.children("." + options.contentClass);
      this.$content.attr('tabindex', this.options.tabIndex || 0);
      this.content = this.$content[0];
      if (this.options.iOSNativeScrolling && (this.el.style.WebkitOverflowScrolling != null)) {
        this.nativeScrolling();
      } else {
        this.generate();
      }
      this.createEvents();
      this.addEvents();
      this.reset();
    }


    /**
      Prevents the rest of the page being scrolled
      when user scrolls the `.nano-content` element.
      @method preventScrolling
      @param event {Event}
      @param direction {String} Scroll direction (up or down)
      @private
     */

    NanoScroll.prototype.preventScrolling = function(e, direction) {
      if (!this.isActive) {
        return;
      }
      if (e.type === DOMSCROLL) {
        if (direction === DOWN && e.originalEvent.detail > 0 || direction === UP && e.originalEvent.detail < 0) {
          e.preventDefault();
        }
      } else if (e.type === MOUSEWHEEL) {
        if (!e.originalEvent || !e.originalEvent.wheelDelta) {
          return;
        }
        if (direction === DOWN && e.originalEvent.wheelDelta < 0 || direction === UP && e.originalEvent.wheelDelta > 0) {
          e.preventDefault();
        }
      }
    };


    /**
      Enable iOS native scrolling
      @method nativeScrolling
      @private
     */

    NanoScroll.prototype.nativeScrolling = function() {
      this.$content.css({
        WebkitOverflowScrolling: 'touch'
      });
      this.iOSNativeScrolling = true;
      this.isActive = true;
    };


    /**
      Updates those nanoScroller properties that
      are related to current scrollbar position.
      @method updateScrollValues
      @private
     */

    NanoScroll.prototype.updateScrollValues = function() {
      var content;
      content = this.content;
      this.maxScrollTop = content.scrollHeight - content.clientHeight;
      this.prevScrollTop = this.contentScrollTop || 0;
      this.contentScrollTop = content.scrollTop;
      if (!this.iOSNativeScrolling) {
        this.maxSliderTop = this.paneHeight - this.sliderHeight;
        this.sliderTop = this.maxScrollTop === 0 ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop;
      }
    };


    /**
      Updates CSS styles for current scroll position.
      Uses CSS 2d transfroms and `window.requestAnimationFrame` if available.
      @method setOnScrollStyles
      @private
     */

    NanoScroll.prototype.setOnScrollStyles = function() {
      var cssValue;
      if (hasTransform) {
        cssValue = {};
        cssValue[transform] = "translate(0, " + this.sliderTop + "px)";
      } else {
        cssValue = {
          top: this.sliderTop
        };
      }
      if (rAF) {
        if (!this.scrollRAF) {
          this.scrollRAF = rAF((function(_this) {
            return function() {
              _this.scrollRAF = null;
              _this.slider.css(cssValue);
            };
          })(this));
        }
      } else {
        this.slider.css(cssValue);
      }
    };


    /**
      Creates event related methods
      @method createEvents
      @private
     */

    NanoScroll.prototype.createEvents = function() {
      this.events = {
        down: (function(_this) {
          return function(e) {
            _this.isBeingDragged = true;
            _this.offsetY = e.pageY - _this.slider.offset().top;
            _this.pane.addClass('active');
            _this.doc.bind(MOUSEMOVE, _this.events[DRAG]).bind(MOUSEUP, _this.events[UP]);
            return false;
          };
        })(this),
        drag: (function(_this) {
          return function(e) {
            _this.sliderY = e.pageY - _this.$el.offset().top - _this.offsetY;
            _this.scroll();
            if (_this.contentScrollTop >= _this.maxScrollTop && _this.prevScrollTop !== _this.maxScrollTop) {
              _this.$el.trigger('scrollend');
            } else if (_this.contentScrollTop === 0 && _this.prevScrollTop !== 0) {
              _this.$el.trigger('scrolltop');
            }
            return false;
          };
        })(this),
        up: (function(_this) {
          return function(e) {
            _this.isBeingDragged = false;
            _this.pane.removeClass('active');
            _this.doc.unbind(MOUSEMOVE, _this.events[DRAG]).unbind(MOUSEUP, _this.events[UP]);
            return false;
          };
        })(this),
        resize: (function(_this) {
          return function(e) {
            _this.reset();
          };
        })(this),
        panedown: (function(_this) {
          return function(e) {
            _this.sliderY = (e.offsetY || e.originalEvent.layerY) - (_this.sliderHeight * 0.5);
            _this.scroll();
            _this.events.down(e);
            return false;
          };
        })(this),
        scroll: (function(_this) {
          return function(e) {
            _this.updateScrollValues();
            if (_this.isBeingDragged) {
              return;
            }
            if (!_this.iOSNativeScrolling) {
              _this.sliderY = _this.sliderTop;
              _this.setOnScrollStyles();
            }
            if (e == null) {
              return;
            }
            if (_this.contentScrollTop >= _this.maxScrollTop) {
              if (_this.options.preventPageScrolling) {
                _this.preventScrolling(e, DOWN);
              }
              if (_this.prevScrollTop !== _this.maxScrollTop) {
                _this.$el.trigger('scrollend');
              }
            } else if (_this.contentScrollTop === 0) {
              if (_this.options.preventPageScrolling) {
                _this.preventScrolling(e, UP);
              }
              if (_this.prevScrollTop !== 0) {
                _this.$el.trigger('scrolltop');
              }
            }
          };
        })(this),
        wheel: (function(_this) {
          return function(e) {
            var delta;
            if (e == null) {
              return;
            }
            delta = e.delta || e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail || (e.originalEvent && -e.originalEvent.detail);
            if (delta) {
              _this.sliderY += -delta / 3;
            }
            _this.scroll();
            return false;
          };
        })(this)
      };
    };


    /**
      Adds event listeners with jQuery.
      @method addEvents
      @private
     */

    NanoScroll.prototype.addEvents = function() {
      var events;
      this.removeEvents();
      events = this.events;
      if (!this.options.disableResize) {
        this.win.bind(RESIZE, events[RESIZE]);
      }
      if (!this.iOSNativeScrolling) {
        this.slider.bind(MOUSEDOWN, events[DOWN]);
        this.pane.bind(MOUSEDOWN, events[PANEDOWN]).bind("" + MOUSEWHEEL + " " + DOMSCROLL, events[WHEEL]);
      }
      this.$content.bind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
    };


    /**
      Removes event listeners with jQuery.
      @method removeEvents
      @private
     */

    NanoScroll.prototype.removeEvents = function() {
      var events;
      events = this.events;
      this.win.unbind(RESIZE, events[RESIZE]);
      if (!this.iOSNativeScrolling) {
        this.slider.unbind();
        this.pane.unbind();
      }
      this.$content.unbind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
    };


    /**
      Generates nanoScroller's scrollbar and elements for it.
      @method generate
      @chainable
      @private
     */

    NanoScroll.prototype.generate = function() {
      var contentClass, cssRule, currentPadding, options, paneClass, sliderClass;
      options = this.options;
      paneClass = options.paneClass, sliderClass = options.sliderClass, contentClass = options.contentClass;
      if (!this.$el.find("." + paneClass).length && !this.$el.find("." + sliderClass).length) {
        this.$el.append("<div class=\"" + paneClass + "\"><div class=\"" + sliderClass + "\" /></div>");
      }
      this.pane = this.$el.children("." + paneClass);
      this.slider = this.pane.find("." + sliderClass);
      if (BROWSER_SCROLLBAR_WIDTH === 0 && isFFWithBuggyScrollbar()) {
        currentPadding = window.getComputedStyle(this.content, null).getPropertyValue('padding-right').replace(/\D+/g, '');
        cssRule = {
          right: -14,
          paddingRight: +currentPadding + 14
        };
      } else if (BROWSER_SCROLLBAR_WIDTH) {
        cssRule = {
          right: -BROWSER_SCROLLBAR_WIDTH
        };
        this.$el.addClass('has-scrollbar');
      }
      if (cssRule != null) {
        this.$content.css(cssRule);
      }
      return this;
    };


    /**
      @method restore
      @private
     */

    NanoScroll.prototype.restore = function() {
      this.stopped = false;
      if (!this.iOSNativeScrolling) {
        this.pane.show();
      }
      this.addEvents();
    };


    /**
      Resets nanoScroller's scrollbar.
      @method reset
      @chainable
      @example
          $(".nano").nanoScroller();
     */

    NanoScroll.prototype.reset = function() {
      var content, contentHeight, contentPosition, contentStyle, contentStyleOverflowY, paneBottom, paneHeight, paneOuterHeight, paneTop, parentMaxHeight, right, sliderHeight;
      if (this.iOSNativeScrolling) {
        this.contentHeight = this.content.scrollHeight;
        return;
      }
      if (!this.$el.find("." + this.options.paneClass).length) {
        this.generate().stop();
      }
      if (this.stopped) {
        this.restore();
      }
      content = this.content;
      contentStyle = content.style;
      contentStyleOverflowY = contentStyle.overflowY;
      if (BROWSER_IS_IE7) {
        this.$content.css({
          height: this.$content.height()
        });
      }
      contentHeight = content.scrollHeight + BROWSER_SCROLLBAR_WIDTH;
      parentMaxHeight = parseInt(this.$el.css("max-height"), 10);
      if (parentMaxHeight > 0) {
        this.$el.height("");
        this.$el.height(content.scrollHeight > parentMaxHeight ? parentMaxHeight : content.scrollHeight);
      }
      paneHeight = this.pane.outerHeight(false);
      paneTop = parseInt(this.pane.css('top'), 10);
      paneBottom = parseInt(this.pane.css('bottom'), 10);
      paneOuterHeight = paneHeight + paneTop + paneBottom;
      sliderHeight = Math.round(paneOuterHeight / contentHeight * paneOuterHeight);
      if (sliderHeight < this.options.sliderMinHeight) {
        sliderHeight = this.options.sliderMinHeight;
      } else if ((this.options.sliderMaxHeight != null) && sliderHeight > this.options.sliderMaxHeight) {
        sliderHeight = this.options.sliderMaxHeight;
      }
      if (contentStyleOverflowY === SCROLL && contentStyle.overflowX !== SCROLL) {
        sliderHeight += BROWSER_SCROLLBAR_WIDTH;
      }
      this.maxSliderTop = paneOuterHeight - sliderHeight;
      this.contentHeight = contentHeight;
      this.paneHeight = paneHeight;
      this.paneOuterHeight = paneOuterHeight;
      this.sliderHeight = sliderHeight;
      this.slider.height(sliderHeight);
      this.events.scroll();
      this.pane.show();
      this.isActive = true;
      if ((content.scrollHeight === content.clientHeight) || (this.pane.outerHeight(true) >= content.scrollHeight && contentStyleOverflowY !== SCROLL)) {
        this.pane.hide();
        this.isActive = false;
      } else if (this.el.clientHeight === content.scrollHeight && contentStyleOverflowY === SCROLL) {
        this.slider.hide();
      } else {
        this.slider.show();
      }
      this.pane.css({
        opacity: (this.options.alwaysVisible ? 1 : ''),
        visibility: (this.options.alwaysVisible ? 'visible' : '')
      });
      contentPosition = this.$content.css('position');
      if (contentPosition === 'static' || contentPosition === 'relative') {
        right = parseInt(this.$content.css('right'), 10);
        if (right) {
          this.$content.css({
            right: '',
            marginRight: right
          });
        }
      }
      return this;
    };


    /**
      @method scroll
      @private
      @example
          $(".nano").nanoScroller({ scroll: 'top' });
     */

    NanoScroll.prototype.scroll = function() {
      if (!this.isActive) {
        return;
      }
      this.sliderY = Math.max(0, this.sliderY);
      this.sliderY = Math.min(this.maxSliderTop, this.sliderY);
      this.$content.scrollTop((this.paneHeight - this.contentHeight + BROWSER_SCROLLBAR_WIDTH) * this.sliderY / this.maxSliderTop * -1);
      if (!this.iOSNativeScrolling) {
        this.updateScrollValues();
        this.setOnScrollStyles();
      }
      return this;
    };


    /**
      Scroll at the bottom with an offset value
      @method scrollBottom
      @param offsetY {Number}
      @chainable
      @example
          $(".nano").nanoScroller({ scrollBottom: value });
     */

    NanoScroll.prototype.scrollBottom = function(offsetY) {
      if (!this.isActive) {
        return;
      }
      this.$content.scrollTop(this.contentHeight - this.$content.height() - offsetY).trigger(MOUSEWHEEL);
      this.stop().restore();
      return this;
    };


    /**
      Scroll at the top with an offset value
      @method scrollTop
      @param offsetY {Number}
      @chainable
      @example
          $(".nano").nanoScroller({ scrollTop: value });
     */

    NanoScroll.prototype.scrollTop = function(offsetY) {
      if (!this.isActive) {
        return;
      }
      this.$content.scrollTop(+offsetY).trigger(MOUSEWHEEL);
      this.stop().restore();
      return this;
    };


    /**
      Scroll to an element
      @method scrollTo
      @param node {Node} A node to scroll to.
      @chainable
      @example
          $(".nano").nanoScroller({ scrollTo: $('#a_node') });
     */

    NanoScroll.prototype.scrollTo = function(node) {
      if (!this.isActive) {
        return;
      }
      this.scrollTop(this.$el.find(node).get(0).offsetTop);
      return this;
    };


    /**
      To stop the operation.
      This option will tell the plugin to disable all event bindings and hide the gadget scrollbar from the UI.
      @method stop
      @chainable
      @example
          $(".nano").nanoScroller({ stop: true });
     */

    NanoScroll.prototype.stop = function() {
      if (cAF && this.scrollRAF) {
        cAF(this.scrollRAF);
        this.scrollRAF = null;
      }
      this.stopped = true;
      this.removeEvents();
      if (!this.iOSNativeScrolling) {
        this.pane.hide();
      }
      return this;
    };


    /**
      Destroys nanoScroller and restores browser's native scrollbar.
      @method destroy
      @chainable
      @example
          $(".nano").nanoScroller({ destroy: true });
     */

    NanoScroll.prototype.destroy = function() {
      if (!this.stopped) {
        this.stop();
      }
      if (!this.iOSNativeScrolling && this.pane.length) {
        this.pane.remove();
      }
      if (BROWSER_IS_IE7) {
        this.$content.height('');
      }
      this.$content.removeAttr('tabindex');
      if (this.$el.hasClass('has-scrollbar')) {
        this.$el.removeClass('has-scrollbar');
        this.$content.css({
          right: ''
        });
      }
      return this;
    };


    /**
      To flash the scrollbar gadget for an amount of time defined in plugin settings (defaults to 1,5s).
      Useful if you want to show the user (e.g. on pageload) that there is more content waiting for him.
      @method flash
      @chainable
      @example
          $(".nano").nanoScroller({ flash: true });
     */

    NanoScroll.prototype.flash = function() {
      if (this.iOSNativeScrolling) {
        return;
      }
      if (!this.isActive) {
        return;
      }
      this.reset();
      this.pane.addClass('flashed');
      setTimeout((function(_this) {
        return function() {
          _this.pane.removeClass('flashed');
        };
      })(this), this.options.flashDelay);
      return this;
    };

    return NanoScroll;

  })();
  $.fn.nanoScroller = function(settings) {
    return this.each(function() {
      var options, scrollbar;
      if (!(scrollbar = this.nanoscroller)) {
        options = $.extend({}, defaults, settings);
        this.nanoscroller = scrollbar = new NanoScroll(this, options);
      }
      if (settings && typeof settings === "object") {
        $.extend(scrollbar.options, settings);
        if (settings.scrollBottom != null) {
          return scrollbar.scrollBottom(settings.scrollBottom);
        }
        if (settings.scrollTop != null) {
          return scrollbar.scrollTop(settings.scrollTop);
        }
        if (settings.scrollTo) {
          return scrollbar.scrollTo(settings.scrollTo);
        }
        if (settings.scroll === 'bottom') {
          return scrollbar.scrollBottom(0);
        }
        if (settings.scroll === 'top') {
          return scrollbar.scrollTop(0);
        }
        if (settings.scroll && settings.scroll instanceof $) {
          return scrollbar.scrollTo(settings.scroll);
        }
        if (settings.stop) {
          return scrollbar.stop();
        }
        if (settings.destroy) {
          return scrollbar.destroy();
        }
        if (settings.flash) {
          return scrollbar.flash();
        }
      }
      return scrollbar.reset();
    });
  };
  $.fn.nanoScroller.Constructor = NanoScroll;
})(jQuery, window, document);

//# sourceMappingURL=jquery.nanoscroller.js.map