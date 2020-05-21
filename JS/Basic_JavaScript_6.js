document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");
function Ride_Function () {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"Please come in";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function Vehicle_Function() {
    document.getElementById("New_and_This").innerHTML = "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}
function Aircraft(Manufacture, Type, Class, Variant) {
    this.Aircraft_Manufacture = Manufacture;
    this.Aircraft_Type = Type;
    this.Aircraft_Class = Class;
    this.Aircraft_Variant = Variant;
}
var C172 = new Aircraft("Cessna", "Single Engine", "Propeller", "Passenger");
var F_15 = new Aircraft("Lockhead", "Multi Engine", "TurboJet", "Military");
var King_Air = new Aircraft("Beachcraft", "Multi-Engine", "Turboprop", "Cargo");
var B757 = new Aircraft("Boeing", "Multi Engine", "Turbojet", "Airliner");
function Aircraft_Function() {
    document.getElementById("New_Aircraft").innerHTML = "The F\-15 is a fighter jet manufactured by " + F_15.Aircraft_Manufacture + ". It is a " + F_15.Aircraft_Type + F_15.Aircraft_Class + " used by the " + F_15.Aircraft_Variant + ".";
}
function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

