const apiURL = './data/rentals_info.json';
let rentalTable = document.createElement("table");
rentalTable.setAttribute('id', "");
rentalTable.setAttribute('class', "");

let tableTitle = document.createElement('tr');

let tableTitleName = document.createElement('th');
tableTitleName.setAttribute("colspan", "7");
tableTitleName.textContent = "Max Persons and Price Chart(includes tax)"
tableTitle.appendChild(tableTitleName);
rentalTable.appendChild(tableTitle);


let reservType = document.createElement('tr');

let blankCells = document.createElement('td');
blankCells.setAttribute("colspan", "3");
blankCells.textContent = " ";

let reservTitle = document.createElement('td');
reservTitle.setAttribute("colspan", "2");
reservTitle.textContent = "Reservation";

let walkInTitle = document.createElement('td');
walkInTitle.setAttribute("colspan", "2");
walkInTitle.textContent = "Walk-In";

reservType.appendChild(blankCells);
reservType.appendChild(reservTitle);
reservType.appendChild(walkInTitle);

rentalTable.appendChild(reservType);


let rentalCategories = document.createElement('tr');

let imageCell = document.createElement('td');
imageCell.textContent = "Image";
rentalCategories.appendChild(imageCell);

let rentalTypeCat = document.createElement('td');
rentalTypeCat.textContent = "Rental Type";
rentalCategories.appendChild(rentalTypeCat);

let maxPersonsCat = document.createElement('td');
maxPersonsCat.textContent = "Max. Persons";
rentalCategories.appendChild(maxPersonsCat);

let reservHalfDayCat = document.createElement('td');
reservHalfDayCat.textContent = "Half Day (3 hrs)";
rentalCategories.appendChild(reservHalfDayCat);

let reservFullDayCat = document.createElement('td');
reservFullDayCat.textContent = "Full Day";
rentalCategories.appendChild(reservFullDayCat);

let walkInHalfDayCat = document.createElement('td');
walkInHalfDayCat.textContent = "Half Day (3 hrs)";
rentalCategories.appendChild(walkInHalfDayCat);

let walkInFullDayCat = document.createElement('td');
walkInFullDayCat.textContent = "Full Day";
rentalCategories.appendChild(walkInFullDayCat);

rentalTable.appendChild(rentalCategories);


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    

    for (i = 0; i < jsObject.rental.length; i++){

        let rentalItem = document.createElement('tr');
        
        let rentalItemImg = document.createElement('img');
        rentalItemImg.setAttribute('src', jsObject.rental[i].img);
        rentalItemImg.setAttribute('alt',  "rental picture");
        
        let rentalItemImgCell = document.createElement('td');
        rentalItemImgCell.appendChild(rentalItemImg);
        rentalItem.appendChild(rentalItemImgCell);

        let rentalItemType = document.createElement('td');
        rentalItemType.textContent = jsObject.rental[i].type;
        rentalItem.appendChild(rentalItemType);
        
        let rentalItemMaxPersons = document.createElement('td');
        rentalItemMaxPersons.textContent = jsObject.rental[i].max_persons;
        rentalItem.appendChild(rentalItemMaxPersons);

        let rentalItemReservHalfDay = document.createElement('td');
        rentalItemReservHalfDay.textContent = jsObject.rental[i].reservation_price[1].price;
        rentalItem.appendChild(rentalItemReservHalfDay);

        let rentalItemReservFullDay = document.createElement('td');
        rentalItemReservFullDay.textContent = jsObject.rental[i].reservation_price[0].price;
        rentalItem.appendChild(rentalItemReservFullDay);

        let rentalItemWalkInHalfDay = document.createElement('td');
        rentalItemWalkInHalfDay.textContent = jsObject.rental[i].walkIn_price[1].price;
        rentalItem.appendChild(rentalItemWalkInHalfDay);

        let rentalItemWalkInFullDay = document.createElement('td');
        rentalItemWalkInFullDay.textContent = jsObject.rental[i].walkIn_price[0].price;
        rentalItem.appendChild(rentalItemWalkInFullDay);

        rentalTable.appendChild(rentalItem);

    }

    document.querySelector('div.rentalTableDiv').appendChild(rentalTable);
    
});