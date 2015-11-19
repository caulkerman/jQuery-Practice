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
	$("#h2").fadeOut(2000, function() {
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

})

$('.form_error').hide();
      $('#submitButton').click(function(){
           var password = $('.password').val();
           var email = $('.email').val();
           var phone = $('.phone').val();
           var confirmPassword = $('.confirmPassword').val();

            if(email == ''){
               $('.email').next().show();
               return false;
            }
            if(IsEmail(email) == false){//function caller here.
                $('#invalid_email').show();
                return false;
            }

            if(phone == ''){
                $('.phone').next().show();
                return false;
            }

            if(password == ''){
              $('.password').next().show();
              return false;
            }

            if(confirmPassword == ''){
                $('.confirmPassword').next().show();
                return false;
            }
           
            //ajax call php page
            // $.post("send.php", $("#contactform").serialize(),  function(response) {
            // $('#contactform').fadeOut('slow',function(){
            //     $('#success').html(response);
            //     $('#success').fadeIn('slow');
            //    });
            //  });
             return false;
          });
      // });
      
      function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
           return false;
        }else{
           return true;
        }
      }


});