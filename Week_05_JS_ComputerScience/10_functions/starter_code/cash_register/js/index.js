$(document).ready (function() {
	var total = 0;
	var formatCurrency = function(value) {
		val returnValue = value.toFixed(2);
		return '$' + returnValue;
	});	
	var submitHandle = function(event) {
		event.preventDefault();
		var newEntry = $("#newEntry").val();
		newEntry = parseFloat(newEntry);
		$("#entries").append('<tr><td></td><td>' + 
			formatCurrency(newEntry) + '</td></tr>');
		total += newEntry;
		$("#total").html(formatCurrency(total));
		$("#newEntry").val('');
	};	
	$('#entry').submit(submitHandle);
});