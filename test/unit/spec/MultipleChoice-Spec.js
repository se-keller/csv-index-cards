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

  it("can get a choice of 4 answers containing the current top card answer", function() {
    var choices = multipleChoice.choices()

    expect(choices.includes(topCard.getBack())).toEqual(true)
    expect(choices.length).toEqual(4)
  });

  it("can get a choice of 4 answers after a draw containing the new current top card answer (second card)", function() {
    deck.draw()

    var choices = multipleChoice.choices()
    
    expect(choices.includes(secondCard.getBack())).toEqual(true)
    expect(choices.length).toEqual(4)
  });

  it("can check if a answer has the same answer as the top card of the deck", function() {
    expect(multipleChoice.checkSameAnswer(topCard.getBack())).toEqual(true)
    expect(multipleChoice.checkSameAnswer(secondCard.getBack())).toEqual(false)
  });  

})