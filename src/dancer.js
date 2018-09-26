// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // this.$node = $('<span></span>');
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  // this.$node = $('<img src="assets/charchar.png" class="dancer charmander">');
  
  this.setPosition(top, left);

  this.step(timeBetweenSteps);

  // return this
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

makeDancer.prototype.lineUp = function () {
  this.$node.animate({
    top: "600"
  }, 1000); 
};

makeDancer.prototype.clicked = function () {
  $(".background").css("background-color", this.color);
  $(".backgroundImage").fadeOut();
  $(".backgroundImage").fadeIn();
  $(".backgroundImage").fadeOut();
  $(".backgroundImage").fadeIn();
  $(this.kills).fadeOut(2000);
/*
 we want to remove the pokemon html elements that are weak to the element that was clicked.

*/

};
