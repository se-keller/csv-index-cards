describe("Deck", function() {
  var deck
  var card

  beforeEach(function() {
    deck = new Deck()
    deck.setLabels("Question", "Answer")
    card = new Card("question", "answer")
    deck.add(card)
  });

  it("can peek at the top card in the deck", function() {
    expect(deck.top()).toEqual(card)
  });


  it("can add multiple cards to draw card in added order", function() {
    var secondcard = new Card("question2", "answer2")
    
    deck.add(secondcard)
    deck.draw()

    expect(deck.top()).toEqual(secondcard)
  });


  it("starts at the beginning after all cards are drawn", function() {
    deck.draw()

    expect(deck.top()).toEqual(card)
  });

  it("can define label for front a back of all cards", function() {
    expect(deck.getFrontLabel()).toEqual("Question")
    expect(deck.getBackLabel()).toEqual("Answer")
  });

  it("can calculate the number of cards in the deck", function() {
    deck.add(new Card("question2", "answer2"))
    expect(deck.size()).toEqual(2)
  });

  it("can swap the whole deck and front and back label", function() {
    deck.swap()

    expect(deck.getFrontLabel()).toEqual("Answer")
    expect(deck.getBackLabel()).toEqual("Question")
    expect(deck.top().getFront()).toEqual("answer")
    expect(deck.top().getBack()).toEqual("question")
  });

  it("can calculate the number of cards already drawn", function() {
    deck.add(new Card("question2", "answer2"))
    deck.draw()
    expect(deck.currentProgress()).toEqual(1)
  });

});