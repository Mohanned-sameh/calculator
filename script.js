function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var par = document.getElementById("result").value;
    var qar = eval(par);
    document.getElementById("result").value = qar;
}