var makeCharmanderDancer = function(top, left, timeBetweenSteps) {
  let charmanderClicked = this;
  this.$node = $('<img src="assets/charchar.png" class="dancer charmander">');
  makeDancer.apply(this, arguments);
  this.color = 'red';
  this.kills = '.bulbasaur';
  this.wiggle();
  this.$node.click(function() {
    charmanderClicked.clicked();
  });
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


// makeCharmanderDancer.prototype.clicked = function () {
//   $(".background").css("background-color", "red");
//   $(".background").css("background-color", this.color);
//   $(".backgroundImage").fadeOut();
//   $(".backgroundImage").fadeIn();
//   $(".backgroundImage").fadeOut();
//   $(".backgroundImage").fadeIn();
// };

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