// document ready
$(document).ready(function() {
	//select the select field, store as variable
	var $selectField = $("#city-type");
	// store all cities in an array
	var cities = ['austin', 'la', 'nyc', 'sf', 'sydney'];
	// loop through the array with forEach
	cities.forEach(function(city) {
		// create a new option element
		var $option = $("<option>");
		// add an HTML value to the option element
		// set the value attribute on the option element
		$option.html(city).val(city);
		// append the option element to the select field
		$selectField.append($option);
	});

	// bind select field event onChange()
	$ ("select").change(function() {
			 
		}


});
