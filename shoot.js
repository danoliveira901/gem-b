function Shoot(x, y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        noStroke();
        fill(150,0, 255);
        circle(this.x,this.y, 18, 18)
    }
     this.move = function() {
        this.y = this.y -5;
    }
}