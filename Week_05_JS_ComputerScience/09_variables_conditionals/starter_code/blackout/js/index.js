$(document).ready(function() {
	var lightsOn = true;
	$("#light_switch").click(function() {
		$("body") .toggleClass("dark");	
	});
});
