
class Color {
  constructor(locked) {
        this.hexCode = function() {
        var hexCodeDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        var newHexCode = "#";
        for (var i = 0; i < 6; i++) {
          var randomCharacter = hexCodeDigits[Math.floor(Math.random() * hexCodeDigits.length)];
          newHexCode += randomCharacter;
        }
        return this.hexCode = newHexCode;
    }

        this.locked = locked || false;
    }
}

  var testColor1 = new Color();
  var testColor2 = new Color();
  var testColor3 = new Color();
  var testColor4 = new Color();
  var testColor5 = new Color();


class Palette {
  constructor(testColor1, testColor2, testColor3, testColor4, testColor5) {
    this.id = Date.now();
    this.color1 = testColor1.hexCode();
    this.color2 = testColor2.hexCode();
    this.color3 = testColor3.hexCode();
    this.color4 = testColor4.hexCode();
    this.color5 = testColor5.hexCode();
  }
}
var testPalette = new Palette();






//...then a new instance ...used IOT support saving of Palette.  Keep going?

// should have 5 Colors. Possible Object {} // new color class?
//..." unique ID // Date.now ??
//...possible method IOT replace Colors
//...possible method IOT lock Colors
// Of note:  it should ONLY replace unlocked Colors (If/conditional?)
