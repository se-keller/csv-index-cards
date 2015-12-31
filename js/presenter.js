var g_values = []
var row = 1;
var flipped = false;

$(document).ready(function() {
    $("#button-load-csv").click(function() {
        $.ajax({
            type: "GET",
            url: $('#input-csv-url').val(),
            dataType: "text",
            success: function(data) {dataReceived(data)}
        }) 
    })
    $("#button-show-card-front").click(function() {showCurrentFront()})
    $("#button-show-card-back").click(function() {showCurrentBack()})
    $("#button-next").click(function() {next()})
});


function next() {
    if(row < g_values.length-1)
        row++;
    else
        row = 1
    showCurrentFront()
}

function dataReceived(csv) {
    g_values = splitCsv(csv)
    row = 1
    showCurrentFront()
}

function showCurrentFront() {
    $("#card-value-front").text(g_values[row][0])
    $("#card-front-label").text(g_values[0][0])
    $.mobile.changePage( "#card-front", { transition: "flip", changeHash: true });
}

function showCurrentBack() {
    $("#card-value-back").text(g_values[row][1])
    $("#card-back-label").text(g_values[0][1])
    $.mobile.changePage( "#card-back", { transition: "flip", changeHash: false });
}



