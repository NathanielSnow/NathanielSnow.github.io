const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        if(i == 1 || i == 4 || i == 5) {
            let town = document.createElement('section');
            let townInfo = document.createElement('div');
            townInfo.setAttribute('class', "data");
            let name = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('h3');
            let currentPopulation = document.createElement('h3');
            let averageRainFall = document.createElement('h3');
            let image = document.createElement('img');

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
            currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
            averageRainFall.textContent = "Annual Rain Fall: " +  towns[i].averageRainfall;
            image.setAttribute('src', "images/" + towns[i].photo);
            image.setAttribute('alt', name + " - photo");

            townInfo.appendChild(name);
            townInfo.appendChild(motto);
            townInfo.appendChild(yearFounded);
            townInfo.appendChild(currentPopulation);
            townInfo.appendChild(averageRainFall);
        
        
            town.appendChild(townInfo);
            town.appendChild(image);
            //town.appendChild(motto);
            //town.appendChild(yearFounded);
            //town.appendChild(currentPopulation);
            //town.appendChild(averageRainFall);
        

            document.querySelector('div.towns').appendChild(town);

        }
        
    }

});