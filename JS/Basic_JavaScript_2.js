function myFunction() {
    var x = document.getElementById("myNumber");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;
    
    if (defaultVal == currentVal) {
      document.getElementById("demo_1").innerHTML = "Default value and current value is the same: "
      + x.defaultValue + " and " + x.value
      + "<br>Change the number of number field to see the difference!";
    } else {
      document.getElementById("demo_1").innerHTML = "The default value was: " + defaultVal
      + "<br>The new, current value is: " + currentVal;
    }
    var x = 5;
    var y = 2;
    var z = x + y;
    document.getElementById("demo_2").innerHTML = z;

    var x = 5;
    var x += 5;
    document.getElementById("demo_3").innerHTML = x;
}