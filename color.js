class Color {
  constructor(locked) {
        this.hexCode = "";
        this.locked = locked || false;
    }

  randomizeColor() {
    if (this.locked === false) {
      var hexCodeDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
      var newHexCode = "#";
      for (var i = 0; i < 6; i++) {
        var randomCharacter = hexCodeDigits[Math.floor(Math.random() * hexCodeDigits.length)];
        newHexCode += randomCharacter;
      }
      this.hexCode = newHexCode;
    }
  }
}
