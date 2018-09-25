// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  
  this.step(timeBetweenSteps);

  this.setPosition(top, left);
};

makeDancer.prototype.step = function (timeBetweenSteps) {
  
  setTimeout(this.step, timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {

  let styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
