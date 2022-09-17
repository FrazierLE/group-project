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
var lock1 = document.querySelector("#lock-1");
var lock2 = document.querySelector("#lock-2");
var lock3 = document.querySelector("#lock-3");
var lock4 = document.querySelector("#lock-4");
var lock5 = document.querySelector("#lock-5");
var leftSection = document.querySelector("#left-section")

var loadSavedPalettes = document.querySelector("#saved-box");
var newPaletteBttn = document.querySelector("#new-palette");
var savePaletteBttn = document.querySelector("#save-palette");

var colors = [color1, color2, color3, color4, color5];
var boxColors = [box1Color, box2Color, box3Color, box4Color, box5Color];
var boxLabels = [box1Label, box2Label, box3Label, box4Label, box5Label];
var locks = [lock1, lock2, lock3, lock4, lock5];
var savedPalettes = [];

var defaultPalette = new Palette(colors);
var currentPalette = defaultPalette;

generatePalette();

newPaletteBttn.addEventListener("click", generatePalette);
savePaletteBttn.addEventListener("click", savePalette);

leftSection.addEventListener("click", lockColor);

function lockColor(event) {
  if (event.target.classList.contains("box-style")) {
    var lockNum = event.target.dataset.lock
    Number(lockNum)
    var currentLock = locks[lockNum - 1]
    toggleLock(currentLock, lockNum)
  }
}

function toggleLock(lock, arrayIndex) {
  if (lock.dataset.status === `unlocked`) {
    lock.src = `assets/lock.png`;
    lock.alt = `locked icon`;
    lock.dataset.status = `locked`
    defaultPalette.colors[arrayIndex - 1].locked = true
  }
  else {
    lock.src = `assets/unlock.png`;
    lock.alt = `unlocked icon`;
    lock.dataset.status = `unlocked`
    defaultPalette.colors[arrayIndex - 1].locked = false
  }
}

box1Color.addEventListener("click", lockColor1);
box2Color.addEventListener("click", lockColor2);
box3Color.addEventListener("click", lockColor3);
box4Color.addEventListener("click", lockColor4);
box5Color.addEventListener("click", lockColor5);

function lockColor1() {
    lock1.src = "assets/lock.png";
    lock1.alt = "lock icon";
}

function lockColor2() {
    lock2.src = "assets/lock.png";
    lock2.alt = "lock icon";
}

function lockColor3() {
    lock3.src = "assets/lock.png";
    lock3.alt = "lock icon";
}

function lockColor4() {
    lock4.src = "assets/lock.png";
    lock4.alt = "lock icon";
}

function lockColor5() {
    lock5.src = "assets/lock.png";
    lock5.alt = "lock icon";
}

function generatePalette() {
  defaultPalette.updateColors();
  for (i = 0; i < 5; i++) {
    var currentColor = defaultPalette.colors[i]
    if (currentColor.locked === false) {
      boxColors[i].style.background = currentColor.hexCode;
      boxLabels[i].innerText = currentColor.hexCode;
    }
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
  <img class="mini-box" id="bin-${savedID}" src="assets/trash.png" alt ="bin-${savedID}">
  </div>`;

  loadSavedPalettes.innerHTML += displaySavedPalette;

  for (var i = 0; i < 5; i++) {
    var hexCodeUpdate = document.getElementById(`mini-box${i+1}-${savedID}`);
    hexCodeUpdate.style.background = savedPalette.colors[i].hexCode;
  }
}

loadSavedPalettes.addEventListener('click', deleteSavedPalette)

function deleteSavedPalette(event) {
  if(event.target.id.includes('bin')) {
    event.target.parentElement.remove()
  }

}



//goal: to delete whole saved palette and the data in the arrayIndex
//data: loadSavedPalettes variable, innerHTML, event.target, saved palettes array, data attribute?

//add data attribute data - savedID - match what's in saved array .dataset.dataattribute
//
