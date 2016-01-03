describe("Deck", function() {
  var deck
  var card

  beforeEach(function() {
    deck = new Deck()
    deck.setLabels("Question", "Answer")
    card = new Card("question", "answer")
    deck.add(card)
  });

  it("can add card to draw card", function() {
    expect(deck.getNextCard()).toEqual(card)
  });

  it("can added multiple cards to draw card in added order", function() {
    var secondcard = new Card("question2", "answer2")
    
    deck.add(secondcard)
    deck.getNextCard()

    expect(deck.getNextCard()).toEqual(secondcard)
  });

  it("starts at the beginning after all cards are drawn", function() {
    deck.getNextCard()

    expect(deck.getNextCard()).toEqual(card)
  });

  it("can declare label for front a back of all cards", function() {
    expect(deck.getFrontLabel()).toEqual("Question")
    expect(deck.getBackLabel()).toEqual("Answer")
  });

  it("can calculate the number of cards in the deck", function() {
    deck.add(new Card("question2", "answer2"))
    expect(deck.size()).toEqual(2)
  });

  it("can swap the Question and Answer direction", function() {
    deck.swap()

    expect(deck.getFrontLabel()).toEqual("Answer")
    expect(deck.getBackLabel()).toEqual("Question")
    expect(deck.getNextCard().getFront()).toEqual("answer")
    expect(deck.getNextCard().getBack()).toEqual("question")
  });

  it("can calculate the number of cards already drawn", function() {
    deck.add(new Card("question2", "answer2"))
    deck.getNextCard()
    expect(deck.currentProgress()).toEqual(1)
  });

});