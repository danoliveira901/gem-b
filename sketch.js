console.log("hello");

var ship;
var gem = [];
var shoots =[];

function setup() {
    createCanvas(800, 400);
    ship = new Ship();
    //shoot =new Shoot(width/2, height/2);
    for ( var i = 0; i < 9; i++) {
        gem [i] = new Gem(i * 80+80, 60);
    }
}
function draw() {
    background(51);
    ship.show();
    
    for (var i = 0; i <shoots.length; i++) {
        shoots[i].show();
        shoots[i].move();
     }

    for (var i = 0; i < gem.length; i++) {
       gem[i].show();
    }
     
}
function keyPressed() {
    if (key === ' '){
        var shoot = new Shoot(ship.x, height);
        shoots.push(shoot);
    }

    if (keyCode === RIGHT_ARROW){
        ship.move(1);

    } else if (keyCode === LEFT_ARROW){
        ship.move(-1);
        
    }
}