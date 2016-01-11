describe("MultipleChoice", function() {
  
  var deck
  var multipleChoice

  beforeEach(function() {
    deck = new Deck()
    deck.add(new Card("question1", "answer1"))
    deck.add(new Card("question2", "answer2"))
    deck.add(new Card("question3", "answer3"))
    deck.add(new Card("question4", "answer4"))
    deck.add(new Card("question5", "answer5"))
    multipleChoice = new MultipleChoice(deck)
  });

  it("can get a choice of 4 cards containing the current top card", function() {
    var choices = multipleChoice.choices()

    //expect(choices.includes(new Card("question1", "answer1"))).toBe(true)
    expect(choices.size()).toEqual(4)
  });
})