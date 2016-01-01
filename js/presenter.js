var deck
var currentCard

$(document).ready(function() {
    $("#button-load-csv").click(function() {
        $.ajax({
            type: "GET",
            url: $('#input-csv-url').val(),
            dataType: "text",
            success: function(data) {dataReceived(data)},
            error: function() {errorLoadingCsv()}
        }) 
    })
    $("#button-show-card-front").click(function() {showCurrentFront()})
    $("#button-show-card-back").click(function() {showCurrentBack()})
    $("#button-next").click(function() {next()})
    $("#button-shuffel-deck").click(function() {shuffelDeck()})
    $("#button-swap-deck").click(function() {swapDeck()})
});


function next() {
    currentCard = deck.getNextCard()
    showCurrentFront()
}

function dataReceived(csv) {
    deck = new DeckUnmarshaller().fromCsv(csv)
    next()
}

function showCurrentFront() {
    $("#card-front-label").text(deck.getFrontLabel())
    $("#card-front-value").text(currentCard.getFront())
    $.mobile.changePage( "#card-front", { transition: "flip", changeHash: true });
}

function showCurrentBack() {
    $("#card-back-label").text(deck.getBackLabel())
    $("#card-back-value").text(currentCard.getBack())
    $.mobile.changePage( "#card-back", { transition: "flip", changeHash: false });
}

function shuffelDeck() {
    deck.shuffel()
    next()
}

function swapDeck() {
    deck.swap()
    showCurrentFront()
}

function errorLoadingCsv() {
    $( "#popup-error-loading-csv" ).popup("open")
}

