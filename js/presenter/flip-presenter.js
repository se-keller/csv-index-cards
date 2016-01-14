var progressBar


$(document).ready(function() {
    $("#button-show-card-front").click(showCurrentFront)
    $("#button-show-card-back").click(showCurrentBack)
    $("#button-next").click(next)
    $("#button-shuffel-deck").click(shuffelDeck)
    $("#button-swap-deck").click(swapDeck)
    $("#button-show-multiple-choice").click(showChoice)
    progressBar = new ProgressBar("#card-front", "#div-slider-progress", "slider-progress")
});

function next() {
    deck.draw()
    showCurrentFront()
    progressBar.val(progressVal())
    
}

function showCurrentFront() {
    $("#card-front-label").text(deck.frontHeader())
    $("#card-front-value").text(deck.top().getFront())
    progressBar.max(deck.size())
    progressBar.val(progressVal())
}

function showCurrentBack() {
    $("#card-back-label").text(deck.backHeader())
    $("#card-back-value").text(deck.top().getBack())
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
