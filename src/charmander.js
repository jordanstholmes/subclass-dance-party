var makeCharmanderDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="assets/charchar.png" class="dancer charmander">');
  this.$node.click(function() {
  });
  makeDancer.apply(this, arguments);
  this.wiggle();
};

makeCharmanderDancer.prototype = Object.create(makeDancer.prototype);
makeCharmanderDancer.prototype.constructor = makeCharmanderDancer;

makeCharmanderDancer.prototype.wiggle = function() {
  var degree = 0;
  var direction = 1;
  var thisElement = this.$node;

  let rotate = function () {
    thisElement.css({WebkitTransform: 'rotate(' + degree + 'deg)'});
    setTimeout(function() {
      if(degree >= 10) {
        direction = -1;
      } else if (degree <= -10) {
        direction = 1;
      }

      degree+= direction;
      rotate();
    }, 10);
  };

  rotate();
};

/*
var degree = 0;
  var direction = 1;
  var thisElement = this.$node;

  let rotate = function () {
    thisElement.css({WebkitTransform: 'rotate(' + degree + 'deg)'});
    setTimeout(function() {
      if(degree >= 10) {
        direction = -1;
      } else if (degree <= -10) {
        direction = 1;
      }

      degree+= direction;
      rotate();
    }, 5);
  };

  rotate();

*/