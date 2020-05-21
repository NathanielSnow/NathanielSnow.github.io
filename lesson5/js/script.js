var date = new Date();

var year = date.getFullYear();
var month;
var dayNum = date.getDay();
var monthName;


if (dayNum == 5) {
    document.getElementById("asideMessage").setAttribute("class", "show"); 
    document.getElementById("asideMessage").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park.";
}



try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById("currentYear").textContent = new Date().toLocaleDateString("en-gb", options);

} catch (e) {
    alert("Ah Oh!");
}


document.getElementById("authorInfo").innerHTML = "&copy;The Weather Site | Nathaniel Snow | Wisconsin | <a href='https://www.byui.edu/online'>BYUI Online Learning</a><br>";
document.getElementById("currentYear").innerHTML = day + ", " + dayNum + " " + month + " " + year;  


function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}


