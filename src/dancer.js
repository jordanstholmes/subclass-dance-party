// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  /*
  1: this = Object.create(makeDancer.prototype)
  */
  
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<img src="assets/charchar.png" class="dancer">');
  
  
  this.setPosition(top, left);

  this.step(timeBetweenSteps);

  /*
  3:
  */
};

makeDancer.prototype.step = function (timeBetweenSteps) {
  
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {

  let styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings); 
};

var newDancer = Object.create(makeDancer); // {}.__proto__
var amy = new makeDancer(40, 70, 4);
// var bob = new makeDancer(6);
// var ralph = new makeDancer(10);
