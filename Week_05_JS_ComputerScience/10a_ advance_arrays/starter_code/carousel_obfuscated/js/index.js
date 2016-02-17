$(document).ready(function(){

	var choiceIndex = 0;
	
	var choices = [{
		image: "food1.jpg",
		total:0
},	
{
	image: "food2.jpg",
	total: 0
},
{	
	image: "food3.jpg",
	total: 0
},
{	
	image: "food4.jpg",
	total: 0
},
{	
	image: "food5.jpg",
	total: 0
},
{
	image: "food6.jpg",
	total: 0
},
{
	mage: "food7.jpg",
	total: 0
},
{
	image: "food8.jpg",
	total: 0
}
];

$("#skip-button").click(function(e) {
	console.log("skip-button clicked");
	if(choiceIndex < choices.length - 1) {
		choiceIndex += 1;
		updatePage();
	}
});


$("#back-button").click(function(e) {
	console.log("back-button clicked")
	if(choiceIndex> 0) {
		choiceIndex -= 1;
		updatePage();
	}
});	
	
	$("#your-vote").change(
		function onChange() {
		var value = $("#your-vote").val()
			console.log (value);
			
		}
	);


	var updatePage = function() {
		$("#image-to-vote-on").attr("src","images/" + choices[choiceIndex].image);
		$("#your-vote").val(choices[choiceIndex].total);
	}
});
























	

















