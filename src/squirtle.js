var makeSquirtleDancer = function(top, left, timeBetweenSteps) {
  let squirtleClicked = this;
  this.$node = $('<img src="assets/squirtle-cool.png" class="dancer squirtle">');
  makeDancer.apply(this, arguments);
  this.color = 'blue';
  this.kills = ".charmander";
  this.jump();
  this.$node.click(function() {
    squirtleClicked.clicked();
  });
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
};
// makeSquirtleDancer.prototype.clicked = function () {
//   $(".background").css("background-color", "blue");
//   $(".backgroundImage").fadeOut();
//   $(".backgroundImage").fadeIn();
//   $(".backgroundImage").fadeOut();
//   $(".backgroundImage").fadeIn();
// };