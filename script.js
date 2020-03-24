var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function() {
	var message = 	document.getElementById('timeEvent');
	var lolcat = document.getElementById('lolcat');
	var messageText;
	var image = 
"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
if (time == partyTime)
{
    messageText = "IZ PARTEE TIME!!";    
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} 
else if (time == napTime) 
{image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IT'S NAP TIME…";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) { messageText = "Good morning!"; } else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";

}

message.innerText = messageText;
lolcat.src = image;
showCurrentTime();
};

var showCurrentTime = function() {
//display string on webpage
var clock = document.getElementById('clock');
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM"; 
// Set Hours
     if (hours >= noon){
          meridian = "PM";
     }
 
     if (hours > noon){
          hours = hours - 12; //displays actual hour
     }
	
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	if (seconds < 10) {
	seconds = "0" + seconds; 
	}
//put together string to show time
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	clock.innerText = clockTime; 
};
showCurrentTime ();

var oneSecond = 1000; 

setInterval(updateClock, oneSecond);

var partyTimeButton = document.getElementById ("partyTimeButton");
var isPartyTime = false; 

var partyEvent = function () {
	
	if (isPartyTime === false) 
	{
	isPartyTime = true;
	time = partyTime;
	partyTimeButton.innerText = "PARTY TIME!";
	partyTimeButton.style.backgroundColor = "#225";
	} else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.style.backgroundColor= "#0A8DAB";}
};
	
partyTimeButton.addEventListener ('click', partyEvent);

//SELECTORS ADDED AFTER PARTY TIME BUTTON
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

//ADDED BELOW 'var partyEvent' function
var lunchTimeEvent = function() {
	lunchTime = lunchTimeSelector.value;
};

var napTimeEvent = function() {
	napTime = napTimeSelector.value;
};
var wakeUpTimeEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};

//ADDED below are the event listeners
napTimeSelector.addEventListener('change', napTimeEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpTimeEvent);
console.log();
 