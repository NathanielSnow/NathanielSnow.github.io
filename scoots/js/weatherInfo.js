const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=5e43dd05ae8a3a0b6ab722a0f92e51ff&units=imperial';

function getDayName(dayNum) {

    var dayName = "";

    switch(dayNum){
        case 0:
            dayName = "Sun";
            break;
        case 1:
            dayName = "Mon";
            break;
        case 2:
            dayName = "Tue";
            break;
        case 3:
            dayName = "Wed";
            break;
        case 4: 
            dayName = "Thu";
            break;
        case 5:
            dayName = "Fri";
            break;
        case 6:
            dayName = "Sat";
            break;
        default:
            dayName = "JUDGMENT DAY";
            break;
    }

    return dayName;

}


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById('sky').textContent = jsObject.list[0].weather[0].description;
    document.getElementById('highTemp').innerHTML = Math.round(jsObject.list[0].main.temp_max) + "&#176;F";
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity + "%";
    document.getElementById('windSpeed').textContent = Math.round(jsObject.list[0].wind.speed) + " mph"; 


    let highTemp = document.getElementById("highTemp").innerHTML;
    highTemp = highTemp.substring(0, highTemp.length - 2);
    highTemp = parseFloat(highTemp);

    let windSpeed = document.getElementById("windSpeed").innerHTML;
    windSpeed = windSpeed.substring(0, windSpeed.length - 3);
    windSpeed = parseFloat(windSpeed);

    for (i = 0; i < jsObject.list.length; i++){
        var dayName = "";
        var dateTime = new Date(jsObject.list[i].dt_txt);
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        const desc = jsObject.list[i].weather[0].description;
        

        if (dateTime.getHours() == 18 && dateTime.getMinutes() == 00 && dateTime.getSeconds() == 00){

            let forecastTable = document.createElement("table");
            forecastTable.setAttribute('id', "forcast");
            forecastTable.setAttribute('class', "forecast");
            let forecastDay = document.createElement('tr');
            let forecastDayName = document.createElement('th');
            dayName = getDayName(dateTime.getDay());
            forecastDayName.textContent = dayName;
            let image = document.createElement('img');
            image.setAttribute('src', imagesrc);
            image.setAttribute('alt',  desc);
            
            forecastDay.appendChild(forecastDayName);
            
            let forecastInfo = document.createElement('tr');
            let forecastInfoRow = document.createElement('td');
            let forecastInfoIcon = document.createElement('span');
            let forecastInfoTemp = document.createElement('p');

            forecastInfoIcon.appendChild(image);
            forecastInfoTemp.innerHTML = Math.round(jsObject.list[i].main.temp)  + "&#176;F";

            forecastInfoRow.appendChild(forecastInfoIcon);
            forecastInfoRow.appendChild(forecastInfoTemp);

            forecastInfo.appendChild(forecastInfoRow);

            forecastTable.appendChild(forecastDay);
            forecastTable.appendChild(forecastInfo);

            document.querySelector('div.infoBox').appendChild(forecastTable);
            
 
        }

    }
    
});


