describe("ArrayShuffler", function() {

  var randomizer

  beforeEach(function() {
    randomizer = new Randomizer(42)    
  });

  it("shuffels array", function() {
    var shuffler = new ArrayShuffler(randomizer)
    var shuffledArray = shuffler.shuffel([1,2,3,4])

    expect(shuffledArray).toEqual([2,3,1,4]);
  });

});