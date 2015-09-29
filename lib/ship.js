(function() {
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Battleship = Asteroids.Battleship = function(options) {
    options.color = Battleship.COLOR;
    options.radius = Battleship.RADIUS;
    options.vel = [0,0];
    Asteroids.MovingObject.call(this, options);
  };

  Battleship.COLOR = "green";
  Battleship.RADIUS = 5;

  Asteroids.Util.inherits(Asteroids.Battleship, Asteroids.MovingObject);

  Battleship.prototype.relocate = function(){
    this.pos = this.game.randomPosition().pos;
    this.vel = [0,0];
  };

  Battleship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Battleship.prototype.fireBullet = function(){
    var position = this.pos.slice();
    var velocity = this.vel.slice();
    var norm = Asteroids.Util.norm(velocity);
    velocity[0] = 5*velocity[0]/norm;
    velocity[1] = 5*velocity[1]/norm;
    this.game.bullets.push(new Asteroids.Bullet({"pos": position, "vel": velocity, "game": this.game}));
  };

})();
