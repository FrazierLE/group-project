class Palette {
  constructor(colors) {
    this.colors = colors;
    this.id = paletteID;
  }
  updateColors() {
    this.id = paletteID;
    for (var i = 0; i < this.colors.length; i++) {
      this.colors[i].randomizeColor();
    }
  }
}
