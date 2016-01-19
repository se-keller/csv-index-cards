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
    var front = deck.top().getFront()
    setCardValue(front, "#card-front-value", "#card-front-img")
    progressBar.max(deck.size())
    progressBar.val(progressVal())
}

function showCurrentBack() {
    $("#card-back-label").text(deck.backHeader())
    var back = deck.top().getBack()
    setCardValue(back, "#card-back-value", "#card-back-img")
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

function setCardValue(value, valueSelector, imgSelector) {
    $(valueSelector).removeAttr('style')
    $(imgSelector).removeAttr('style')
    if(value.match(/\.gif/)) {
        $(valueSelector).css("display", "none")
        $(imgSelector).attr("src", value)
    } else {    
        $(imgSelector).css("display", "none")
        $(valueSelector).text(value)
    }
}
