A = "Always ";
B = "remember: ";
document.write(A + B);

X = "You ";
Y = "are ";
document.write(X + Y);

M = "unique, ";
N = "just like everyone else.";
document.write(M + N);

function count_to_ten () {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("counting_to_ten").innerHTML = Digit;
}
