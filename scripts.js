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

var testPalette1 = new Palette(testColor1, testColor2, testColor3, testColor4, testColor5);

//...then a new instance ...used IOT support saving of Palette.  Keep going?

// should have 5 Colors. Possible Object {} // new color class?
//..." unique ID // Date.now ??
//...possible method IOT replace Colors
//...possible method IOT lock Colors
// Of note:  it should ONLY replace unlocked Colors (If/conditional?)
