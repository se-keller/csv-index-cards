describe("Deck", function() {
  var deck
  var card

  beforeEach(function() {
    deck = new Deck()
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
    deck.setLabels("Question", "Answer")

    expect(deck.getFrontLabel()).toEqual("Question")
    expect(deck.getBackLabel()).toEqual("Answer")
  });


});