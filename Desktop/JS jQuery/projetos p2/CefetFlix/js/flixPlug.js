;(function($) {
	$.fn.cefetflix = function(option) {
		$.get(option.url).done(function(data) {
			console.log(data);
		});			
	} 
})(jQuery);