var paletteID = 1;

var color1 = new Color();
var color2 = new Color();
var color3 = new Color();
var color4 = new Color();
var color5 = new Color();

color1.randomizeColor();
color2.randomizeColor();
color3.randomizeColor();
color4.randomizeColor();
color5.randomizeColor();

var colors = [color1, color2, color3, color4, color5];

var testPalette = new Palette(colors);

var box1Color = document.querySelector("#box-1");
var box1Label = document.querySelector("#color-1");
var box2Color = document.querySelector("#box-2");
var box2Label = document.querySelector("#color-2");
var box3Color = document.querySelector("#box-3");
var box3Label = document.querySelector("#color-3");
var box4Color = document.querySelector("#box-4");
var box4Label = document.querySelector("#color-4");
var box5Color = document.querySelector("#box-5");
var box5Label = document.querySelector("#color-5");


box1Color.style.background = testPalette.colors[0].hexCode;
box1Label.innerText = testPalette.colors[0].hexCode;
box2Color.style.background = testPalette.colors[1].hexCode;
box2Label.innerText = testPalette.colors[1].hexCode;
box3Color.style.background = testPalette.colors[2].hexCode;
box3Label.innerText = testPalette.colors[2].hexCode;
box4Color.style.background = testPalette.colors[3].hexCode;
box4Label.innerText = testPalette.colors[3].hexCode;
box5Color.style.background = testPalette.colors[4].hexCode;
box5Label.innerText = testPalette.colors[4].hexCode;

var newPaletteBttn = document.querySelector("#new-palette");

newPaletteBttn.addEventListener("click", generatePalette);

function generatePalette(){
  testPalette.updateColors();
    box1Color.style.background = testPalette.colors[0].hexCode;
    box1Label.innerText = testPalette.colors[0].hexCode;
    box2Color.style.background = testPalette.colors[1].hexCode;
    box2Label.innerText = testPalette.colors[1].hexCode;
    box3Color.style.background = testPalette.colors[2].hexCode;
    box3Label.innerText = testPalette.colors[2].hexCode;
    box4Color.style.background = testPalette.colors[3].hexCode;
    box4Label.innerText = testPalette.colors[3].hexCode;
    box5Color.style.background = testPalette.colors[4].hexCode;
    box5Label.innerText = testPalette.colors[4].hexCode;
}


//GOAL: user clicks save palette and colors should appear
//on right side. No hexcode, just color and trash picture

//DATA: we got HTML, CSS file

//QUESTIONS: how to use flexbox to our advantage

//PSEUDOCODE:
//make containers for our saved palletes
//make a saved palette array in script.js
//romcom style inner html to stack dynamically with containers
//make an event listener to register click w/ function
//function += html containers
