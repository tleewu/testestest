(function() {
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.vel = Asteroids.Util.randomVec(5);
    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.COLOR = "#ff0000";
  Asteroid.RADIUS = 30;

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.isCollidedWith = function(otherObject){
    if (otherObject.constructor === Asteroids.Battleship &&
      this.distance(otherObject) < (this.radius + otherObject.radius)) {
        otherObject.relocate();
    }
  };
})();
