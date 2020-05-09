function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Combine").innerHTML = whole_sentence;
}
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
function Uppercase_Function() {
    var str = "This will display in all uppercase letters!";
    var res = str.toUpperCase();
    document.getElementById("Uppercase").innerHTML = res;
}
function Search_Function() {
    var str = "search example"; 
    var n = str.search("example");
    document.getElementById("Search").innerHTML = n;
}
function string_Method () {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() {
    var Y = 12938.3012987376112;
    document.getElementById("Precision"). innerHTML = Y.toPrecision(10);
}
function fixed_Function() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
}
function value_Function() {
    var str = "What is the Primitive Value of the String?";
    var res = str.valueOf();
    document.getElementById("Primitive").innerHTML = res;
}
