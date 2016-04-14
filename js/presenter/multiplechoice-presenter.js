var progressBarMultipleChoice
var multipleChoice


$(document).ready(function() {
    $("#button-show-pairs-from-multiple-choice").click(showPairs)
    $("#button-show-flip-from-multiple-choice").click(showCurrentFront)
    $("#button-shuffel-deck-multiple-choice").click(shuffelDeckMultipleChoice)
    $("#button-swap-deck-multiple-choice").click(swapDeckMultipleChoice)
    $("#button-answer1").click(function() {checkMultipleChoice($("#button-answer1"))})
    $("#button-answer2").click(function() {checkMultipleChoice($("#button-answer2"))})
    $("#button-answer3").click(function() {checkMultipleChoice($("#button-answer3"))})
    $("#button-answer4").click(function() {checkMultipleChoice($("#button-answer4"))})
    progressBarMultipleChoice = new ProgressBar("#multiple-choice", "#div-slider-progress-multiple-choice", "slider-multiple-choice")
});

function showChoice() {       
    multipleChoice = new MultipleChoice(deck)
    var choices = multipleChoice.choices();
    for(var i = 1; i<=4; i++) {
        var choice = choices.pop()
        if(isImageFileUrl(choice)) {
            $("#button-answer"+i).text("")
            $("#button-answer"+i).append('<img id="button-answer'+i+'-img" width="100%" src="'+choice+'"/>')
        } else {
            $("#button-answer"+i).empty()
            $("#button-answer"+i).text(choice)    
        }
        $("#button-answer"+i).removeAttr('style')
    }

    $("#choice-label").text(deck.frontHeader())
    setCardValue(deck.top().getFront(), "#choice-question", "#choice-question-img")

    setTimeout(function() {
        progressBarMultipleChoice.max(deck.size())
        progressBarMultipleChoice.val(progressVal()) 
    }, 1);
}

function checkMultipleChoice(button) {
    var answer = button.text()
    if(button.has("img").length > 0) {
        answer = button.find("img").attr("src")
    }
    if(multipleChoice.checkSameAnswer(answer)) {
        button.css("background", "#CCF6EC") 
        setTimeout(function() {
            deck.draw()
            showChoice() 
        }, 500);
        
    } else {
        button.css("background", "#FFDCDC")
    }
}

function shuffelDeckMultipleChoice() {
    deck.shuffel()
    showChoice()  
}

function swapDeckMultipleChoice() {
    deck.swap()
    showChoice()
}