function windChill() {
    let highTemp = document.getElementById("highTemp").innerHTML;
    highTemp = highTemp.substring(0, highTemp.length - 2);
    highTemp = parseFloat(highTemp);

    let windSpeed = document.getElementById("windSpeed").innerHTML;
    windSpeed = windSpeed.substring(0, windSpeed.length - 3);
    windSpeed = parseFloat(windSpeed);

    if (highTemp <= 50 && windSpeed >= 3.0) {
        let speed = Math.pow(windSpeed, 0.16);
        let windChill = 35.74 + 0.6215 * highTemp - 35.75 * speed + 0.4275 * highTemp * speed;
        windChill = Math.round(windChill);
        document.getElementById("windChill").innerHTML = windChill + "&#176;F";
    }
    else {
        document.getElementById("windChill").innerHTML = "N/A";
    }
    
    
}

windChill();