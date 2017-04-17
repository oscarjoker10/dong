var HT = window.innerHeight;
var WD = HT;
 var x,y,h,w,player1,player2,score=7,d;

 var speedx,speedy;
 //paddles
 
 var up1,down1,up2,down2,play;
 var paddlexL,paddleyL,paddlewL,paddlehL,paddlesL;
  var paddlexR,paddleyR,paddlewR,paddlehR,paddlesR;
  var r,g,b; var look;
  var len1,len2;
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
text("version : 1",0,0);
 
}
 
