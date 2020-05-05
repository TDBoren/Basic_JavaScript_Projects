function Addition() {
    var Addition = 3 + 2;
document.getElementById("Math").innerHTML = "3 + 2 = " + Addition;
}
function Subtraction() {
    var Subtraction = 8 - 4;
    document.getElementById("Math_2").innerHTML = "8 - 4 = " + Subtraction;
}
function Multiplication() {
    var Mulitplication = 14 * 6;
    ducument.getElementById("Math_3").innerHTML = "14 * 6 = " + Multiplication;
}
function Division() {
    var Division = 108 / 12;
    document.getElementById("Math_4").innerHTML = "108 / 12 = " + Division;
}
function Multiple_Math() {
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Math_5").innerHTML = "1 plus 2, multiplied by 10, divided in half, and then subracted by 5 equals " + simple_Math;
}
function Modulus_Operator() {
    var simple_Math = 25 % 6
    document.getElementById("Math_6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
function Negative_Number() {
    var x = 10
    document.getElementById("Math_7").innerHTML = -x;
}
var x = 5
x++;
document.write(x);

var y= 5.75
y--;
document.write(y);

window.alert(Math.random());

window.alert(Math.random() * 100);

document.getElementById("Math_8").innerHTML = Math.PI;