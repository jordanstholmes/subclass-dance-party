// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<img src="assets/charchar.png" class="dancer">');
  
  
  this.setPosition(top, left);

  this.step(timeBetweenSteps);
};

makeDancer.prototype.step = function () {
  
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {

  let styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings); 
};
