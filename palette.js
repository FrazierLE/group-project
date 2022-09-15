class Palette {
  constructor(colors, paletteID) {
    this.colors = colors;
    this.id = paletteID;
  }
  updateColors() {
    for (var i = 0; i < this.colors.length; i++) {
      this.colors[i].randomizeColor();
    }
  }
}
