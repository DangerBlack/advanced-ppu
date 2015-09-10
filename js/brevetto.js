function initBrevetto(id,idBrev){
	$.post("php/getScout.php",{"id":id},function(data){
		var js=JSON.parse(data);
		var s=js[0];
		$(".name").html('<a href="scout.php?id='+id+'">'+s.nome+" "+s.cognome+"</a>");
		$.each(s.brevetti,function(e,brev){
			if(brev.idbrevetti==idBrev){
				var brevName=capitalizeFirstLetter(brev.nome);
				$(".brevetto").html(brev.nome);
				$(".photo").attr("src","archive/"+brev.immagine);
				$("#maestro").val(brev.maestro);
				$("#data").val(toHRData(brev.data));
				$("#metodo").html(brev.esempi);
				$("#conquistata").prop('checked',trueAs1(brev.conquistata));
				$('#listaImpegniBrev').html('');
				var count=0;
				var concat='';
				for(var i=0;i<brev['impegni'].length;i++){
					count++;
					var status="";
					if(brev['impegni'][i].completato==1){
						status='checked="checked"';
					}
					$('#listaImpegniBrev').append('<li>'+
													'<input type="checkbox" value="'+brev['impegni'][i].id+'" class="confirmImpegno" '+status+'/> '+
													brev['impegni'][i].impegno+
													'<button type="button" class="btn btn-danger btn-xs right deleteImpegno" value="'+brev['impegni'][i].id+'"><span class="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span></button>'+
												  '</li>');;					
				}
				
				$("#varie").val(brev.varie);
				$("#metodo").html(brev.metodo);
				$('iframe').attr('src','http://it.scoutwiki.org/'+brevName+'_%28Brevetto%A0_E/G%29');
				$('.openwiki').attr('onclick','window.open("http://it.scoutwiki.org/'+brevName+'_%28Brevetto%A0_E/G%29","_blank")');
			}
		});
		$.get("php/getSpecialitaCollegate.php?idBrev="+idBrev,function(data){
			var js=JSON.parse(data);
			$.each(js,function(e,spec){
				$("#listaSpecialita").append('<li class="spec" value="'+spec.idspecialita+'" >'+
														'<img src="archive/'+spec.immagine+'" />'+
														'<p>'+spec.nome+'</p>'+
											  '</li>');
			});
		});
		eventiBrevetti(id,idBrev);
	});
}


function eventiBrevetti(idScout,idBrev){
	$('#myModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget);
	  var idTappa = button.data('whatever');
	  var modal = $(this);
	  modal.find('.modal-title').html("Nuovo Brevetto");
	  modal.find('.modal-body').html('<div class="metaCreator">'+
									 '<label>Impegno: </label><input id="impegno" type="text" placeholder="obiettivo pratico" /><br />'+
									 '</div>');
	  $("#send").click(function(){
		  var impegno=$("#impegno").val();
		  addNuovoImpegnoBrevetto(idScout,idBrev,impegno);
	  }); 
	});
	$(".confirmImpegno").click(function(){
		var id=$(this).val();
		var completato=$(this).prop("checked");
		$.post('php/confermaImpegnoBrevetto.php',{'id':id,"completato":completato},function(data){//TODO server side
			if(data==202){
				console.log("Impegno completato");
			}
		});
	});
	$(".deleteImpegno").click(function(){
		var impegno=$(this).parent();
		var id=$(this).val();
		$.post('php/deleteImpegnoBrevetto.php',{'id':id},function(data){
			if(data==410){
				console.log("Impegno cancellato");
				impegno.hide();	
			}
		});
	});
	$("#conquistata").click(function(){
		var conquistata=$(this).prop("checked");
		$.post('php/confermaBrevetto.php',{'idBrev':idBrev,'idScout':idScout,"conquistata":conquistata},function(data){
			if(data==202){
				console.log("Brevetto conquistato");
				
			}
		});
	});
	$(".updateVarie").click(function(){
		var varie=$("#varie").val();
		console.log(varie);
		$.post('php/updateVarieBrevetto.php',{'idBrev':idBrev,'idScout':idScout,"varie":varie},function(data){
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
		$.post('php/updateMaestroBrevetti.php',{'idScout':idScout,'idBrev':idBrev,'maestro':maestro},function(data){
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
		$.post('php/updateDataBrevetti.php',{'idScout':idScout,'idBrev':idBrev,'data':data},function(data){
			if(data==202){
				console.log("aggiornato");
				checkout.hide();
			}
		});
	}
	$("#deleteBrevetto").click(function(){
		deleteBrevetto(idScout,idBrev);
	});			
}
function deleteBrevetto(idScout,idBrev){
	var risp = prompt("Vuoi cancellare questa Specialita?\nIl processo è irreversibile!!!\nPer favore digita Si", "No");
	if ((risp == "si")||(risp == "Si")) {
		console.log(idScout,idBrev);
		$.post('php/deleteBrevetto.php',{'idScout':idScout,'idBrev':idBrev},function(data){
			if(data==410){
				console.log("ERASED 4EVA! ");
				location.href="scout.php?id="+idScout;
			}
		});
	}	
}
function addNuovoImpegnoBrevetto(id,idB,impegno){
	$.post('php/addImpegnoBrevetto.php',{'id':id,'idB':idB,"impegno":impegno},function(data){
			if(data==201){
				console.log("Impegno completato");
				location.reload();
			}
		});
}
