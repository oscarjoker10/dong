var HT = window.innerHeight;
var WD = HT;
 int x,y,h,w,player1,player2,score=7,d;

 int speedx,speedy;
 //paddles
 SoundFile file; SoundFile back;
 boolean up1,down1,up2,down2,play;
 int paddlexL,paddleyL,paddlewL,paddlehL,paddlesL;
  int paddlexR,paddleyR,paddlewR,paddlehR,paddlesR;
  float r,g,b; int look;
  int len1,len2;
function setup()
{
 HT = HT - (HT%100);
 WD = HT;
createCanvas(WD + 200, HT);
  frameRate(100);
 background(225);
 smooth();
}
function draw()
{
text("version 1",0,0);
   ball((color(r,g,b)));
}
void ball(color col)
{
  
   //color(col);
    fill(col);
   ellipse(x,y-20,h,w);
  
   rect(x+20,y-10,-50,10);
   ellipse(x,y,h,w);
    if(x>width-w/2)
   {
   speedx=-speedx;
   player1++;
   len1+=10;
   score--;
   play=true;
   reset();
   }
   if(x<0+w/2)
   {
   speedx=-speedx;
   player2++;
   len2+=10;
   score--;
   play=false;
   reset();
   }
   if(y>650-h/2)
   {
   speedy=-speedy;
   }
   if(y<73+w/2)
   {
   speedy=-speedy;
   }
  x=x+speedx;
  look=x-20+speedx;
  y=y+speedy;
  
  text("Dong by : Oscar Jimenez || Copyrighted 2017 : Oscar Jimenez, Dong Industries",d,700);
   d=d+1;
   if (d>1100)
   {
   d=-700;
   }
}
