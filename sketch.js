var HT = window.innerHeight;
var WD = HT;
var speedx,speedy;

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
 fill(225,0,0);
 ball();
 ScoreBoard();
}
function ball()
{
 color(225);
 ellipse(500,500,30.30);
}
function ScoreBoard()
{
 color(225);
 stroke(250);
 line(0,72,WD,72);
 line(0,73,WD,73);
 line(0  ,650,WD,650);
 line(0  ,651,WD,651);
}
 
