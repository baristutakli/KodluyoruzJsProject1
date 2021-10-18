
document.body.style.backgroundColor = "#00563f"
document.getElementById("coloredTitle").style.color = "#ffa500"



var person = prompt("What is your name? Please don't use abbreviation");

let welcome = document.getElementById("welcome");
welcome.style.color = "#ffa500"
welcome.innerHTML = `Welcome ${person}`

var d = new Date();


var curentTime = document.getElementById("currentDate");
curentTime.style.color = "#ffa500"
curentTime.innerHTML = d.getDay()+"/"+ d.getMonth() +"/"+d.getFullYear() +"\n"+ d.getHours()+":"+d.getMinutes()

let message = document.getElementById("message");
message.style.color = "white"

