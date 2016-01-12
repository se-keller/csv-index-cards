var deck
var progressBar
var progressBarMultipleChoice
var multipleChoice

$(document).ready(function() {
    $("#button-load-csv").click(loadCsv)
    $("#button-show-card-front").click(showCurrentFront)
    $("#button-show-card-back").click(showCurrentBack)
    $("#button-next").click(next)
    $("#button-shuffel-deck").click(shuffelDeck)
    $("#button-swap-deck").click(swapDeck)
    $("#button-shuffel-deck-multiple-choice").click(shuffelDeckMultipleChoice)
    $("#button-swap-deck-multiple-choice").click(swapDeckMultipleChoice)
    $("#button-answer1").click(function() {checkMultipleChoice($("#button-answer1"))})
    $("#button-answer2").click(function() {checkMultipleChoice($("#button-answer2"))})
    $("#button-answer3").click(function() {checkMultipleChoice($("#button-answer3"))})
    $("#button-answer4").click(function() {checkMultipleChoice($("#button-answer4"))})
    progressBar = new ProgressBar("#card-front", "#div-slider-progress", "slider-progress")
    progressBarMultipleChoice = new ProgressBar("#multiple-choice", "#div-slider-progress-multiple-choice", "slider-multiple-choice")
});


function loadCsv() {
    new DeckUnmarshaller().fromCsvUrl($('#input-csv-url').val(), dataReceived, errorLoadingCsv)
}

function dataReceived(data) {
    deck = data
    
    showCurrentFront()
    progressBar.max(deck.size())
    progressBar.val(progressVal())

    
    //showChoice()
    progressBarMultipleChoice.max(deck.size())
    progressBarMultipleChoice.val(progressVal())
}

function next() {
    deck.draw()
    showCurrentFront()
    progressBar.val(progressVal())
    
}

function showChoice() {
    multipleChoice = new MultipleChoice(deck)
    var choices = multipleChoice.choices();
    $("#button-answer1").text(choices.pop())
    $("#button-answer1").removeAttr('style')
    $("#button-answer2").text(choices.pop())
    $("#button-answer2").removeAttr('style')
    $("#button-answer3").text(choices.pop())
    $("#button-answer3").removeAttr('style')
    $("#button-answer4").text(choices.pop())
    $("#button-answer4").removeAttr('style')

    $("#choice-label").text(deck.frontHeader())
    $("#choice-question").text(deck.top().getFront())
    $.mobile.changePage( "#multiple-choice", { transition: "flip", changeHash: true });
}
function checkMultipleChoice(button) {
    var answer = button.text()
    if(multipleChoice.checkSameAnswer(answer)) {
        button.css("background", "#CCF6EC") 
        setTimeout(function() {
            deck.draw()
            showChoice()
            progressBarMultipleChoice.val(progressVal())    
        }, 500);
        
    } else {
        button.css("background", "#FFDCDC")
    }
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

function shuffelDeckMultipleChoice() {
    deck.shuffel()
    showChoice()
    progressBarMultipleChoice.val(progressVal())   
}

function swapDeck() {
    deck.swap()
    showCurrentFront()
}

function swapDeckMultipleChoice() {
    deck.swap()
    showChoice()
}

function progressVal() {
    return deck.currentProgress()+1
}

function errorLoadingCsv() {
    $( "#popup-error-loading-csv" ).popup("open")
}

