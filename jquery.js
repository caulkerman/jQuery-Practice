$(document).ready(function() {


$("#circle").click(function() {
	alert("Circle Clicked");
});


$("#circle").mouseenter(function() {
	$(this).css({
		width: "100px",
		backgroundColor: "green"
	});
});


$(".square").on("click", function() {
	alert("Square Clicked!");
});


$(".blueSquare").on("click", function() {
	$(".blueSquareP").html("I Love Nisha");
});


$(".blueSquare").on("dblclick", function() {
	$(".blueSquareP").html("I Love pizza");
})


$(".blueSquare").mouseenter(function() {
	$(this).css("background-color", "purple");
	$("#circle").css("background-color", "blue");
});


$(".blueSquare").mouseleave(function() {
	$(this).css("background-color", "blue");
	$("#circle").css({
		width: "400px"
	});
});


$("p").click(function() {
	$(this).fadeOut();
});


$("#textFadeOut").click(function() {
	$("h2").fadeOut(2000, function() {
		alert("FadeOut Complete");
	});
	$(".square").css("background-color", "black")
})


$("#textFadeIn").click(function() {
	$("h2").fadeIn(1000);
	$(".square").css("background-color", "red");
});


$("#circle2").click(function() {
	$(this).animate({
		width: "200px",
		height: "200px",
		borderRadius: "100px",
		}, 800);
	$(this).css({
		backgroundColor: "tan"
	})
})

var string = "Regex is Great";
var regex = /great/i;
var result = string.match(regex);
alert(result);


});