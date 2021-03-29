function getFirst(array, n) {
    return array.slice(0, n);
}

function showElements() {
    let n = parseInt(document.getElementById("n").value);
    let textElement = document.getElementById("text");  
    let array = textElement.value.split(",");
    let result = "";
    result = n < 0 ? array.length : getFirst(array, n).join();
    document.getElementById("result").value = result;
    textElement.value = "";
}




function copyArray(){
    var array = [''];
    var array1 = [''];
    var val =  document.getElementById("area").value;
    array = val
    array1 = array;
    var arr = array.concat(array1)
    document.getElementById("area").value = arr;
}




function tempestDouble(){
    var digit = [""];
    digit = document.getElementById("twin").value;
    var sep = digit.split(",");
    var res = checkDublicate(sep);
    window.alert(res);

}

function checkDublicate(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}




function reverse(){
    let area1 = document.getElementById("reverse"); 
    let text = area1.value.split(",").reverse();
    area1.value = text;

    text = text.map(Number);
    let sum = text.reduce((a, b) => a + b, 0)
    let mid = sum / text.length;

    document.getElementById("sum").value = `sum = ${sum} \nmid = ${mid}`; 
}



function bring() {
    let text = document.getElementById("txt").value;
    let elements = text.split(',');
    if(elements.length < 8) {
        elements.sort();
        for(let i = 0; i < 7; i++) {
            document.getElementById("value" + (i + 1)).value = elements[i] ? elements[i].trim() : '';
        }
    } else {
        alert("Too much values!");
    }
}