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
	$("#h2").fadeOut(1000, function() {
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

// var string = "Regex is Great";
// var regex = /great/i;
// var result = string.match(regex);
// alert(result);


/////////////////FORM VALIDATION////////////////////

$("#validationForm").submit(function(event) {
	event.preventDefault();
// 	alert("This is a test for the validationForm")




      // $('#submitButton').click(function(){
           var password = $('.password').val();
           var email = $('.email').val();
           var phone = $('.phone').val();
           var confirmPassword = $('.confirmPassword').val();

            if (email == '') {
            	$(".errorMessages1").html("<p>" + "Please enter your email" + "</p>");
            }

            if(IsEmail(email) == false){//function caller here.
                $(".errorMessages1").html("<p>" + "Please enter a valid email" + "</p>");
            }

            if(phone == ''){
                $(".errorMessages2").html("<p>" + "Please enter your phone number" + "</p>");
            }

            if(password == ''){
              $(".errorMessages3").html("<p>" + "Please enter your password" + "</p>");
            }

            if(confirmPassword == ''){
                $(".errorMessages4").html("<p>" + "Please confirm your password" + "</p>");
            }

            if (confirmPassword != "" && confirmPassword != password) {
            	$(".errorMessages5").html("<p>" + "Uh Oh! Your passwords don't match" + "</p>");
            }
           
            //ajax call php page
            // $.post("send.php", $("#contactform").serialize(),  function(response) {
            // $('#contactform').fadeOut('slow',function(){
            //     $('#success').html(response);
            //     $('#success').fadeIn('slow');
            //    });*/
            //  });
             // return false;
});
      
      
function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
           return false;
        }else{
           return true;
    }
}
///////////jQuery UI //////////////////
$("#draggableSquare").draggable();

$("#resizable").resizable().draggable();

 $("#targetDiv").droppable({
 	drop: function(ui, event) {
 		$("#targetDiv").css("background-color", "red");
 	}
}).draggable().resizable();

$("#accordion").accordion();

$("ul").sortable();

$("tr:nth-child(odd)").addClass("alt");
$('td:contains(Henry)').parent().children().addClass('highlight');

});