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
  savePaletteBttn.disabled = false;
  savePaletteBttn.innerText = "Save Palette";
  defaultPalette.updateColors();
  for (i = 0; i < 5; i++) {
    boxColors[i].style.background = defaultPalette.colors[i].hexCode;
    boxLabels[i].innerText = defaultPalette.colors[i].hexCode;
  }
}

function savePalette() {
  var newSavedPalette = new Palette(currentPalette.colors, paletteID);
  savePaletteBttn.disabled = true;
  savePaletteBttn.innerText = "Palette Saved!"
  savedPalettes.push(newSavedPalette);
  buildSavedPalette();
  paletteID++;
}

function buildSavedPalette() {
  var savedPalette = savedPalettes[savedPalettes.length-1];
  var savedID = savedPalette.id;
  var displaySavedPalette = `
  <div class="flex" id="saved-box">
  <div class="mini-box" id="mini-box1-${savedID}"></div>
  <div class="mini-box" id="mini-box2-${savedID}"></div>
  <div class="mini-box" id="mini-box3-${savedID}"></div>
  <div class="mini-box" id="mini-box4-${savedID}"></div>
  <div class="mini-box" id="mini-box5-${savedID}"></div>
  </div>`;

  loadSavedPalettes.innerHTML += displaySavedPalette;

  for (var i = 0; i < 5; i++) {
    var hexCodeUpdate = document.getElementById(`mini-box${i+1}-${savedID}`);
    hexCodeUpdate.style.background = savedPalette.colors[i].hexCode;
  }
}


//CURRENT GOAL: first make sure ID works correctly
//NEXT GOAL: make sure saved palette button doesn't duplicate

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
