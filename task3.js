function my(operation) {
    var fname = "fname";
    var lname = "lname";

    var resultElement = document.getElementById("result");

    var result;

    if (operation === "multiply") {
        result = parseFloat(document.getElementById(fname).value) * parseFloat(document.getElementById(lname).value);
        resultElement.innerHTML = "The result of multiplication is: " + result;
    } else if (operation === "divide") {
        result = parseFloat(document.getElementById(fname).value) / parseFloat(document.getElementById(lname).value);
        resultElement.innerHTML = "The result of division is: " + result;
    }
}