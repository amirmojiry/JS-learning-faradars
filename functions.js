function getNumbers () {
    var n1 = parseInt (prompt ("Enter first number: "));
    var n2 = parseInt (prompt ("Enter second number: "));
    var op = prompt ("Enter operator: ");
    var result  = calc (n1, n2, op);
    alert (result);
}

function calc (num1, num2, operator) {
    if (num2 == 0 && operator == "/") {
        return "Divide zero error";
    }
    switch (operator) {
        case "+":
            return (num1+num2);
        case "-":
            return (num1-num2);
        case "*":
            return (num1*num2);
        case "/":
            return (num1/num2);
        default:
            return "Please enter a valid operator (+, -, *, /)";
    }
}