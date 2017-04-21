var Height = window.innerHeight -20;
var Width = window.innerWidth-320;
var map= [];
var block = [];
var level = 0;
var player;
var players =10;
var g ;
function setup()

{
    g = createVector(0, .1);
    createCanvas(Width, Height);
    smooth(); 
    frameRate(1000);
    player = new Player(width / 2, height / 2);
    for (var i = 0; i < Width; i++)
    {
        map[i] = [];
    }

    for (var y = 0; y < 5; y++) {
     
        for (var x = 0; x < 300; x++) {
           
                map[y][x] = new Block(x * 50, (height * .80) + y * 50, y)
        }
        level++;
      
    }
   
   /* for (var i = 0; i < 100; i++)
    {
        block[i] = new Block(i*20, height*.80);
    }*/
 
}
function draw()
{
    player.applyForce(g);
    background(0);
   
   
   // player.y += players;
    translate(-player.position.x+Width/2, 0)
    Loadmap();
    player.draw();
    player.update();
    player.Checkedge();
    Keycodes();
    if (player.position.y > map[0][0].y-10) { player.velocity * -1; player.position.y = map[0][0].y-10 }
}

function Loadmap()
{
    for (var y = 0; y < 10; y++) {

        for (var x = 0; x < map[y].length; x++) {
            map[y][x].draw();
          
            // new Block(x * 20, (height * .80) + y * 20);
        }
    }
    for (var y = 0; y < 10; y++) {

        for (var x = 0; x < map[y].length; x++) {
           
        }
        if (player.y+20 >= map[0][0].y)
            
               players = 0;
    }
}
function Keycodes()
{
 if (keyIsDown(32)&&keyIsPressed==true&&player.position.y>=map[0][0].y-30&&player.position.y>(Width/2)-200) {
    var jump = createVector(0, -1);
    player.applyForce(jump);
}
    if (keyIsDown(65)) 
        player.position.x -= 3;
    
    else if (keyIsDown(68)) 
        player.position.x += 3;
   
   
}
function Player(x,y)
{
    
    this.position= createVector(x,y)
    this.acc = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.applyForce = function (force) {
        this.acc.add(force);
        this.y = this.position.y;
    }
    this.draw = function ()
    {
       
        
        fill(225);
        rect(this.position.x, this.position.y - 5, 25, 10);
        ellipse(this.position.x, this.position.y, 20, 20);

    }
    this.update = function ()
    {
        this.velocity.add(this.acc)
        this.position.add(this.velocity)
        this.acc.mult(0);
    }
    this.Checkedge = function ()
    {
       
         if (this.position.x < 0)
        {
            this.velocity.x *= -1; this.position.x = 0
        }
        
    }
}
function Block(x,y,l)
{
    
    this.draw = function() 
    {
        this.x = x;
        this.y = y;
        
        if(l==0)
            fill('GREEN');
        if (l >= 1)
            fill(139, 69, 19);
        rect(this.x, this.y, 50, 50);
      
         
    }
}