var Height = window.innerHeight;
var Width = Height;
var imgs, imga;
var myS = 5;
var x, y;
var ship;
var aliens = [];
var cums = 5;
var cum = [];
function setup()
{
    createCanvas(Width, Height);
    ship = new Ship();
    aliens = new Alien(50,50);
    // cum = new Cum(ship.x-10,ship.y-53);
    for (var i = 0; i < 18; i++)
    {
        aliens[i] = new Alien(i * 40 + 40, 50);
        
    }
}
function draw()
{
    background(0);
    ship.draw();
    
   // cum.draw();
   // aliens.draw();
    for (var i = 0; i <18; i++)
    {
        
        aliens[i].draw();
    }
    for (var i = 0; i < cum.length; i++)
    {
        cum[i].draw();
        cum[i].update();
        if (cum[i].y < 0)
            cum.splice(i,1);
    }
    
    if (keyIsDown(65))
    {
        ship.x -= myS;
    }
    else if (keyIsDown(68))
    {
        ship.x += myS;
    }
}
function keyPressed()
{
    if (key == ' ')
    {
        var b = new Cum(ship.x - 10, ship.y - 52);
        cum.push(b);
    }
}
function Ship()
{
    this.x = Width / 2;
    this.y = Height - 100;
    this.draw = function () {
        noStroke()
        fill(255, 192, 203);
        ellipse(this.x, this.y, 30, 30);
        ellipse(this.x - 25, this.y, 30, 30);
        rect(this.x - 20, this.y, 20, -50);
        this.x = constrain(this.x, 28, Width - 22);
    }
}
function Alien(x, y)
{
    this.x = x;
    this.y = y;
    this.draw = function ()
    {
        fill(225);
        ellipse(this.x, this.y, 30, 30);
    }
}
function Cum(x,y)
{
    this.x = x;
    this.y = y;
    this.draw = function ()
    {
        fill(224, 242, 255);
        rect(this.x,this.y,2,10)
    }
    this.update = function ()
    {
        this.y -= cums;
    }
}