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
				$("#data").val(spec.data);
				$("#conquistata").prop('checked',trueAs1(spec.conquistata));
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
													'<button type="button" class="btn btn-danger btn-xs right deleteImpegno"><span class="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span></button>'+
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
	$(".deleteImpegno").click(function(){//TODO
		var id=$(this).val();
		var completato=$(this).prop("checked");
		$.post('php/deleteImpegno.php',{'id':id},function(data){
			if(data==410){
				console.log("Impegno cancellato");
			}
		});
	});		
}
function addNuovoImpegno(id,idS,impegno){
	$.post('php/addImpegno.php',{'id':id,'idS':idS,"impegno":impegno},function(data){
			if(data==202){
				console.log("Impegno completato");
				window.reload();
			}
		});
}
