function injectLogin(){
	$("#login").click(function(){
		$(".error-message").hide();
		$.post("php/login.php",{"utente":$("#utente").val(),"pswd":hex_sha1($("#pswd").val())},function(data){
				if(data==200){
					location.replace("index.html");
				}else{
					$(".error-message").html("<strong><span class=\"glyphicon glyphicon-remove\"></span> Attenzione! Username o Password Errati</strong>");
					$(".error-message").show();
				}
				
			});
	});
}
function injectRegister(){
	$("#submit").click(function(){
		$(".error-field").html("");
		var user=$("#InputName").val();
		var email=$("#InputEmailFirst").val();
		var email2=$("#InputEmailSecond").val();
		var pswd=$("#InputPswdFirst").val();
		var pswd2=$("#InputPswdSecond").val();
		var error=false;
		if(email!=email2){
			addErrorMessageRegister("Le due email non corrispondono!");
			error=true;
		}
		if(pswd!=pswd2){
			addErrorMessageRegister("Le due password non corrispondono!");
			error=true;
		}
		if(user.length==0){
			addErrorMessageRegister("Lo Username è un campo obbligatorio!");
			error=true;
		}
		if(email.length==0){
			addErrorMessageRegister("La Email è un campo obbligatorio!");
			error=true;
		}
		if(pswd.length==0){
			addErrorMessageRegister("La Password è un campo obbligatorio!");
			error=true;
		}
		if(!error)
		$.post("php/register.php",{"name":user,"mail":email,"pswd":hex_sha1(pswd)},function(data){
			if(data==201){
				location.href="index.html";
			}else{				
				$(".error-field").append("<strong><span class=\"glyphicon glyphicon-remove\"></span> Nome utente o email già in uso!</strong>");
			}
		});
	});
}
function addErrorMessageRegister(message){
	$(".error-field").append("<div class=\"alert alert-danger\" role=\"alert\"><strong><span class=\"glyphicon glyphicon-remove\"></span> "+message+"</strong></div>");
	$(".error-message").show();
}
