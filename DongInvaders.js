var Height = window.innerHeight;
var Width = Height;
var imgs, imga;
var myS = 5;
var x, y;
var ship, hud;
var aliens = [];
var cums = 8;
var cumd = 10;
var cum = [];
var milk = [];
var lives = 3;
var score = 0;
var level = 1;
var start = 40;

function setup() {
    createCanvas(Width, Height);
    ship = new Ship();
    hud = new Hud();
   
    // aliens = new Alien(50,50);
    // cum = new Cum(ship.x-10,ship.y-53);
    for (var i = 0; i < 10; i++) {
        var r = random(5, 10) * level;
        aliens[i] = new Alien(i * 80 + 40, 50,r,1,1);


    }

}
function draw() {
    background(0);
    ship.draw();
    hud.draw();


    // cum.draw();
    // aliens.draw();
    for (var i = cum.length - 1; i >= 0; i--) {
        if (cum[i].delete) {
            cum.splice(i, 1);
        }
    }


  
   
    for (var i = 0; i < cum.length; i++) {

        cum[i].draw();

        cum[i].update();
        if (cum[i].y < 0)
            cum.splice(i, 1);
        for (var j = 0; j < aliens.length; j++) {
            if (aliens.length >= 1 && cum.length >= 1) {
                if (cum[i].hit(aliens[j])) {
                    score += 10;
                    aliens[j].health -=cumd;
                    if (aliens[j].health <= 0)
                    {
                        aliens.splice(j, 1);
                    }
                    if(aliens.size>0)
                    aliens[j].size -= .2;
                    cum[i].delete = true;
                }
            }
        }
       
    }
    if (aliens.length <= 0) {
        Spawn();
       
    }
    for (var i = 0; i < milk.length; i++)
    {
        milk[i].draw();
        milk[i].update();
    }
    for (var i = 0; i < aliens.length; i++) {
       
        aliens[i].draw();
        aliens[i].update();
       
        

    }
    if (keyIsDown(65)) {
        ship.x -= myS;
    }
    else if (keyIsDown(68)) {
        ship.x += myS;
    }
    //delaytest();
  
}
function waitTime()
{
    var start = second()+5;
    if (second() == start)
    {
        delaytest();
    }
}
function delaytest()
{
    
        var b = new Milk(aliens[1].x - 10, aliens[1].y - 52);
    
    milk.push(b);
}
function keyPressed() {
    if (key == ' ') {
        var b = new Cum(ship.x - 10, ship.y - 52);

        cum.push(b);
    }
}
function Ship() {
    this.x = Width / 2;
    this.y = Height - 100;
    this.draw = function () {
        noStroke()

        fill(255, 153, 204);
        ellipse(this.x - 10, this.y - 50, 20, 20);

        fill(255, 192, 203);
        ellipse(this.x, this.y, 30, 30);
        ellipse(this.x - 25, this.y, 30, 30);
        rect(this.x - 20, this.y, 20, -50);
        this.x = constrain(this.x, 28, Width - 22);
    }
}
function Alien(x, y,h,sy,sx) {
    this.x = x;
    this.y = y;

    this.xspeed = sx;
    this.yspeed = 30;
    this.health = h;
    this.size = h
    this.draw = function () {
        fill(232, 187, 162);
       
        ellipse(this.x, this.y, this.size, this.size);
        ellipse(this.x - 25, this.y, this.size, this.size);
        fill(209, 31, 144);
        ellipse(this.x - 25, this.y, 5, 5);
        ellipse(this.x, this.y, 5, 5);
    }
    this.update = function () {
        this.x += this.xspeed;

        for (var i = 0; i < aliens.length; i++) {
            if (aliens[i].x < 30) {
                this.xspeed = -this.xspeed;

            }
            else if (aliens[i].x > Width - 40) {
                this.xspeed = -this.xspeed;
                this.y += this.yspeed;
            }
            this.size = h;
            
        }

    }
}
function Milk(x,y)
{
    this.x = x;
    this.y = y;

    this.draw = function()
    {
        ellipse(this.x, this.y, 20, 20);
    }
    this.update = function()
    {
        this.y += 8;
    }

}
function Cum(x, y) {
    this.x = x;
    this.y = y;
    this.draw = function () {
        fill(224, 242, 255);
        rect(this.x, this.y, 2, 10)
    }
    this.update = function () {
        this.y -= cums;
    }
    this.hit = function (aliens) {
        var d = dist(this.x, this.y, aliens.x, aliens.y);
        if (d < 30) {
            return true;
        } else {
            return false;
        }
    }
}
function Hud() {

    this.draw = function () {
        fill(225);
        textSize(30)
        text("lives : " + lives, Width - 200, Height - 45);
        text("Score : " + score, 100, Height - 45)
        text("Level : " + level, Width / 2 - 80, Height - 45)
        textSize(12);
        text("Created by : Oscar Jimenez || Copyrighted 2017: Dongindustries ", Width / 2 - 175, Height - 20)
        rect(0, Height - 80, Width, 4);
        ;

    }
}
function Spawn() {
    level += 1;
    cumd += 5;
    start = 40;
    myS += level * .5;
   // ellipse(30, 30, 30, 30);
    for (var l = 0; l<level; l++)
    {
      
        start = start + 40;
        for (var i = 0; i <10; i++) {
            
            var r = random(5, 10) * level;
            aliens[i] = new Alien(i * 80 + 40, 50, r, level*(.5), 1+level);
            
            aliens[i].draw();
        }
        allaliens = aliens;
    }

 }

