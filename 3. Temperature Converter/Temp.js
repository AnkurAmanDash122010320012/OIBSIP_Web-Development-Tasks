window.addEventListener("load", function() {
    var convertBtn = document.getElementById("convertBtn");
    convertBtn.addEventListener("click", convertTemperature);

    displayCurrentDateTime();

    setInterval(displayCurrentDateTime, 1000);
});

function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var unitInput = document.getElementById("unit");
    var resultSpan = document.getElementById("result");

    var temperature = parseFloat(temperatureInput.value);
    var unit = unitInput.value;
    var convertedTemperature = "";

    if (isNaN(temperature)) {
        resultSpan.innerText = "Invalid input. Please enter a number.";
        return;
    }

    if (unit === "celsius") {
        convertedTemperature = ((temperature * 9) / 5) + 32;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " °F (Fahrenheit)";
    } else if (unit === "fahrenheit") {
        convertedTemperature = ((temperature - 32) * 5) / 9;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " °C (Celsius)";
    } else if (unit === "kelvin") {
        convertedTemperature = temperature + 273.15;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " K (Kelvin)";
    }
}

function displayCurrentDateTime() {
    var dateTimeBtn = document.getElementById("dateTimeBtn");
    var currentDate = new Date().toLocaleDateString();
    var currentTime = new Date().toLocaleTimeString();

    dateTimeBtn.innerText = "Date: " + currentDate + " | Time: " + currentTime;
}