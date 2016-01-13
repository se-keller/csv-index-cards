describe("Deck", function() {
  var deck
  var card

  beforeEach(function() {
    deck = new Deck()
    deck.setHeaders("Question Header", "Answer Header")
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
    expect(deck.frontHeader()).toEqual("Question Header")
    expect(deck.backHeader()).toEqual("Answer Header")
  });

  it("can calculate the number of cards in the deck", function() {
    deck.add(new Card("question2", "answer2"))
    expect(deck.size()).toEqual(2)
  });

  it("can swap the whole deck and front and back label", function() {
    deck.swap()

    expect(deck.frontHeader()).toEqual("Answer Header")
    expect(deck.backHeader()).toEqual("Question Header")
    expect(deck.top().getFront()).toEqual("answer")
    expect(deck.top().getBack()).toEqual("question")
  });

  it("can calculate the number of cards already drawn", function() {
    deck.add(new Card("question2", "answer2"))
    deck.draw()
    expect(deck.currentProgress()).toEqual(1)
  });

  it("can remove top card of deck", function() {
    var card2 = new Card("question2", "answer2")
    deck.add(card2)
    deck.remove()
    expect(deck.top()).toEqual(card2)
    expect(deck.currentProgress()).toEqual(0)
  });

  it("can clone itself so clone can be changed without changing the original deck", function() {
    var clone = deck.clone()
    clone.remove()
    expect(deck.top()).toEqual(card)
    expect(deck.size()).toEqual(1)
    expect(clone.size()).toEqual(0)
  });

});