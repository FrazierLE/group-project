
class Color {
  constructor(locked) {
        this.hexCode = "";
        this.locked = locked || false;
    }

    randomizeColor() {
    var hexCodeDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var newHexCode = "#";
    for (var i = 0; i < 6; i++) {
      var randomCharacter = hexCodeDigits[Math.floor(Math.random() * hexCodeDigits.length)];
      newHexCode += randomCharacter;
    }
    this.hexCode = newHexCode;
  }
}

var testColor1 = new Color();
var testColor2 = new Color();
var testColor3 = new Color();
var testColor4 = new Color();
var testColor5 = new Color();


testColor1.randomizeColor();
testColor2.randomizeColor();
testColor3.randomizeColor();
testColor4.randomizeColor();
testColor5.randomizeColor();


  // var testColor1 = new Color();
  // var colorOne = testColor1.hexCode;

class Palette {
  constructor(testColorObject1, testColorObject2, testColorObject3, testColorObject4, testColorObject5) {
    this.color1  = testColorObject1.hexCode;
    this.color2  = testColorObject2.hexCode;
    this.color3  = testColorObject3.hexCode;
    this.color4  = testColorObject4.hexCode;
    this.color5  = testColorObject5.hexCode;
  }
}

var testPalette1 = new Palette(testColor1, testColor2, testColor3, testColor4, testColor5);



// class Palette {
//   constructor(color) {
//     this.id = Date.now();
//     this.color1 = color;
//   }
// }
// var testPalette = new Palette(colorOne);

//this.color1 set to an array,






//...then a new instance ...used IOT support saving of Palette.  Keep going?

// should have 5 Colors. Possible Object {} // new color class?
//..." unique ID // Date.now ??
//...possible method IOT replace Colors
//...possible method IOT lock Colors
// Of note:  it should ONLY replace unlocked Colors (If/conditional?)
