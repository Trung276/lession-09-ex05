function display(value) {
    document.getElementById("view").value += value;
}
function caculator() {
    let result = eval(document.getElementById("view").value);
    document.getElementById("view").value = result;
}
function reset() {
    document.getElementById("view").value ="";
}