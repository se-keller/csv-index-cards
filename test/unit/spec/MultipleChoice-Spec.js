describe("MultipleChoice", function() {
  
  var deck
  var topCard
  var secondCard
  var multipleChoice

  beforeEach(function() {
    deck = new Deck()
    topCard = new Card("question1", "answer1");
    secondCard = new Card("question2", "answer2")
    deck.add(topCard)
    deck.add(secondCard)
    deck.add(new Card("question3", "answer3"))
    deck.add(new Card("question4", "answer4"))
    deck.add(new Card("question5", "answer5"))
    multipleChoice = new MultipleChoice(deck)
  });

  it("can get a choice of 4 cards containing the current top card", function() {
    var choices = multipleChoice.choices()

    expect(choices.includes(topCard)).toEqual(true)
    expect(choices.size()).toEqual(4)
  });

  it("can get a choice of 4 cards after a draw containing the new current top card (second card)", function() {
    deck.draw()

    var choices = multipleChoice.choices()
    
    expect(choices.includes(secondCard)).toEqual(true)
    expect(choices.size()).toEqual(4)
  });
})