describe('charmander', function() {

  var charmander;

  beforeEach(function() {
    charmander = new makeCharmanderDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(charmander.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a wiggle function', function() {
    
    expect(charmander.wiggle).to.not.equal(undefined);
  });

  it('have a color property set to red', function() {
    expect(charmander.color).to.equal('red');
  });

});
