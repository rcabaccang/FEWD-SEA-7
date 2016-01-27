$(document).ready(function() {
	var score = 0;
	var add5 = function() {
		score += 5;
		$("#result").html(score);
	}
	
	$("#add10").click(add5);
	var add10 = function() {
		score += 10;
		$("#result").html(score);
	}

	var sub-1 = function() {
		score += -1;
		$("#result").html(score);
	}
	
	$("#sub-1").click(sub-1);	


});