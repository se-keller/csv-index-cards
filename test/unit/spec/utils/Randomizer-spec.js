describe("Randomizer", function() {

  var randomizer

  it("creates same sequence of random numbers with same seed ", function() {
    var randomizer1 = new Randomizer(42)
    var randomizer2 = new Randomizer(42)
    var randomSequence1 = [] 
    var randomSequence2 = [] 
    for (var i = 0; i < 5; i++) {
      randomSequence1.push(randomizer1.random())
      randomSequence2.push(randomizer2.random())
    }

    expect(randomSequence1).toEqual(randomSequence2);
  });

});