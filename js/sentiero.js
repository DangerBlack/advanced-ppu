/**
	Copyright 2015 Daniele Baschieri
	version: 1.0

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
function initSentiero(id){
	$.post("php/getScout.php",{"id":id},function(data){
		var s="";
		try{
			var js=JSON.parse(data);
			var s=js[0];
		}catch(e){
			console.log("Problema grave");
			console.log(e);
		}
		$(".nome").html('<a href="scout.php?id='+id+'">'+s.nome+" "+s.cognome+"</a>");
		var maxValF=0;
		for(var k=0;k<s.tappe.length;k++){
			var tnome=getTappFromId(parseInt(s.tappe[k].idtappe));
			$("#conquistata"+tnome).prop('checked',trueAs1(s.tappe[k].conquistata));
			$("#conquistata"+tnome).attr('value',s.tappe[k].id);

			if(s.tappe[k].conquistata=="1"){
				var temp=parseInt(s.tappe[k].idtappe)
				if(maxValF<temp){
					maxValF=s.tappe[k].idtappe;
				}
			}
			$("#data"+tnome).val(toHRData(s.tappe[k].dataconquistata));
			$(".data"+tnome).text(toHRData(s.tappe[k].dataconquistata));
			$(".add"+tnome).attr("data-whatever",s.tappe[k].id);
			if(trueAs1(s.tappe[k].conquistata)){
				$(".add"+tnome).hide();
			}
			for(var j=0;j<s.tappe[k].mete.length;j++){
				var m=s.tappe[k].mete[j];
				$("#tabellaMete"+tnome).find('.mete').append('<tr value="'+m.id+'">'+
																'<td>'+m.meta+'</td>'+
																'<td>'+m.impegno+'</td>'+
																'<td>'+m.datainizio+'</td>'+
																'<td>'+m.dataobiettivo+'</td>'+
																'<td><input value="'+m.id+'" class="confermaMeta" type="checkbox" '+addChecked(trueAs1(m.raggiunta))+' /></td>'+
																'<td>'+
																	'<button type="button" class="btn btn-danger btn-sm" onclick="deleteMeta('+m.id+')">'+
																	  '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'+
																	'</button>'+
																'</td>'+
															'</tr>');
			}
		}
		$('.nav-tabs li:eq('+(parseInt(maxValF))+') a').tab('show')
		eventiSentiero(id);
	});
}
function deleteMeta(id){//TODO
	$.post("php/deleteMeta.php",{"id":id},function(data){
		if(data==403){
			//alert("rimossa");
			$("tr[value="+id+"]").hide();
		}
	});
}
function eventiSentiero(id){
	$('#myModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget);
	  var idTappa = button.data('whatever');
	  var modal = $(this);
	  var today = new Date();
	  var date=today.toISOString().slice(0, 10);
	  var fine= today.getFullYear()+"-08-01";
	  if(today.getMonth()>=8)
		fine= (today.getFullYear()+1)+"-08-01";
	  modal.find('.modal-title').html("Nuova Meta");
	  modal.find('.modal-body').html('<div class="metaCreator"><label>Meta: </label><input id="meta" type="text" placeholder="obiettivo generale" /><br />'+
									 '<label>Impegno: </label><input id="impegno" type="text" placeholder="obiettivo pratico" /><br />'+
									 '<label>Data Inizio: </label><input id="datainizio" type="data" placeholder="'+date+'" value="'+date+'" /><br />'+
									 '<label>Data Verifica: </label><input id="datafine" type="data" placeholder="'+fine+'" value="'+fine+'" /><br /></div>');
	  $("#send").click(function(){
		  var meta=$("#meta").val();
		  var impegno=$("#impegno").val();
		  var datainizio=$("#datainizio").val();
		  var datafine=$("#datafine").val();
		  addNuovaMeta(idTappa,meta,impegno,datainizio,datafine);
	  });
	});
	$(".confermaTappa").click(function(){
			var confermata=$(this).prop('checked');
			console.log(confermata);
			var id=$(this).val();
			$.post('php/confermaTappa.php',{'id':id,'conferma':confermata},function(data){
				if(202){
					console.log("successo");
				}
			});
		});
		$(".confermaMeta").click(function(){
			var confermata=$(this).prop('checked');
			var id=$(this).val();
			$.post('php/confermaMeta.php',{'id':id,'conferma':confermata},function(data){
				if(202){
					console.log("successo");
				}
			});
		});
		$('#tabellaMeteBaghera').DataTable( {
		   "paging":   false,
		   "ordering": false,
		   "info":     false
	    });
		$('#tabellaMeteBaloo').DataTable( {
			  "paging":   false,
			  "ordering": false,
			  "info":     false
		});
	  	$('#tabellaMeteAkela').DataTable( {
			 "paging":   false,
			 "ordering": false,
			 "info":     false
		 });
		$('#tabellaMeteScoperta').DataTable( {
			"paging":   false,
			"ordering": false,
			"info":     false
		});
		$('#tabellaMeteCompetenza').DataTable( {
			"paging":   false,
			"ordering": false,
			"info":     false
		});
		$('#tabellaMeteResponsabilita').DataTable( {
			"paging":   false,
			"ordering": false,
			"info":     false
		});

		var checkout=$('.data').datepicker({
			format: 'dd/mm/yyyy',
			startDate: '-3d'
		}).on('change.dp',changeDate).on('changeDate',changeDate);

		function changeDate(){
			var data=$(this).val();
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
			});
		}
}
function addNuovaMeta(idTappa,meta,impegno,datainizio,datafine){//TODO LATO SERVER
	$.post("php/addNuovaMeta.php",{'idtappa':idTappa,"meta":meta,"impegno":impegno,"datainizio":datainizio,"datafine":datafine},function(data){
		if(data==201){
			location.reload();
		}
	});
}
function getTappFromId(id){
	switch(id){
		case 1:
			return "Baloo";
		case 2:
			return "Baghera";
		case 3:
			return "Akela";
		case 4:
			return "Scoperta";
		break;
		case 5:
			return "Competenza";
		break;
		case 6:
			return "Responsabilita";
		break;
	}
	return "";
}
function getIdFromTapp(tapp){
	switch(tapp){
		case "Baloo":
			return 1;
		break;
		case "Baghera":
			return 2;
		break;
		case "Akela":
			return 3;
		case "Scoperta":
			return 4;
		break;
		case "Competenza":
			return 5;
		break;
		case "Responsabilita":
			return 6;
		break;
	}
	return 0;
}
