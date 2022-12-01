function abc (a){
    console.log(a)
}
var display = document.getElementById("display");

function getBtnValue (a){
     display.value += a;
}
function calculate(){
    var a = eval(display.value);

    display.value=a;
}

function clearall() {
    display.value = ""
}