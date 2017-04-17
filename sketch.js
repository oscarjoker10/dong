var Height = window.innerHeight
var Width = Height;
var speedx,speedy;

var x,y,h,w;

function setup()

{
 
Height = Width - (Height%100);
 
Width = Height;

createCanvas(Width + 200, Height);



w=25;
 
h=25;
 
y=Height/2;
 
x=Width/2;
 
speedx=5;
speedy=5;
frameRate(100);
smooth();
}


function draw()

{
background(0);

text("version : 1",0,0);
 
fill(225,0,0);
 
ball();
 
ScoreBoard();

}


function ball()

{
 
fill(225);
 
ellipse(x,y,h,w);
 
if(x<0+w)
 
{
 
speedx=-speedx;
 
}
 
if(x>Width+200-w)
 
{
 
speedx=-speedx;
 
}
 
if(y<Height-90-w)
  {
   speedy=-speedy;
   }
   if(y>65+w)
   {
   speedy=-speedy;
   }

x=x+speedx;
 


y=y+speedy;
}
function ScoreBoard()

{
 color(225);
 
stroke(300);
 
text("DONG",Width/2,800);
 
line(0,72,Width+200,72);
 
line(0,73,Width+200,73);

line(0,74,Width+200,74);
line(0,75,Width+200,75);
 
line(0  ,Height-100,Width+200,Height-100);
 
line(0  ,Height-101,Width+200,Height-101);

line(0  ,Height-102,Width+200,Height-102);
 
line(0  ,Height-103,Width+200,Height-103);

}
 
