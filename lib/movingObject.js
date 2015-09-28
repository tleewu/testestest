(function(){
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(options){
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
    this.game = options["game"];
  };

  MovingObject.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  };

  MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.distance = function(otherObject) {
    return Math.sqrt(
      Math.pow(this.pos[0] - otherObject.pos[0],2) +
      Math.pow(this.pos[1] - otherObject.pos[1],2)
    );
  };

  MovingObject.prototype.isCollidedWith = function(otherObject){
    //duck typing...
  };

})();
