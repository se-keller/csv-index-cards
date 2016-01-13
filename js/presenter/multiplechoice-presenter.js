var progressBarMultipleChoice
var multipleChoice
var cardDeck


$(document).ready(function() {
    $("#button-shuffel-deck-multiple-choice").click(shuffelDeckMultipleChoice)
    $("#button-swap-deck-multiple-choice").click(swapDeckMultipleChoice)
    $("#button-answer1").click(function() {checkMultipleChoice($("#button-answer1"))})
    $("#button-answer2").click(function() {checkMultipleChoice($("#button-answer2"))})
    $("#button-answer3").click(function() {checkMultipleChoice($("#button-answer3"))})
    $("#button-answer4").click(function() {checkMultipleChoice($("#button-answer4"))})
    
});

function setCardDeck(data) {
    progressBarMultipleChoice = new ProgressBar("#multiple-choice", "#div-slider-progress-multiple-choice", "slider-multiple-choice")
    cardDeck = data
}

function showChoice() {
    multipleChoice = new MultipleChoice(cardDeck)
    var choices = multipleChoice.choices();
    $("#button-answer1").text(choices.pop())
    $("#button-answer1").removeAttr('style')
    $("#button-answer2").text(choices.pop())
    $("#button-answer2").removeAttr('style')
    $("#button-answer3").text(choices.pop())
    $("#button-answer3").removeAttr('style')
    $("#button-answer4").text(choices.pop())
    $("#button-answer4").removeAttr('style')

    $("#choice-label").text(cardDeck.frontHeader())
    $("#choice-question").text(cardDeck.top().getFront())
    $.mobile.changePage( "#multiple-choice", { transition: "flip", changeHash: true });

    progressBarMultipleChoice.max(cardDeck.size())
    progressBarMultipleChoice.val(progressVal())
}

function checkMultipleChoice(button) {
    var answer = button.text()
    if(multipleChoice.checkSameAnswer(answer)) {
        button.css("background", "#CCF6EC") 
        setTimeout(function() {
            cardDeck.draw()
            showChoice()
            progressBarMultipleChoice.val(progressVal())    
        }, 500);
        
    } else {
        button.css("background", "#FFDCDC")
    }
}

function shuffelDeckMultipleChoice() {
    cardDeck.shuffel()
    showChoice()  
}

function swapDeckMultipleChoice() {
    cardDeck.swap()
    showChoice()
}