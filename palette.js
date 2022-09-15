class Palette {
  constructor(colors, id) {
    this.colors = colors;
    this.id = id;
  }
  updateColors() {
    for (var i = 0; i < this.colors.length; i++) {
      this.colors[i].randomizeColor();
    }
  }
  updateID(){
    this.id++;
  }
}
