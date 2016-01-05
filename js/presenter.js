var deck
var progressbarCreated = false;

$(document).ready(function() {
    $("#button-load-csv").click(loadCsv)
    $("#button-show-card-front").click(showCurrentFront)
    $("#button-show-card-back").click(showCurrentBack)
    $("#button-next").click(next)
    $("#button-shuffel-deck").click(shuffelDeck)
    $("#button-swap-deck").click(swapDeck)
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

function loadCsv() {
    new DeckUnmarshaller().fromCsvUrl($('#input-csv-url').val(), dataReceived, errorLoadingCsv)
}

function dataReceived(data) {
    deck = data
    next()
}

function next() {
    deck.draw()
    showCurrentFront()
    $("#slider-progress").attr("max", deck.size())
    $("#slider-progress").val(deck.currentProgress())
    $("#slider-progress").slider("refresh");
}

function showCurrentFront() {
    $("#card-front-label").text(deck.getFrontLabel())
    $("#card-front-value").text(deck.top().getFront())
    $.mobile.changePage( "#card-front", { transition: "flip", changeHash: true });
}

function showCurrentBack() {
    $("#card-back-label").text(deck.getBackLabel())
    $("#card-back-value").text(deck.top().getBack())
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

