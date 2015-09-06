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
				for(var i=1;i<=6;i++){
					if((spec['prova'+i] != "")&&(spec['prova'+i]!=null)){
						count++;
						$('#listaImpegniSpec').append('<li>'+spec['prova'+i]+'</li>');
					}
				}
				$("#varie").val(spec.varie);
				$("#metodo").html(spec.metodo);
				$('iframe').attr('src','http://it.scoutwiki.org/'+specName+'_%28Specialit%C3%A0_E/G%29');
				$('.openwiki').attr('onclick','window.open("http://it.scoutwiki.org/'+specName+'_%28Specialit%C3%A0_E/G%29","_blank")');
			}
		});
		
	});
}
