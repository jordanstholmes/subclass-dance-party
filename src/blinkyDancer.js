var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // return this
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // var dancerStepFunc = makeDancer.prototype.step;
  // dancerStepFunc.call(this);
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


  
  
  

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};



