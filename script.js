// function replaceSymbol(){
//     let sen = document.getElementById("replace").value;
//     sen = sen.replace(new RegExp(sen.split(" ")[0] + "$"), '!');
//     document.getElementById("replace").value = sen;
// }


// function searchAdress(){
//     let col = document.getElementById("adress");
//     let adress = col.value;
//     let res = /\w+@+\.+\w/;
//     if(res.test(adress) ) {
//         window.alert("Введено правильну адресу");
//         col.style.backgroundColor  = "green";
//     }
//     else{
//         window.alert("Введена адреса містить помилки");
//         col.style.backgroundColor  = "red";
//     }
// }


// function searchDomen() {
//     let checkDomen = document.getElementById("domen").value;
//     console.log(checkDomen);
//      let res1 = /\w+\.+\w+/;
//     if(res1.test(checkDomen) ) {
//         window.alert("Введено правильний домен");
//     }else {
//         window.alert("«Введений домен містить помилки");
//     }
// }


// function searchCaps(){
//     let caps = document.getElementById("caps").value[0];
//     let res2 = /[A-Z,А-Я]/;
//     if(res2.test(caps)){
//         window.alert("Перша буква є велика");

//     } else {
//         window.alert("Неправильно");
//     }
// }



// function searchCard() {
//     let card = document.getElementById("card").value;
//     console.log(card);
//     let res3 = /\d{4} \d{4} \d{4} \d{4}/;
//     if(res3.test(card)) {
//         window.alert("Номер картки введено правильно");
//     } else {
//         window.alert("Номер картки введено неправильно");
//     }     
// }

