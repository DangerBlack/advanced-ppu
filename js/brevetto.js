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
				brev['impegni']=[];
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
		//eventiSpecialita(id,idSpec);
	});
}
