A = "Always ";
B = "remember: ";
document.write("<br>" + A + B);

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
function text_count() {
    var text = ""
    var i = 0;

    do {
    text += "<br>The number is " + i;
    i++;
    }
    while (i < 11);

    document.getElementById("do_loop").innerHTML = text;
}
function string_number_function() {
    var str = "This is the string";
    var n = str.length;
    document.getElementById("string_number").innerHTML = n;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments"). innerHTML = Content;
}
function array_Function() {
    var necessity = []
    necessity[1] = "Sleep";
    necessity[2] = "Food";
    necessity[3] = "Water";
    necessity[4] = "Shelter";
    document.getElementById("Array").innerHTML = "These are the things every mortal cannot live without:" + "<br>" + necessity;
}
function constant_function() {
    const Musical_Instrument = {type:"Guitar", brand:"Fender", color:"Black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
var Z = 96;
document.write(Z);
{
    let Z = 101;
    document.write("<br>" + Z);
}
document.write("<br>" + Z);

function PI_math_function() {
    return Math.PI;
}
document.getElementById("PI").innerHTML = PI_math_function();

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

var text_1 = "";
var b;
for (b = 0; b < 10; b++) {
  if (b === 7) { break; }
  text_1 += "The number is " + b + "<br>";
}
document.getElementById("break").innerHTML = text_1;

var text_2 = "";
var c;
for (c = 0; c < 10; c++) {
  if (c === 3) { continue; }
  text_2 += "The number is " + c + "<br>";
}
document.getElementById("Continue").innerHTML = text_2;
