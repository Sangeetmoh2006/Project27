class Bob {
    constructor(x, y) {
        var options  = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.RADIUS = 40;
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("pink");
        circle(pos.x, pos.y, 40);
        pop();
    }
}