var date = new Date();

var year = date.getFullYear();
var month;
var dayNum = date.getDay();
var monthName;

if (dayNum == 6) {
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

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = "&nbsp;&nbsp;&nbsp;" + rating;
}

function checkFullName(name) {
    const exp = /^\w{0,4}$/;
    return exp.test(name);
}

function checkEmail(email) {
    const exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return exp.test(email);
}

function checkPhone(phone) {
    const exp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return exp.test(phone);
}

function checkZip(zip) {
    const exp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return exp.test(zip);
}

function validateFullName() {
    var name = document.forms["form"]["fullname"].value;

    if (checkFullName(name)) {
        document.getElementById("fullname").value = "Your name is too short. Shame on you!";
        document.getElementById("fullname").setAttribute("style", "color: red; box-shadow: 0 0 5pt 0.5pt red; border-left: red solid 6px;");
        //document.getElementById("fullname").focus();
    }
    else {
        document.getElementById("fullname").removeAttribute("style");
        document.getElementById("fullname").setAttribute("style", "border-left: green solid 6px;");
    }
}

function validateEmail() {
    var email = document.forms["form"]["email"].value;

    if(email.length > 1) {
        if (!checkEmail(email)) {
            document.getElementById("email").value = "Enter valid email";
            document.getElementById("email").setAttribute("style", "color: red; box-shadow: 0 0 5pt 0.5pt red; border-left: red solid 6px;");
            //document.getElementById("email").focus();
        }
        else {
            document.getElementById("email").removeAttribute("style");
            document.getElementById("email").setAttribute("style", "border-left: green solid 6px;");
        }
    }
    else {
        document.getElementById("email").removeAttribute("style");
    }

    
}

function validateZip() {
    var zip = document.forms["form"]["zip"].value;

    if (zip === "" || !checkZip(zip)) {
        document.getElementById("zip").setAttribute("style", "color: red; box-shadow: 0 0 5pt 0.5pt red; border-left: red solid 6px;");
        //document.getElementById("zip").focus();
    }
    else {
        document.getElementById("zip").removeAttribute("style");
    }
}

function validatePhone() {
    var phone = document.forms["form"]["phone"].value;
    
    if(phone === "" || !checkPhone(phone)) {
        document.getElementById("phone").value = "Enter valid number";
        document.getElementById("phone").setAttribute("style", "color: red; box-shadow: 0 0 5pt 0.5pt red; border-left: red solid 6px;");
        //document.getElementById("phone").focus();
    }
    else {
        document.getElementById("phone").removeAttribute("style");
    }
  }

function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}




