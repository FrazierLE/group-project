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


box1Color.style.background = testPalette.colors[0].hexCode;
box1Label.innerText = testPalette.colors[0].hexCode;


//GOAL: when the user first visits the page,
//they see a randomly generated color palette.

//DATA: we have a palette class, color class, html is setup,
//and css is setup

//QUESTIONS/RESEATCH: how to page loads work? match up
//hexcodes to show on the DOM?

//PSEUDOCODE:
//change innertext of hexCode labels
//set up classes in css (background color)
