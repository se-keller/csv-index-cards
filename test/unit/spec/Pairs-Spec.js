describe("Pairs", function() {
  
  var pairs
  var choices

  beforeEach(function() {
    var deck = new Deck()
    deck.add(new Card("question1", "answer1"))
    deck.add(new Card("question2", "answer2"))
    deck.add(new Card("question3", "answer3"))
    deck.add(new Card("question4", "answer4"))
    deck.add(new Card("question5", "answer5"))
    pairs = new Pairs(deck)
    choices = pairs.choices()
  });

  it("can get a random choice of 5 card answers and 5 card questions", function() {
    expect(choices.includes("question1")).toEqual(true)
    expect(choices.includes("answer1")).toEqual(true)
    expect(choices.includes("question5")).toEqual(true)
    expect(choices.includes("answer5")).toEqual(true)
    expect(choices.length).toEqual(10)
  });

  it("can check if two values are a question and answer pair", function() {
    expect(pairs.checkPair("question1", "answer1")).toEqual(true)
    expect(pairs.checkPair("answer1", "question1")).toEqual(true)
  }); 

  it("can check if two values are not a question and answer pair", function() {
    expect(pairs.checkPair("question1", "answer2")).toEqual(false)
  }); 

})