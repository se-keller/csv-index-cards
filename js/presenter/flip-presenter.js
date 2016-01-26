var progressBar


$(document).ready(function() {
    $("#button-show-card-front").click(showCurrentFront)
    $("#button-show-card-back").click(showCurrentBack)
    $("#button-next").click(next)
    $("#button-shuffel-deck").click(shuffelDeck)
    $("#button-swap-deck").click(swapDeck)
    $("#button-show-multiple-choice-from-flip").click(showChoice)
    $("#button-show-pairs-from-flip").click(showPairs)
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
    if(isImageFileUrl(value)) {
        $(valueSelector).css("display", "none")
        $(imgSelector).attr("src", value)
    } else {    
        $(imgSelector).css("display", "none")
        $(valueSelector).text(value)
    }
}

function isImageFileUrl(value) {
    return new RegExp('.+(\.png$)|.+(\.gif$)|.+(\.jpg$)|.+(\.jpeg$)|.+(\.bmp$)', 'i').exec(value)
}
