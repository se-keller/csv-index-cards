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
    
    var hasImgUrl = false
    for(var i = 1 ; i<=NR_CHOICES*2; i++) {
        var choice = choices.pop()
        if(isImageFileUrl(choice)) {
            hasImgUrl = true
            $("#button-pair-value"+i).text("")
            $("#button-pair-value"+i).append('<img class="pair-img" height="70em" src="'+choice+'"/>')
        } else {
            $("#button-pair-value"+i).empty()
            $("#button-pair-value"+i).text(choice)
        }

        $("#button-pair-value" + i).removeAttr('style')
        $("#button-pair-value" + i).removeClass('ui-disabled')
    }
    if(hasImgUrl)
        $('#pairs-grid').find('a').height($('.pair-img').height());

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
        var first = buttonChoice1.text()
        if(buttonChoice1.has("img").length > 0) {
            first = buttonChoice1.find("img").attr("src")
        }
        var second = buttonChoice2.text()
        if(buttonChoice2.has("img").length > 0) {
            second = buttonChoice2.find("img").attr("src")
        }
        if(pairs.checkPair(first, second)) {
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
    var hight1 = buttonChoice1.height()
    var hight2 = buttonChoice2.height()
    buttonChoice1.removeAttr('style')
    buttonChoice2.removeAttr('style')
    buttonChoice1.height(hight1)
    buttonChoice2.height(hight2)
    buttonChoice1 = undefined
    buttonChoice2 = undefined
}