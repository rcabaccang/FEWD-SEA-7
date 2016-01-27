$(document).ready(function() {
	var a;
	var b;
		var compareHandle = function() {
		 a = parseInt($("#a").val());
		 b = parseInt($("#b").val());
		if (a>b) {
			console.log("a is the greatest!");
		} else if (b>a) {
			console.log("b is the greatest");
		} else {
			console.log("everything is equal");
		}	
			
	};
	
	$("#submit").click(compareHandle);
});		
