var paletteID = 1;

var color1 = new Color();
var color2 = new Color();
var color3 = new Color();
var color4 = new Color();
var color5 = new Color();

var box1Color = document.querySelector("#box-1");
var box2Color = document.querySelector("#box-2");
var box3Color = document.querySelector("#box-3");
var box4Color = document.querySelector("#box-4");
var box5Color = document.querySelector("#box-5");
var box1Label = document.querySelector("#color-1");
var box2Label = document.querySelector("#color-2");
var box3Label = document.querySelector("#color-3");
var box4Label = document.querySelector("#color-4");
var box5Label = document.querySelector("#color-5");

var loadSavedPalettes = document.querySelector("#saved-box");
var newPaletteBttn = document.querySelector("#new-palette");
var savePaletteBttn = document.querySelector("#save-palette");

var colors = [color1, color2, color3, color4, color5];
var boxColors = [box1Color, box2Color, box3Color, box4Color, box5Color];
var boxLabels = [box1Label, box2Label, box3Label, box4Label, box5Label];
var savedPalettes = [];

var defaultPalette = new Palette(colors);
var currentPalette = defaultPalette;

generatePalette();

newPaletteBttn.addEventListener("click", generatePalette);
savePaletteBttn.addEventListener("click", savePalette);

function generatePalette() {
  defaultPalette.updateColors();
  for (i = 0; i < 5; i++) {
    boxColors[i].style.background = defaultPalette.colors[i].hexCode;
    boxLabels[i].innerText = defaultPalette.colors[i].hexCode;
  }
}

function savePalette() {
  var newSavedPalette = new Palette(currentPalette.colors, paletteID);
  savedPalettes.push(newSavedPalette);

  paletteID++;

  buildSavedPalette();
  generatePalette();
}

function buildSavedPalette() {
  var savedPalette = savedPalettes[savedPalettes.length-1];
  var savedID = savedPalette.id;
  var displaySavedPalette = `
  <div class="flex" id="palette-box">
  <div class="mini-box" id="mini-box1-${savedID}"></div>
  <div class="mini-box" id="mini-box2-${savedID}"></div>
  <div class="mini-box" id="mini-box3-${savedID}"></div>
  <div class="mini-box" id="mini-box4-${savedID}"></div>
  <div class="mini-box" id="mini-box5-${savedID}"></div>
  <img class="mini-box" id="bin-${savedID}" src="assets/lock.png" alt ="bin-${savedID}">
  </div>`;

  loadSavedPalettes.innerHTML += displaySavedPalette;

  for (var i = 0; i < 5; i++) {
    var hexCodeUpdate = document.getElementById(`mini-box${i+1}-${savedID}`);
    hexCodeUpdate.style.background = savedPalette.colors[i].hexCode;
  }
}



//Goal: user click color and lock locks
//Lock images, lock parameter for color, unique ids
//Questions: add event listener on box
//Pseudocode:
//turn div into event listener
//target div by id?
//find color associated with id
//change lock property - lock function
//change innerText of src in img to lock.png
//upload trash pic
