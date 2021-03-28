var divs = document.getElementsByTagName("div");

for(var i = 0; i < divs.length; i++){
   var width = divs[i].offsetWidth;
   window.alert(width);
}

function setwidth (element) {
   for(var i = 0; i < element.length; i++){
      var width = element[i].offsetWidth * 2;
      document.write(width,"\n");
   }

}

var div_s = document.getElementsByTagName("div");
setwidth(div_s);

var classChange  = window.prompt("Введіть назву класу");
var color  = window.prompt("Введіть колір");

var changes = document.getElementsByClassName(classChange)[0];
changes.style.color = color;



var r  = confirm("“Чи бажаєте побачити властивості операційної системи?");
if(r == true) {
   alert(navigator.platform);
}
else {
   var user = (navigator.userAgent);
   window.alert("Користувач відмовився")
   window.alert(navigator.appName);
}
var site;
function newWindow(){
   site= window.open("https://lpnu.ua","", height=300,width=500,toolbar,location,scrollbars);

}


function NULP(){
   site.close();
   window.open("https://lpnu.ua");

}