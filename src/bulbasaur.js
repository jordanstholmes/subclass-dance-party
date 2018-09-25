var makeBulbasaurDancer = function(top, left, timeBetweenSteps) {
  // this = 
  this.$node = $('<img src="assets/bulbasaur.png" class="dancer bulbasaur">');
  makeDancer.apply(this, arguments);
  this.spin();
};

makeBulbasaurDancer.prototype = Object.create(makeDancer.prototype);
makeBulbasaurDancer.prototype.constructor = makeBulbasaurDancer;

makeBulbasaurDancer.prototype.spin = function() {
  var degree = 0; // a counter
  var thisElement = this.$node; // this = the new bulbasaur object 

  let rotate = function () { // defining rotate function
    thisElement.css({WebkitTransform: 'rotate(' + degree + 'deg)'}); //set rotation to 'degree' degrees

    setTimeout(function() { // after 10 miliseconds, run this function
      degree++; // increase the rotation clockwise
      rotate(); // recursively call rotate
    }, 10);

  };

  rotate(); // start the rotate recursion
};



// makeBulbasaurDancer.prototype.wiggle = function() {
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