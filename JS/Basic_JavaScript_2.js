function myFunction() {
    var x = document.getElementById("myNumber");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;
    
    if (defaultVal == currentVal) {
      document.getElementById("demo").innerHTML = "Default value and current value is the same: "
      + x.defaultValue + " and " + x.value
      + "<br>Change the number of number field to see the difference!";
    } else {
      document.getElementById("demo").innerHTML = "The default value was: " + defaultVal
      + "<br>The new, current value is: " + currentVal;
    }
}