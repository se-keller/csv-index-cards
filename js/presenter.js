var deck
var currentCard
var progressbarCreated = false;

$(document).ready(function() {
    $("#button-load-csv").click(function() {
        $.ajax({
            type: "GET",
            url: $('#input-csv-url').val(),
            dataType: "text",
            success: function(data) {dataReceived(data)},
            error: function() {errorLoadingCsv()}
        }) 
    })
    $("#button-show-card-front").click(function() {showCurrentFront()})
    $("#button-show-card-back").click(function() {showCurrentBack()})
    $("#button-next").click(function() {next()})
    $("#button-shuffel-deck").click(function() {shuffelDeck()})
    $("#button-swap-deck").click(function() {swapDeck()})
});

//Algorithm found: http://stackoverflow.com/revisions/16732728/2
$(document).on('pagebeforeshow', '#card-front', function(){ 
    if(!progressbarCreated) {
        $('<input>').appendTo('#div-slider-progress').attr({'name':'slider','id':'slider-progress','data-highlight':'true','min':'0','max':'100','value':'50','type':'range'}).slider({
            create: function( event, ui ) {
                $(this).parent().find('input').hide();
                $(this).parent().find('input').css('margin-left','-9999px'); // Fix for some FF versions
                $(this).parent().find('.ui-slider-track').css('margin','0 3px 0 3px');
                $(this).parent().find('.ui-slider-handle').hide();
            }
        }).slider("refresh");    
    } 
    progressbarCreated = true     

});

function next() {
    currentCard = deck.getNextCard()
    showCurrentFront()
    $("#slider-progress").attr("max", deck.size())
    $("#slider-progress").val(deck.currentProgress())
    $("#slider-progress").slider("refresh");
}

function dataReceived(csv) {
    deck = new DeckUnmarshaller().fromCsv(csv)
    next()
}

function showCurrentFront() {
    $("#card-front-label").text(deck.getFrontLabel())
    $("#card-front-value").text(currentCard.getFront())
    $.mobile.changePage( "#card-front", { transition: "flip", changeHash: true });
}

function showCurrentBack() {
    $("#card-back-label").text(deck.getBackLabel())
    $("#card-back-value").text(currentCard.getBack())
    $.mobile.changePage( "#card-back", { transition: "flip", changeHash: false });
}

function shuffelDeck() {
    deck.shuffel()
    next()
}

function swapDeck() {
    deck.swap()
    showCurrentFront()
}

function errorLoadingCsv() {
    $( "#popup-error-loading-csv" ).popup("open")
}

