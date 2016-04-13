var ProgressBar = function(parentSelector, targetSelector, progressBarId) {
	var progressBarSelector = "#" + progressBarId
	var absolutValueId = progressBarId + "-absolut"
	this.progressbarCreated = false

	//Algorithm found: http://stackoverflow.com/revisions/16732728/2
	$(document).on('pagebeforeshow', parentSelector, function(){ 
	    if(!this.progressbarCreated) {
	        $('<input>').appendTo(targetSelector).attr({'name':'slider','id':progressBarId,'data-highlight':'true','min':'0','max':'100','value':'50','type':'range'}).slider({
	            create: function( event, ui ) {
	                $(this).parent().find('input').hide();
	                $(this).parent().find('input').css('margin-left','-9999px'); // Fix for some FF versions
	                $(this).parent().find('.ui-slider-track').css('margin','0 3px 0 3px');
	                $(this).parent().find('.ui-slider-handle').hide();
	            }
	        }).slider("refresh")   
	        $(targetSelector).append('<span id="' + absolutValueId +'"></span>')
	    } 
	    this.progressbarCreated = true     	    
	});	

	this.max = function(max) {
    	$(progressBarSelector).attr("max", max)
    	$(progressBarSelector).slider("refresh")
	}

	this.val = function(val) {
	    $(progressBarSelector).val(val)
	    $("#" + absolutValueId).text(val+"/"+$(progressBarSelector).attr("max"))
	    $(progressBarSelector).slider("refresh");
	    
	}

}

