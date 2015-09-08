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
				$("#data").val(brev.data);
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
													'<button type="button" class="btn btn-danger btn-xs right deleteImpegno"><span class="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span></button>'+
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
	$(".deleteImpegno").click(function(){//TODO server side
		var id=$(this).val();
		var completato=$(this).prop("checked");
		$.post('php/deleteImpegnoBrevetto.php',{'id':id},function(data){
			if(data==410){
				console.log("Impegno cancellato");
			}
		});
	});		
}
function addNuovoImpegnoBrevetto(id,idB,impegno){//TODO server side
	$.post('php/addImpegnoBrevetto.php',{'id':id,'idB':idB,"impegno":impegno},function(data){
			if(data==201){
				console.log("Impegno completato");
				window.reload();
			}
		});
}
