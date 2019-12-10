"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() 
{
    var date = new Date();
    var hours = date.getHours(); 
    var mins = date.getMinutes(); 
    var sec = date.getSeconds(); 
    var session = "AM";
    
    if(hours == 0)
    {
        hours = 12;
    }
    
    if(hours > 12)
    {
        hours = hours - 12;
        session = "PM";
    }
    
    hours = (hours < 10) ? "0" + hours : hours;
    mins = (mins < 10) ? "0" + mins : mins;
    sec = (sec < 10) ? "0" + sec : sec;
    
    var time = hours + ":" + mins + ":" + sec + " " + session;
    
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = mins;
    document.getElementById("seconds").innerText = sec;
    document.getElementById("ampm").innerText = session;
    
    setTimeout(displayCurrentTime, 1000);
}

var padSingleDigit = function(num) 
{
	if (num < 10) 
    {	
        return "0" + num; 
    }
	else 
    { 
        return num; 
    }
}

window.onload = function() 
{  
    
    displayCurrentTime();
   
};