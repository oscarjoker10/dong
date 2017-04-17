var Height = window.innerHeight;
var Width = Height;
var speedx,speedy;
var x,y,h,w;
function setup()
{
 Height = Width - (Height%100);
 Width = Height;
createCanvas(Width + 200, Height);
background(0);
 w=25;
 h=25;
 y=Height/2;
 x=Width/2;
 

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
 fill(225);
 ellipse(x,y,h,w);
 if(x<0+w)
 {
 speedx=-speedx;
 }
 if(x>Width-32)
 {
 speedx=-speedx;
 }
 x=x+speedx;
 

}
function ScoreBoard()
{
 color(225);
 stroke(250);
 text("DONG",w/2,800);
 line(0,72,w+200,72);
 line(0,73,w+200,73);
 line(0  ,750,w+200,750);
 line(0  ,751,w+200,751);
}
 
