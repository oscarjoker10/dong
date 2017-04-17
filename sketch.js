var Height = window.innerHeight
var Width = Height;
var speedx,speedy;
var textx =0;
var x,y,h,w,dir;

 var up1,down1,up2,down2,play;
 var paddlexL,paddleyL,paddlewL,paddlehL,paddlesL;
  var paddlexR,paddleyR,paddlewR,paddlehR,paddlesR;

function setup()

{
 //paddle Variables
  rectMode(CENTER);
  paddlexL=30;
  paddleyL =Height/2-60;
  paddlewL=20;
  paddlehL=100;
  paddlesL=7;
  //paddleR
  paddlexR=Width+75;
  paddleyR =Height/2-60;
  paddlewR=20;
  paddlehR=100;
  paddlesR=7;

Height = Width - (Height%100);
 
Width = Height;

createCanvas(Width + 200, Height);



w=25;
 
h=25;
 
y=Height/2;
 
x=Width/2;
 
speedx=5;
speedy=5;
dir=20;
frameRate(150);
smooth();
noStroke();
}


function draw()

{
contactPadL();
background(0);
color(225);
 text("version : 1",0,0);

fill(225,0,0);
 
ball();
drawPad();
 
ScoreBoard();

}


function ball()

{
 
fill(225);
rect(x+dir,y-10,-50,10);
ellipse(x,y-20,h,w); 
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

textx=textx+1;
text("Dong by Oscar Jimenez || Copyrighted: Dong Industries",textx,550);
if(textx>Width+400)
{
d=-100;
}
}
//makes paddle
function drawPad()
{
  fill(255);
  if(up1==true&&paddleyL>125)
  {
  paddleyL=paddleyL-paddlesL;
  }
  if(down1==true&&paddleyL<Height-153)
  {
  paddleyL=paddleyL+paddlesL;
  }
  rect(paddlexL,paddleyL,paddlewL,paddlehL);
  
  //padleR
  fill(255);
  if(up2==true&&paddleyR>125)
  {
  paddleyR=paddleyR-paddlesR;
  }
  if(down2==true&&paddleyR<Height-153)
  {
  paddleyR=paddleyR+paddlesR;
  }
  rect(paddlexR,paddleyR,paddlewR,paddlehR);
}
function keyPressed()
{
 if(key=='w'||key=='W')
 {
 up1 = true;
 }
  if(key=='s'||key=='S')
 {
 down1 = true;
 }
 //paddleR
 if(key=='i'||key=='I')
 {
 up2 = true;
 }
  if(key=='k'||key=='K')
 {
 down2 = true;
 }

}
function keyReleased()
{
  if(key=='w'||key=='W')
 {
 up1 = false;
 }
  if(key=='s'||key=='S')
 {
 down1 = false;
 }
  //paddleR
 if(key=='i'||key=='I')
 {
 up2 = false;
 }
  if(key=='k'||key=='K')
 {
 down2 = false;
 }

}
function contactPadL()
{
  
  if (x-w/2<paddlexL + paddlewL/2 && y-h/2<paddleyL + paddlehL/2 && y+h/2>paddleyL - paddlehL/2)
  {
  // file.play();
   speedx=-speedx;
   dir=-dir;
  // file.play();
   // r= random(225);
   //g= random(225);
   //b= random(225);
   
  
  }
  else if (x+w/2>paddlexR - paddlewR/2 && y-h/2<paddleyR + paddlehR/2 && y+h/2>paddleyR - paddlehR/2)
  {
    dir=-dir;
//    file.play();
 //  file.play();  
   // r= random(225);
   //g= random(225);
   //b= random(225);
    speedx=-speedx;
  
  }
  
}


function ScoreBoard()

{
 color(225);

stroke(300);
 
 
line(0,72,Width+200,72);
 
line(0,73,Width+200,73);

line(0,74,Width+200,74);
line(0,75,Width+200,75);
 
line(0  ,Height-100,Width+200,Height-100);
 
line(0  ,Height-101,Width+200,Height-101);

line(0  ,Height-102,Width+200,Height-102);
 
line(0  ,Height-103,Width+200,Height-103);

line(0,73,0,Height-100);
line(1,73,1,Height-100);
line(2,73,2,Height-100);
line(3,73,3,Height-100);
line(4,73,4,Height-100);
line(5,73,5,Height-100);
line(6,73,6,Height-100);

line(Width+200,73,Width+200,Height-100);
line(Width+199,73,Width+199,Height-100);
line(Width+198,73,Width+198,Height-100);
line(Width+197,73,Width+197,Height-100);
line(Width+196,73,Width+196,Height-100);
line(Width+195,73,Width+195,Height-100);
line(Width+194,73,Width+194,Height-100);
text("Player Controls = W & I = up, S & K = Down", (Width/2)-20, 30);


}
 
