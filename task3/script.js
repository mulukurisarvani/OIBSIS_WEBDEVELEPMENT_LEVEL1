function convertTemperature(){

let degree = document.getElementById("degrees").value;
let type = document.getElementById("type").value;
let resultField = document.getElementById("result");

if(degree === "" || isNaN(degree)){
resultField.value = "Please enter a valid number";
return;
}

degree = parseFloat(degree);

let result;

if(type === "C"){

let fahrenheit = (degree * 9/5) + 32;
let kelvin = degree + 273.15;

resultField.value =
fahrenheit.toFixed(2) + " °F | " +
kelvin.toFixed(2) + " K";

}

else if(type === "F"){

let celsius = (degree - 32) * 5/9;
let kelvin = celsius + 273.15;

resultField.value =
celsius.toFixed(2) + " °C | " +
kelvin.toFixed(2) + " K";

}

else if(type === "K"){

let celsius = degree - 273.15;
let fahrenheit = (celsius * 9/5) + 32;

resultField.value =
celsius.toFixed(2) + " °C | " +
fahrenheit.toFixed(2) + " °F";

}

}
