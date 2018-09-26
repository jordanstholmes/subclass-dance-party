var makeSquirtleDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="assets/squirtle-cool.png" class="dancer squirtle">');
  makeDancer.apply(this, arguments);
  this.jump();
};

makeSquirtleDancer.prototype = Object.create(makeDancer.prototype);
makeSquirtleDancer.prototype.constructor = makeSquirtleDancer;

makeSquirtleDancer.prototype.jump = function() {
  // var currentTop = this.$node.css("top"); // 300
  let node = this.$node; //This squirtle element
  let squirtle = this;

  let moveUp = function() {
    node.animate({ // node is the HTML squirtle, and we're animating it
      top: "-=100"  // we're subtracting 100 from the space above html squirtle
    }, 500, function(){
      moveDown(); 
    });
  };

  let moveDown = function () {
    node.animate({
      top: "+=100"
    }, 500, function() {
      moveUp();
    });
  };

  moveUp();
  // moveDown();
  // let moveDown = function() {};

  
};

// makeSquirtleDancer.prototype.wiggle = function() {
//   var degree = 0;
//   var direction = 1;
//   var thisElement = this.$node;

//   let rotate = function () {
//     thisElement.css({WebkitTransform: 'rotate(' + degree + 'deg)'});
//     setTimeout(function() {
//       if(degree >= 10) {
//         direction = -1;
//       } else if (degree <= -10) {
//         direction = 1;
//       }

//       degree+= direction;
//       rotate();
//     }, 10);
//   };

//   rotate();
// };
