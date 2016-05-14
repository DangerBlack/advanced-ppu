/**
	Copyright 2015 Daniele Baschieri
	version: 1.01

	This file is part of Advanced P.P.U.

    Advanced P.P.U. is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Advanced P.P.U. is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Advanced P.P.U.  If not, see <http://www.gnu.org/licenses/>.
**/
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

	var checkout=$('#inDatanascita').datepicker({
		format: 'dd/mm/yyyy',
		startDate: '-12y'
	}).on('change.dp',changeDate).on('changeDate',changeDate);

	function changeDate(){
		/*var data=$(this).val();
		var idField=$(this).attr('id');
		var step="";
		step=idField.substring(4);
		console.log(step);

		data=toDBData(data);
		$.post('php/updateDataTappa.php',{'idScout':id,'idtappa':getIdFromTapp(step),'data':data},function(data){
			if(data==202){
				console.log("aggiornato");
				checkout.hide();
			}
		});*/
	}
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
			if((sesso!=sqSesso)&&(sqSesso!="U")){
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
		var dato="";
		if(i==4){
			dato=toDBData($("#in"+capitalizeFirstLetter(field[i].slice(1))).val());
		}else{
			dato=$("#in"+capitalizeFirstLetter(field[i].slice(1))).val();
			console.log("#in"+capitalizeFirstLetter(field[i].slice(1))+" : "+dato);
		}
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
