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
function initSpecialita(id,idSpec){
	$.post("php/getScout.php",{"id":id},function(data){
		var js=JSON.parse(data);
		var s=js[0];
		$(".name").html('<a href="scout.php?id='+id+'">'+s.nome+" "+s.cognome+"</a>");
		$.each(s.specialita,function(e,spec){
			if(spec.idspecialita==idSpec){
				var specName=capitalizeFirstLetter(spec.nome);
				$(".specialita").html(spec.nome);
				$(".photo").attr("src","archive/"+spec.immagine);
				$("#maestro").val(spec.maestro);
				$("#data").val(toHRData(spec.data));
				$("#conquistata").prop('checked',trueAs1(spec.conquistata));
				$('#listaImpegniSpec').html('');
				$('#listaImpegniSpec').html('');
				var count=0;
				var concat='';
				for(var i=0;i<spec['impegni'].length;i++){
					count++;
					var status="";
					if(spec['impegni'][i].completato==1){
						status='checked="checked"';
					}
					$('#listaImpegniSpec').append('<li>'+
													'<input type="checkbox" value="'+spec['impegni'][i].id+'" class="confirmImpegno" '+status+'/> '+
													spec['impegni'][i].impegno+
													'<button type="button" class="btn btn-danger btn-xs right deleteImpegno" value="'+spec['impegni'][i].id+'" ><span class="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span></button>'+
												  '</li>');;					
				}
				
				$("#varie").val(spec.varie);
				$("#metodo").html(spec.metodo);
				$('iframe').attr('src','http://it.scoutwiki.org/'+specName+'_%28Specialit%C3%A0_E/G%29');
				$('.openwiki').attr('onclick','window.open("http://it.scoutwiki.org/'+specName+'_%28Specialit%C3%A0_E/G%29","_blank")');
			}
		});
		eventiSpecialita(id,idSpec);
	});
}
function eventiSpecialita(idScout,idSpec){
	$('#myModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget);
	  var idTappa = button.data('whatever');
	  var modal = $(this);
	  modal.find('.modal-title').html("Nuovo Impegno");
	  modal.find('.modal-body').html('<div class="metaCreator">'+
									 '<label>Impegno: </label><input id="impegno" type="text" placeholder="obiettivo pratico" /><br />'+
									 '</div>');
	  $("#send").click(function(){
		  var impegno=$("#impegno").val();
		  addNuovoImpegno(idScout,idSpec,impegno);
	  }); 
	});
	$(".confirmImpegno").click(function(){
		var id=$(this).val();
		var completato=$(this).prop("checked");
		$.post('php/confermaImpegno.php',{'id':id,"completato":completato},function(data){
			if(data==202){
				console.log("Impegno completato");				
			}
		});
	});
	$(".deleteImpegno").click(function(){
		var impegno=$(this).parent();
		var id=$(this).val();
		$.post('php/deleteImpegno.php',{'id':id},function(data){
			if(data==410){
				console.log("Impegno cancellato");	
				impegno.hide();			
			}
		});
	});
	$("#conquistata").click(function(){
		var conquistata=$(this).prop("checked");
		$.post('php/confermaSpecialita.php',{'idSpec':idSpec,'idScout':idScout,"conquistata":conquistata},function(data){
			if(data==202){
				console.log("Impegno completato");
				
			}
		});
	});
	$(".updateVarie").click(function(){
		var varie=$("#varie").val();
		console.log(varie);
		$.post('php/updateVarieSpecialita.php',{'idSpec':idSpec,'idScout':idScout,"varie":varie},function(data){
			if(data==202){
				console.log("Varie aggiornate");				
			}
		});
	});
	
	
	$.get("php/getScoutNameList.php",function(data){
		var js=JSON.parse(data);
		
		var nomi=[];
		for(var i=0;i<js.length;i++){
			nomi.push(js[i].nome+" "+js[i].cognome);
		}
		$(".typeahead").autoComplete({
			minChars: 2,
			source: function(term, suggest){
				term = term.toLowerCase();
				var matches = [];
				for (i=0; i<nomi.length; i++)
					if (~nomi[i].toLowerCase().indexOf(term)) matches.push(nomi[i]);
				suggest(matches);
			}
		});
	});
	$(".typeahead").change(function(){
		var maestro=$(this).val();
		console.log(maestro);
		$.post('php/updateMaestroSpecialita.php',{'idScout':idScout,'idSpec':idSpec,'maestro':maestro},function(data){
			if(data==202){
				console.log("aggiornato");
			}
		});
	});
	
	var checkout=$('#data').datepicker({
		format: 'dd/mm/yyyy',
		startDate: '-3d'
	}).on('change.dp',changeDate).on('changeDate',changeDate);
	
	function changeDate(){
		var data=$(this).val();
		data=toDBData(data);
		$.post('php/updateDataSpecialita.php',{'idScout':idScout,'idSpec':idSpec,'data':data},function(data){
			if(data==202){
				console.log("aggiornato");
				checkout.hide();
			}
		});
	}
	$("#deleteSpecialita").click(function(){
		deleteSpecialita(idScout,idSpec);
	});
	
}
function deleteSpecialita(idScout,idSpec){
	var risp = prompt("Vuoi cancellare questa Specialita?\nIl processo è irreversibile!!!\nPer favore digita Si", "No");
	if ((risp == "si")||(risp == "Si")) {
		console.log(idScout,idSpec);
		$.post('php/deleteSpecialita.php',{'idScout':idScout,'idSpec':idSpec},function(data){
			if(data==410){
				console.log("ERASED 4EVA! ");
				location.href="scout.php?id="+idScout;
			}
		});
	}	
}
function addNuovoImpegno(id,idS,impegno){
	$.post('php/addImpegno.php',{'id':id,'idS':idS,"impegno":impegno},function(data){
		if(data==201){
			console.log("Impegno completato");
			location.reload();
		}
	});
}
