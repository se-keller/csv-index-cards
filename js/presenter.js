var deck
var progressBar

$(document).ready(function() {
    $("#button-load-csv").click(loadCsv)
    $("#button-show-card-front").click(showCurrentFront)
    $("#button-show-card-back").click(showCurrentBack)
    $("#button-next").click(next)
    $("#button-shuffel-deck").click(shuffelDeck)
    $("#button-swap-deck").click(swapDeck)
    progressBar = new ProgressBar("#card-front", "#div-slider-progress", "slider-progress")
});


function loadCsv() {
    new DeckUnmarshaller().fromCsvUrl($('#input-csv-url').val(), dataReceived, errorLoadingCsv)
}

function dataReceived(data) {
    deck = data
    showCurrentFront()
    progressBar.max(deck.size())
    progressBar.val(progressVal())
}

function next() {
    deck.draw()
    showCurrentFront()
    progressBar.val(progressVal())
    
}

function showCurrentFront() {
    $("#card-front-label").text(deck.frontHeader())
    $("#card-front-value").text(deck.top().getFront())
    $.mobile.changePage( "#card-front", { transition: "flip", changeHash: true });
}

function showCurrentBack() {
    $("#card-back-label").text(deck.backHeader())
    $("#card-back-value").text(deck.top().getBack())
    $.mobile.changePage( "#card-back", { transition: "flip", changeHash: false });
}

function shuffelDeck() {
    deck.shuffel()
    showCurrentFront()
    progressBar.val(progressVal())
}

function swapDeck() {
    deck.swap()
    showCurrentFront()
}

function progressVal() {
    return deck.currentProgress()+1
}

function errorLoadingCsv() {
    $( "#popup-error-loading-csv" ).popup("open")
}

