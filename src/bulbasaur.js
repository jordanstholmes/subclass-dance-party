var makeBulbasaurDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="assets/bulbasaur.png" class="dancer charmander">');
  makeDancer.apply(this, arguments);
  this.wiggle();
};

makeBulbasaurDancer.prototype = Object.create(makeDancer.prototype);
makeBulbasaurDancer.prototype.constructor = makeBulbasaurDancer;

makeBulbasaurDancer.prototype.wiggle = function() {
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