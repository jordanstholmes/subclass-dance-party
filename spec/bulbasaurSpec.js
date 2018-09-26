describe('bulbasaur', function() {

  var bulbasaur;

  beforeEach(function() {
    bulbasaur = new makeBulbasaurDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(bulbasaur.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a spin function', function() {
    
    expect(bulbasaur.spin).to.not.equal(undefined);
  });

  it('have a color property set to green', function() {
    expect(bulbasaur.color).to.equal('green');
  });

});