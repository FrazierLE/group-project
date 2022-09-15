class Palette {
  constructor(colors) {
    this.colors = colors;
    this.id = paletteID;
    paletteID++
  }
  updateColors() {
    for (var i = 0; i < this.colors.length; i++) {
      this.colors[i].randomizeColor();
    }
  }
}
