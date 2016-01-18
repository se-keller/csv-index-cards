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
    if(front.match(/\.gif/)) {
        $("#card-front-value").removeAttr('style')
        $("#card-front-img").removeAttr('style')
        $("#card-front-value").css("display", "none")
        $("#card-front-img").attr("src", front)
    } else {
        $("#card-front-value").removeAttr('style')
        $("#card-front-img").removeAttr('style')
        $("#card-front-img").css("display", "none")
        $("#card-front-value").text(front)
    }
    progressBar.max(deck.size())
    progressBar.val(progressVal())
}

function showCurrentBack() {
    $("#card-back-label").text(deck.backHeader())
    var back = deck.top().getBack()
    if(back.match(/\.gif/)) {
        $("#card-back-value").removeAttr('style')
        $("#card-back-img").removeAttr('style')
        $("#card-back-value").css("display", "none")
        $("#card-back-img").attr("src", back)
    } else {
        $("#card-back-value").removeAttr('style')
        $("#card-back-img").removeAttr('style')
        $("#card-back-img").css("display", "none")
        $("#card-back-value").text(back)
    }
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
