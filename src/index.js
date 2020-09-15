import "./styles.css";

var dynamicClock = function() {
  var clock = document.getElementById("clock"),
      hour = new Date().getHours(),
      minute = new Date().getMinutes(),
      second = new Date().getSeconds(),
      meridian = "AM";
  
  if (hour > 12) {
      hour = hour - 12;
      meridian = "PM";
  }
  
  if (hour < 10) {
      hour = "0" + hour;
  }
  
  if (minute < 10) {
      minute = "0" + minute;
  }
  
  if (second < 10) {
      second = "0" + second;
  }
  
  clock.innerText = hour + ": " + minute + ": " + second + " " + meridian;
}

dynamicClock();

setInterval(dynamicClock, 1000);
