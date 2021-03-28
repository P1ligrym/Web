
function showCode(){
let keyword = event.which;
document.getElementById("text2").value =  keyword;
}


function moveMouse() {
    const input = document.getElementById('input');
    input.oninput = e => { e.target.value = ''; }


    let parent = document.getElementById('input');

    parent.addEventListener("mousemove", {
        handleEvent(event) {
            parent.value = "Курсор миші в межах документу";
        }
    });


    parent.addEventListener("mouseout", {
        handleEvent(event) {
            parent.value = "Курсор миші поза межами документу";
        }
    });

    onmousedown = function clickButton() {
        parent.value = "Натиснута довільна кнопка миші";
    }
}








