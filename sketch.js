var HT = window.innerHeight;
var WD = HT;
function setup()
{
 HT = HT - (HT%100);
 WD = HT;
createCanvas(WD + 200, HT);
  frameRate(100);
 background(51);
}
function draw()
{
text("version 1",0,0);
ellipse(50, 50, 80, 80);
}
