let body = document.querySelector("body");
let cards = document.querySelectorAll(".cards");
let nav = document.querySelector(".nav");
let bulb = document.querySelector(".nav-content li>i");
let spinner = document.querySelector("button.spinner");

function changeTheam() {
    theam = localStorage.getItem("theam");
    console.log(theam);
    if (theam == 'dark') {
        bulb.classList.add('yellow');
        body.classList.add('dark');
        nav.classList.add('innerDark');
    } else {
        bulb.classList.remove('yellow');
        body.classList.remove('dark');
        nav.classList.remove('innerDark');
    }
}

changeTheam();

bulb.onclick = function () {
    if (body.classList.contains("dark")) {
        localStorage.theam = "light";
        changeTheam();
    } else {
        localStorage.theam = "dark";
        changeTheam();
    }
}

window.addEventListener("scroll", function () {
    let x = window.scrollY;
    if (x > 500) {
        spinner.style.opacity = 1;
    } else {
        spinner.style.opacity = 0;
    }
})