// Color:
// A color should have a random hex code
// hint: hex codes are 6 characters long, and each character is some value of 0-9 or A-F (ABCDEF0123456789)
// Though there are many examples of this logic coded out, this type of crunchy problem solving is well within your skill set!
// Don’t look up how to accomplish this; challenge yourselves to use pseudocode to problem-solve through it!
// It should have a property of locked, whose value is a boolean. Colors begin unlocked.

// Stores all characters that might appear in a hex code

class Color {
  constructor(locked) {
    this.hexCode = "#24680A";
    this.locked = locked || false;
  }

    randomizeHexCode() {
      var hexCodeDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
      var newHexCode = "#";
      for (var i = 0; i < 6; i++) {
        var randomCharacter = hexCodeDigits[Math.floor(Math.random() * hexCodeDigits.length)];
        newHexCode += randomCharacter;
      }
      this.hexCode = newHexCode;
      return;
    }
  }//end of class

  var testColor = new Color();
  var testColor2 = new Color();

  testColor.randomizeHexCode();
  testColor2.randomizeHexCode();


//pseudocode
//goal: be able to generate a random hex code
//data: onclick invoke function that will need to generate a string with 6 characters containing values between 0-9 and A-F
  //will need to update to h3 box
//questions: are there existing methods that generate random? Should we create an array with 0-9 and A-F? What should hex codes look like -- what's the format?
