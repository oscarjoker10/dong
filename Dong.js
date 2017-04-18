var Height = window.innerHeight
var Width = Height+300;
var speedx,speedy;
var textx =0;
var x,y,h,w,dir;
var Delay;
var up1,down1,up2,down2,play; 
var paddlexL,paddleyL,paddlewL,paddlehL,paddlesL;
var paddlexR,paddleyR,paddlewR,paddlehR,paddlesR;
var len1, len2;
var player1, player2;



function setup()

{
   
    
    //paddle Variables
    player1 = 0; player2 = 0;
  rectMode(CENTER);
  paddlexL=30;
  paddleyL =Height/2-60;
  paddlewL=15;
  paddlehL=100;
  paddlesL = 7;
  len1 = 0;
  len2 = 0;
  //paddleR
  paddlexR=Width-20;
  paddleyR =Height/2-60;
  paddlewR=15;
  paddlehR=100;
  paddlesR=7;

Height = Height- (Height%100);
 

createCanvas(Width, Height);



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
function reset()
{
sleep(300);
speedx=0;
speedy=0;
y=Height/2;
x=Width/2;
sleep(100);
speedx=5;
speedy=5;

}


function draw()

{
   
contactPadL();
background(0);
color(225);
textSize(10);
 text("version : 1",30,20);

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
 
    speedx = -speedx;
    len2 = +5;
    player2 += 1;
 reset();
}
 
if(x>Width-w)
 
{
    player1 += 1;
    len1 = +5;
reset();
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
textAlign(RIGHT);
textx=textx+1;
textSize(30);
text("Dong by Oscar Jimenez || Copyrighted: Dong Industries", textx, ((Height - 100)+Height)/2);
if(textx>Width)
{
textx=-100;
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
   dir = -dir;

  // file.play();
   // r= random(225);
   //g= random(225);
   //b= random(225);
   
  
  }
  else if (x+w/2>paddlexR - paddlewR/2 && y-h/2<paddleyR + paddlehR/2 && y+h/2>paddleyR - paddlehR/2)
  {
      dir = -dir;
   
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
 
 
line(0,72,Width,72);
 
line(0,73,Width,73);

line(0,74,Width,74);
line(0,75,Width,75);
 
line(0  ,Height-100,Width,Height-100);
 
line(0  ,Height-101,Width,Height-101);

line(0  ,Height-102,Width,Height-102);
 
line(0  ,Height-103,Width,Height-103);

line(0,73,0,Height-100);
line(1,73,1,Height-100);
line(2,73,2,Height-100);
line(3,73,3,Height-100);
line(4,73,4,Height-100);
line(5,73,5,Height-100);
line(6,73,6,Height-100);

line(Width+200,73,Width,Height-100);
line(Width+199,73,Width,Height-100);
line(Width+198,73,Width,Height-100);
line(Width+197,73,Width,Height-100);
line(Width+196,73,Width,Height-100);
line(Width+195,73,Width,Height-100);
line(Width+194,73,Width,Height-100);
textAlign(CENTER);
textSize(20);
text("Player Controls = W & I = up, S & K = Down", (Width/2)-20, 30);
text("Player 1 : " + player1, width / 2 - 400, 30);
text("Player 2 : " + player2, width / 2 + 400, 30);
    //dont player 1
ellipse(100, 50, 20, 20);
ellipse(100, 30, 20, 20);
rect(120 + len1, 40, 50 + len1, 10);
    //dong player 2    
ellipse(Width-100, 50, 20, 20);
ellipse(Width - 100, 30, 20, 20);
rect((Width - 120) - len2, 40, 50 + len2, 10);


}
function sleep(milliseconds) 
{
  	var start = new Date().getTime();
 	for (var i = 0; i < 1e7; i++) 
 	{
    	if ((new Date().getTime() - start) > milliseconds)
    	{
      		break;
    	}
  	}
}
 
