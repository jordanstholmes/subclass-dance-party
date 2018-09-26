describe('squirtle', function() {

  var squirtle;

  beforeEach(function() {
    squirtle = new makeSquirtleDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(squirtle.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a wiggle function', function() {
    
    expect(squirtle.jump).to.not.equal(undefined);
  });

  it('have a color property set to blue', function() {
    expect(squirtle.color).to.equal('blue');
  });

});