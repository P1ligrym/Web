// function deleteElem(){
//     let text = document.getElementById("text");
//     let num = parseInt(document.getElementById("number").value);

//     // var line = text.value.split(" ");
//     // for(var i = 0; i < line.length; i++){
//     //     if(line[i].length > num) {
//     //         delete line[i];
//     //     }
//     // }
//     // text.value = line.join(" ");
//     let words = text.value.split(" ");
//     text.value = words.filter(function(a){return a.length < num}).join();
//  }



  
// function printDate(){
//     var data = new Date();
//     console.log(data);
//     var vacantion = new Date(2021, 6, 1);
//     var vacantion1 = new Date(2021, 7, 31);
//     console.log(vacantion1);
//     console.log(vacantion);

//     var dats = new Date(); 
//     dats = vacantion - data;
//     dats = parseInt( dats / (3600 * 24 * 1000));

//     if(  1 > dats &&  dats > -62) {
//         window.alert("Канікули")
//     }
//     if(dats < -61) 
//     {
//         window.alert(365 + dats + " днів");
//     }
//     else {
//         window.alert( dats + " днів"); 
//     }    
// }

// onload = function proportion(){
//     let txt1 = parseInt(document.getElementById("txt1").value);
//     let txt2 =  parseInt(document.getElementById("txt2").value);
//     let txt3 =  parseInt(document.getElementById("txt3").value);
//     let txt4 =  document.getElementById("txt4");
//     txt4.value = (txt3 * txt2) / txt1;
// }