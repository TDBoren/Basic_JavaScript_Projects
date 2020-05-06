document.write (typeof "text");
document.write (typeof 7);

function my_function() {
    document.getElementById("Test").innerHTML = 0/0;
}
document.getElementById("Test_2").innerHTML = isNaN('This is a string');
document.getElementById("Test").innerHTML = isNaN("007");
document.write(2E310);
document.write(-2E310);
document.write(10 > 2);
document.write(10 < 2);
console.log(2 + 2);
document.write("10" + 5);
document.write( 10 == 10);
document.write(3 == 15);
x = 10;
y = 10;
document.write( x === y);
a = 82;
b = "82";
document.write(a === b);
c= "Magnus";
d= "Magnus";
document.write(c === d);
document.write(5 > 2 && 10 > 4);
document.write(5 >10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);
function not_function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
function not_function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}
