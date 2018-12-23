window.setInterval(GetCurrTime, 1000);
var checked = false;

function GetCurrTime()
{
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var seconds = date.getSeconds();
	var meridiem = hour > 12 ? "PM" : "AM";
	var newHour = hour;
	
	hour = hour < 10 ? "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	if (meridiem == "PM")
	{
		newHour -= 12;
	}
	else if (hour == 0 && meridiem == "AM")
	{
		newHour += 12;
	}

	newHour = newHour < 10 ? "0" + newHour : newHour;

	// 24 hour clock display
	document.getElementById("clock-02").innerHTML = "24-hour clock time: " + hour + ":" + minute + ":" + seconds;
	
	// 12 hour clock display
	document.getElementById("clock-01").innerHTML = "12-hour clock time: " + newHour + ":" + minute + ":" + seconds + " " + meridiem;
}

function DisplayCustom(on)
{
	if (on && checked == false)
	{
		checked = true;
		document.getElementById("customConvertPanel").style.display = "block";	
		document.getElementById("selectBox").value = 0;
	}
	else
	{
		checked = false;
		document.getElementById("customTimeInputPanel").style.display = "none";	
		document.getElementById("customTimeInputPanel_AM_PM").style.display = "none";	
		document.getElementById("customConvertPanel").style.display = "none";	
	}
}

function Selector()
{
	var selectBox = document.getElementById("selectBox");
	var selectedOpt = selectBox.options[selectBox.selectedIndex].value;

	if (selectedOpt == 1)
	{
		document.getElementById("customTimeInputPanel_AM_PM").style.display = "block";	
		document.getElementById("customTimeInputPanel").style.display = "none";	
	}
	else if (selectedOpt == 2)
	{
		document.getElementById("customTimeInputPanel_AM_PM").style.display = "none";	
		document.getElementById("customTimeInputPanel").style.display = "block";	
	}
	else
	{
		document.getElementById("customTimeInputPanel").style.display = "none";	
		document.getElementById("customTimeInputPanel_AM_PM").style.display = "none";	
	}
}

function Convert12To24()
{
	var selectBox = document.getElementById("selectTimerBox");
	var selectedOpt = selectBox.options[selectBox.selectedIndex].value;

	var hour = parseInt(document.getElementById("hoursId12").value); 
	var min = parseInt(document.getElementById("minId12").value);
	var sec = parseInt(document.getElementById("secId12").value);
	var merdiem = selectedOpt == 0 ? "AM" : "PM";

	if (hour >= 1 && hour <= 11 && merdiem == "PM")
		hour += 12;
	else if (hour == 12 && min <= 59 && merdiem == "AM")
		hour -= 12;

	document.getElementById("finalTime").innerHTML = "Time: " + hour.toString() + " : " + min.toString() + " : " + sec.toString();
}

function Convert24To12()
{
	var hour = document.getElementById("hoursId24").value;
	var min = document.getElementById("minId24").value;
	var sec = document.getElementById("secId24").value;

	var meridiem = hour > 12 ? "PM" : "AM";
	var newHour = hour;

	if (meridiem == "PM")
	{
		newHour -= 12;
	}
	else if (hour == 0 && meridiem == "AM")
	{
		newHour += 12;
	}

	newHour = newHour < 10 ? "0" + newHour : newHour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	document.getElementById("finalTime").innerHTML = "Time: " + newHour.toString() + " : " + min.toString() + " : " + sec.toString() + " " + meridiem.toString();
}
