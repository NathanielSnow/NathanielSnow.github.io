const apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
alert("Hello");

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    for (i = 0; i < jsObject.towns[4].length; i++){
        
        let eventSpan = document.createElement("span");

        eventSpan = jsObject.towns[4].events[i];
        

        document.querySelector('section.classEvents').appendChild(eventSpan);

    }

});