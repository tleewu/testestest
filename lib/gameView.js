(function() {
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx){
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function(){
    this.bindKeyHandlers();
    setInterval(this.game.checkCollisions.bind(this.game), 20);
    setInterval(this.game.moveObjects.bind(this.game), 20);
    setInterval(this.game.draw.bind(this.game, this.ctx), 20);
  };

  GameView.prototype.bindKeyHandlers = function() {
    var that = this;
    key('w', function(){ that.game.battleship.power([0, -0.5]) });
    key('a', function(){ that.game.battleship.power([-0.5, 0]) });
    key('s', function(){ that.game.battleship.power([0, 0.5]) });
    key('d', function(){ that.game.battleship.power([0.5, 0]) });
    key('space', function(){ that.game.battleship.fireBullet() });
  };

})();
