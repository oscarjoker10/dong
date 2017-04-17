var h = window.innerHeight;
var w = h;
var speedx,speedy;
var x,y,H,W;
function setup()
{
 h = h - (h%100);
 w = h;
createCanvas(w + 200, h);
background(0);
 W=25;
 H=25;
 y=h/2;
 x=w/2;
 

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
 ellipse(x,y,H,W);
 if(x>w-W/2)
 {
 speedx=-speedx;
 }
 if(x<0+W/2)
 {
 speedx=-speedx;
 }
if(y>650-H/2)
{
speedy=-speedy;
}
 if(y<73+H/2)
{
speedy=-speedy;
}
 x=x+speedx;
 y=y+speedy;
}
function ScoreBoard()
{
 color(225);
 stroke(250);
 text("DONG"w/2,800);
 line(0,72,w+200,72);
 line(0,73,w+200,73);
 line(0  ,750,w+200,750);
 line(0  ,751,w+200,751);
}
 
