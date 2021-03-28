function Time() {
var message = document.getElementById("textArea").value;
setTimeout(() => {alert(message), clear()},3000);
}

function clear() {
var textarea = document.getElementById("textArea");
textarea.value="";}


function openWin() {
    var newWindow = window.open("",height=300,width=600);
    newWindow .document.body.style.background =  "green";
    setTimeout(() => {newWindow .document.body.style.background =  "yellow"},3000);
}

window.onload = function windowOpen() {
    setTimeout(openWin,3000);
}


document.getElementById('stop').disabled = "false";

function start(){
interval = setInterval(startTimer, 1000);
}

function startTimer() {
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
    if (s == 59) {
        m++;
        if (m < 10) m = "0" + m;
        s = 0;
    }

    if (m == 60 ) {
        m = 0 +"0";
        h++;
        if (h < 10) h = "0" + h;
    }
    
    else s++;
    if (s < 10) s = "0" + s;
    document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
    document.getElementById('start').disabled = "false";
    document.getElementById('stop').removeAttribute('disabled');
}


function stop() {
    clearInterval(interval);
    document.getElementById('start').removeAttribute('disabled');
    document.getElementById('stop').disabled = "false";
}


function newColor() { 
   setInterval(changeColors,3000);
 }

function changeColors() {
    var about = document.getElementById('change');
    var colors = ['red','blue','yellow','green','orange']
    about.style.color = colors[Math.floor(Math.random() * colors.length)];    
}
