var HT = window.innerHeight;
var WD = HT;

function setup()
{
 HT = HT - (HT%100);
 WD = HT;
createCanvas(WD + 200, HT);
background(0);

}
function draw()
{
text("version : 1",0,0);
ellipse(222,222,80.80);
}
 
