// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeDancer.prototype)
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  // this.$node = $('<img src="assets/charchar.png" class="dancer charmander">');
  
  this.setPosition(top, left);

  this.step(timeBetweenSteps);

  // return this
};

makeDancer.prototype.step = function (timeBetweenSteps) {
  
  // setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {

  let styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings); 
};

makeDancer.prototype.lineUp = function () {
  this.$node.animate({
    top: "600"
  }, 1000); 
};
