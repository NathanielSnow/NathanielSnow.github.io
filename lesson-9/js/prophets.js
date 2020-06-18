const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let birthDate = document.createElement('h3');
        let birthPlace = document.createElement('h3');
        let image = document.createElement('img');

        name.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;
        birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', name + " - " + toString(i));

        card.appendChild(name);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }

});

