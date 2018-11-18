$(document).ready(function(){
	
	var validFirst = false;
	var validLast = false;
	var validAddress = false;
	var validPassword = false;
	var validBirthday = false;
	var validEmail = false;
	
	$("form").submit(function(e){

		
     var name = $("[data-name=name]").val();
	 var last = $("[data-last=last]").val();
	 var address = $("[data-address=address]").val();
	 var password = $("#password").val();
	 var birthday = $("#birthday").val();
	 var email = $("#email").val();
		
	 var empty_script = (/^\s+|\s+$/gi, '');	
	 var ta = /(та)/gi;
	 var pass = /\w{6, }/gi;
		
		if (name.match(ta)) {
			$("#first_name").addClass("border");
			$(".text").text("Видаліть 'та'");
			}
			
		else if (name == empty_script) {
			$("#first_name").addClass("border");
			$(".text").text("Заповніть поле");
		}
		
		else {
			validFirst = true;
			$("#first_name").removeClass("border");
			$(".text").text("");
			
		}
		
		if (last.match(ta)) {
			$("#last_name").addClass("border");
		    $(".text_2").text("Видаліть 'та'");
		}
		
		else if (last == empty_script) {
			$("#last_name").addClass("border");
			$(".text_2").text("Заповніть поле");
		}
		
		else {
			validLast = true;
			$("#last_name").removeClass("border");
			$(".text_2").text("");
		}
		
		if (address.match(ta)) {
			$("#address").addClass("border");
		    $(".text_6").text("Видаліть 'та'");
		}
		
		else if (address == empty_script){
			$("#address").addClass("border");
			$(".text_6").text("Заповніть поле");
		}
		
		else {
			validAddress = true;
			$("#address").removeClass("border");
		    $(".text_6").text("");
		}
		
		if (password == empty_script){
			$("#password").addClass("border");
			$(".text_5").text("Заповніть поле");
		}
		
		else if (password.length > 5) {
			validPassword = true;
			$("#password").removeClass("border");
			$(".text_5").text("");
			validate = true;
		}
		
		else  {
			$("#password").addClass("border");
			$(".text_5").text("Пароль повинен містити більше 5-ти символів");
		}
		
		if (birthday == empty_script){
			$("#birthday").addClass("border");
			$(".text_3").text("Заповніть поле");
		}
		
		else {
			validBirthday = true;
			$("#birthday").removeClass("border");
			$(".text_3").text("");
		}
		
		if (email == empty_script) {
			$("#email").addClass("border");
			$(".text_4").text("Заповніть поле");
		}
		
		else {
			validEmail = true;
			$("#email").removeClass("border");
			$(".text_4").text("");
		}
		
		if (validFirst == true && validLast == true && validAddress == true && validBirthday == true && validEmail == true && validPassword == true) {
			$("form").unbind("submit").submit();
			alert("Регістрація завершена")
		}
		
		 if (validFirst != true || validLast != true || validAddress != true || validBirthday != true || validEmail != true || validPassword != true) {
			e.preventDefault();
		}
		
	    })
    $("#birthday").datepicker();
	
})
	