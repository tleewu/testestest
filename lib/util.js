(function(){
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};

  Util.inherits = function(ChildClass, ParentClass){
    var Surrogate = function() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomVec = function(length) {
    return [length*(2*Math.random()-1), length*(2*Math.random()-1)];
  };

  Util.norm = function(vel) {
    return Math.sqrt(
      Math.pow(vel[0],2) +
      Math.pow(vel[1],2)
    );
  };

})();
