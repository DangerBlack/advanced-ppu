function initNewScout(){
	$.get("php/getSquadriglie.php",function(data){
		$("#inSquadriglia").html('');
		var js=JSON.parse(data);
		console.log(js.length);
		for(var i=0;i<js.length;i++){
			$("#inSquadriglia").append('<option value="'+js[i].idsquadriglie+'" sesso="'+js[i].sesso+'">'+js[i].nome+'</option>');
		}
	});
	
	
	$(".avanti").click(function(){
		var totStep=4;
		var step=$(this).attr("step");
		var valida=validaCampi(parseInt(step));
		if(valida.ok){
			hideError();
			$(".step"+step).hide();
			step++;
			$(".step"+step).show();
			var valeur=step*100/totStep;
			$('#progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur);
			$('#progress-bar').text(valeur+"%");
			if(step==totStep){
				createNewUser();
			}
		}else{
			showError(valida.error);
		}
	});
}

function showError(error){
	$("#error").text(error);
	$("#errorWide").show();
}
function hideError(){
	$("#errorWide").hide();
}
function validaCampi(step){//TODO check delle date etc etc
	var res={};
	res.ok=true;
	res.error="none";
	switch(step){
		case 0:
			var nome=$("#inNome").val();
			console.log(nome);
			var cognome=$("#inCognome").val();
			var sesso=$("#inSesso").val();
			if(typeof(nome)==="undefined" || nome==""){
				res.ok=false;
				res.error="Nome non definito";
				return res;
			}
			if(typeof(cognome)==="undefined" || cognome==""){
				res.ok=false;
				res.error="Cognome non definito";
				return res;
			}
			if(typeof(sesso)==="undefined" || sesso==""){
				res.ok=false;
				res.error="Sesso non definito";
				return res;
			}
		break;
		case 2:{
			var sesso=$("#inSesso").val();
			var sqSesso=$("option[value="+$("#inSquadriglia").val()+"]").attr("sesso");
			if(sesso!=sqSesso){
				res.ok=false;
				res.error="Il Sesso della sq, non è conforme con il sesso del ragazzo!";
				return res;
			}
		}
	}
	
	return res;
}

function createNewUser(){
	var field=["#nome","#cognome","#codice","#indirizzo","#datanascita","#residenza","#sesso","#luogonascita","#cap","#provincia","#nazione","#numbabbo","#nummamma","#numcasa","#numcell","#numnonno","#mailbabbo","#mailmamma","#mail"];
	var dati={};
	for(var i=0;i<field.length;i++){
		var dato=$("#in"+capitalizeFirstLetter(field[i].slice(1))).val();
		console.log("#in"+capitalizeFirstLetter(field[i].slice(1))+" : "+dato);
		dati[field[i].slice(1)]=dato;
	}
	dati['idsquadriglie']=$("#inSquadriglia").val();
	$.post("php/insertNewScout.php",dati,function(data){
		if(data==200){
			//TODO In realtà non fa nulla... gestire errori
		}
	});
	console.log(dati);			
}
