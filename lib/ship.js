(function() {
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Battleship = Asteroids.Battleship = function(options) {
    options.color = Battleship.COLOR;
    options.radius = Battleship.RADIUS;
    options.vel = [0,0];
    Asteroids.MovingObject.call(this, options);
    this.angle = 0;
    this.refRadius = 30;
    this.origin = this.pos;
  };

  Battleship.COLOR = "green";
  Battleship.RADIUS = 5;

  Asteroids.Util.inherits(Asteroids.Battleship, Asteroids.MovingObject);

  Battleship.prototype.relocate = function(){
    this.pos = this.game.randomPosition().pos;
    this.vel = [0,0];
  };

  Battleship.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  Battleship.prototype.rotate = function(direction){
    if (direction === "right"){
      this.angle += (Math.PI/12);
    }else{
      this.angle -= (Math.PI/12);
    }
  }

  Battleship.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.moveTo((Math.cos(-Math.PI/2+this.angle))*this.refRadius+this.pos[0],
               (Math.sin(-Math.PI/2+this.angle))*this.refRadius+this.pos[1]);
    ctx.lineTo((Math.cos(-4*Math.PI/3+this.angle))*this.refRadius+this.pos[0],
               (Math.sin(-4*Math.PI/3+this.angle))*this.refRadius+this.pos[1]);
    ctx.lineTo((Math.cos(-5*Math.PI/3+this.angle))*this.refRadius+this.pos[0],
               (Math.sin(-5*Math.PI/3+this.angle))*this.refRadius+this.pos[1]);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  Battleship.prototype.power = function(impulse) {
    if (impulse === "down"){
      // if (this.vel[0] >= 0 && this.vel[1] >= 0 ){
      //   this.vel[0] += Math.sin(-this.angle);
      //   this.vel[1] += Math.cos(-this.angle);
      // }

      this.vel = [0,0];
    }else{
      this.vel[0] -= Math.sin(-this.angle);
      this.vel[1] -= Math.cos(-this.angle);
    }

  };

  Battleship.prototype.fireBullet = function(){
    var position = this.pos.slice();
    // var velocity = this.vel.slice();
    var velocity = [-Math.sin(-this.angle)*5, -Math.cos(-this.angle)*5];
    // var norm = Asteroids.Util.norm(velocity);
    // velocity[0] = 5*velocity[0]/norm;
    // velocity[1] = 5*velocity[1]/norm;
    this.game.bullets.push(new Asteroids.Bullet({"pos": position, "vel": velocity, "game": this.game}));
  };

})();
