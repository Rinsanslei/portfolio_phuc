let state = document.getElementById("dark_mode");
const switch_background = document.getElementById("switch");
const switch_image = document.getElementById("image");
const arrow = document.getElementById("arrow");

let verif = 0;


function dark_mode(){

    state.classList.toggle("right");
    const body = document.body;
    body.classList.toggle('dark-mode');
    switch_background.classList.toggle("switch-background");


    verif +=1;

    if (verif % 2 != 0){
        switch_image.setAttribute("src", "/images/sun.svg");
        arrow.setAttribute("src","/images/arrow_white.svg")
    }
    else{
        switch_image.setAttribute("src", "/images/moon.svg");
        arrow.setAttribute("src","/images/arrow_black.svg")

    }





}

switch_background.addEventListener("click", dark_mode)
