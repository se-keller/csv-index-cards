var pairs
var buttonChoice1
var buttonChoice2
var NR_CHOICES = 5
var foundPairs

$(document).ready(function() {
    $("#button-show-flip-from-pairs").click(showCurrentFront)
    $("#button-show-multiple-choice-from-pairs").click(showChoice)
    $("#button-pair-value1").click(function() {checkPair($("#button-pair-value1"))})
    $("#button-pair-value2").click(function() {checkPair($("#button-pair-value2"))})
    $("#button-pair-value3").click(function() {checkPair($("#button-pair-value3"))})
    $("#button-pair-value4").click(function() {checkPair($("#button-pair-value4"))})
    $("#button-pair-value5").click(function() {checkPair($("#button-pair-value5"))})
    $("#button-pair-value6").click(function() {checkPair($("#button-pair-value6"))})
    $("#button-pair-value7").click(function() {checkPair($("#button-pair-value7"))})
    $("#button-pair-value8").click(function() {checkPair($("#button-pair-value8"))})
    $("#button-pair-value9").click(function() {checkPair($("#button-pair-value9"))})
    $("#button-pair-value10").click(function() {checkPair($("#button-pair-value10"))})
});

function showPairs() {       
    pairs = new Pairs(deck)
    var choices = pairs.choices();
    foundPairs = 0;
    
    for(var i = 1 ; i<=NR_CHOICES*2; i++) {
        $("#button-pair-value" + i).text(choices.pop())
        $("#button-pair-value" + i).removeAttr('style')
        $("#button-pair-value" + i).removeClass('ui-disabled')
    }
    
    $("#pair-label").text(deck.frontHeader() + ", " + deck.backHeader())

}

function checkPair(button) {
    if(buttonChoice1 === undefined) {
        buttonChoice1 = button
        buttonChoice1.css("background", "#ADD8E6")
    } else if(buttonChoice2 === undefined) {
            buttonChoice2 = button   
    }

    if(buttonChoice1.is(buttonChoice2)) {
            resetSelectedChoices()
    }
         
    if(buttonChoice1 !== undefined && buttonChoice2 !== undefined) {
        if(pairs.checkPair(buttonChoice1.text(), buttonChoice2.text())) {
            pairIsFound()
        } else {
            noPairIsFound()
        } 
    }
}

function pairIsFound() {
    buttonChoice1.css("background", "#CCF6EC") 
    buttonChoice2.css("background", "#CCF6EC") 
    setTimeout(function() {                
        buttonChoice1.addClass("ui-disabled")
        buttonChoice2.addClass("ui-disabled")
        resetSelectedChoices()
        foundPairs++
        if(foundPairs == NR_CHOICES)
            showPairs()
    }, 500);
}

function noPairIsFound() {
    buttonChoice1.css("background", "#FFDCDC") 
    buttonChoice2.css("background", "#FFDCDC") 
    setTimeout(function() {
        resetSelectedChoices()
    }, 500);
}

function resetSelectedChoices() {
    buttonChoice1.removeAttr('style')
    buttonChoice2.removeAttr('style')
    buttonChoice1 = undefined
    buttonChoice2 = undefined
}