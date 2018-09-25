var makeSquirtleDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="assets/squirtle-cool.png" class="dancer squirtle">');
  makeDancer.apply(this, arguments);
  this.wiggle();
};

makeSquirtleDancer.prototype = Object.create(makeDancer.prototype);
makeSquirtleDancer.prototype.constructor = makeSquirtleDancer;

makeSquirtleDancer.prototype.wiggle = function() {
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