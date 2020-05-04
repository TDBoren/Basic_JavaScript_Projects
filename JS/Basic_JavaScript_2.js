function getValues(){
    var num1 = document.getElementById("firstNum").value;
    var num2 = document.getElementById("secondNum").value;
    // return array of two values
    return [num1, num2];
}

function add(){
   // get values and assign the returned array to a local variable named values
   var values = getValues();
   return parseFloat(values[0]) + parseFloat(values[1]);
}