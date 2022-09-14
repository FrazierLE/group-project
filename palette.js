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

class Palette {
  constructor(colors) {
    this.colors = colors;
    this.id = paletteID;
    paletteID++;
  }
  updateColors() {
    for (var i = 0; i < this.colors.length; i++) {
      this.colors[i].randomizeColor();
    };
  };
};