function init(){
	initTabellRagazzi();
}
function initTabellRagazzi(){
	$.get("php/getScoutList.php",function(data){
		var js=JSON.parse(data);
		$.each(js,function(e,scout){
			/*<td>Foto</td>
					<td>Cognome</td>
					<td>Nome</td>
					<td>Codice</td>
					<td>Indirizzo</td>
					<td>Residenza</td>
					<td>Data di Nascita</td>
					<td>Sesso</td>
					<td>Edita</td>*/
			$("#elencoRagazzi").append('<tr value="'+scout.idscout+'">'+
										'<td><img class="preview" src="archive/photo/'+scout.photo+'" /></td>'+
										'<td>'+scout.cognome+'</td>'+
										'<td>'+scout.nome+'</td>'+
										'<td>'+scout.codice+'</td>'+
										'<td>'+scout.indirizzo+'</td>'+
										'<td>'+scout.residenza+'</td>'+
										'<td>'+scout.datanascita+'</td>'+
										'<td>'+scout.sesso+'</td>'+
										'<td><button type="button" class="btn btn-default edit"><span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</button></td></tr>');
		});
		
		$('#tabellaRagazzi').DataTable({
					"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
					"pageLength": -1
				});
		
		$(".edit").click(function(){
			var id=$(this).parent().parent().attr("value");
			window.open('scout.php?id='+id,"_self");
		});
	});
}

function initScout(id){
	$.post("php/getScout.php",{"id":id},function(data){
		var js=JSON.parse(data);
		var s=js[0];
			$(".name").html(s.nome+" "+s.cognome);
			$(".photo").attr("src","archive/bigphoto/"+s.photo);
			$("#nome").html(s.nome);
			$("#cognome").html(s.cognome);
			$("#codice").html(s.codice);
			$("#indirizzo").html(s.indirizzo);
			$("#datanascita").html(s.datanascita);
			$("#residenza").html(s.residenza);
			$("#sesso").html(s.sesso);
			$("#luogo").html(s.luogonascita);
			$("#cap").html(s.cap);
			$("#provincia").html(s.provincia);
			$("#nazione").html(s.nazione);
			$("#idsquadriglie").val(s.idsquadriglie);
			$("#varie").val(s.varie);
			$("#numbabbo").html(s.numbabbo);
			$("#nummamma").html(s.numammma);
			$("#numcasa").html(s.numcasa);
			$("#numnonno").html(s.numnonno);
			$("#mailbabbo").html('<a href="mailto:'+s.mailbabbo+'" target="_top">'+s.mailbabbo+'</a>');
			$("#mailmamma").html('<a href="mailto:'+s.mailmammma+'" target="_top">'+s.mailmamma+'</a>');
			$("#mail").html('<a href="mailto:'+s.mail+'" target="_top">'+s.mail+'</a>');
			for(var i=0;i<3;i++)
				if(s.mete[i].conquistata==0){
					$(".tappa").attr("src","archive/"+s.mete[i].immagine);
					$("#listaImpegni").html('');
					for(var j=1;j<=6;j++){
						$("#listaImpegni").append('<li>'+s.mete[i]['meta'+j]+'</li>');
					}
					break;
				}
			$("#listaSpecialita").html('');
			$("#specInConquista").html('');
			$.each(s.specialita,function(e,spec){
				var count=0;
				var concat='';
				for(var i=1;i<=6;i++){
					if((spec['prova'+i] != "")&&(spec['prova'+i]!=null)){
						count++;
						concat+=spec['prova'+i]+'<br />';
					}
					
				}
				if(spec.conquistata!=0)
					$("#listaSpecialita").append('<li class="spec" value="'+spec.idspecialita+'" ><a href="#" data-toggle="tooltip" data-placement="bottom"'+
													   'title="" data-html="true" data-original-title="'+concat+'"'+
													   'class="info-tooltip">'+
													'<img src="archive/'+spec.immagine+'" />'+
													'<p>'+spec.nome+' <span class="badge">'+count+'</span></p>'+
													'</a>'+
												'</li>');
				else
					$("#specInConquista").append('<li class="spec" value="'+spec.idspecialita+'"><a href="#" data-toggle="tooltip" data-placement="bottom"'+
													   'title="" data-html="true" data-original-title="'+concat+'"'+
													   'class="info-tooltip">'+
													'<img src="archive/'+spec.immagine+'" />'+
													'<p>'+spec.nome+' <span class="badge">'+count+'</span></p>'+
													'</a>'+
												'</li>');
			});	
			$("#listaBrevetti").html('');	
			$("#brevInConquista").html('');
			$.each(s.brevetti,function(e,brev){
				var count=0;
				var concat='';
				for(var i=1;i<=6;i++){
					if((brev['prova'+i] != "")&&(brev['prova'+i]!=null)){
						count++;
						concat+=brev['prova'+i]+'<br />';
					}
				}
				if(brev.conquistata!=0)
					$("#listaBrevetti").append('<li class="brev" value="'+brev.idbrevetto+'"><a href="#" data-toggle="tooltip" data-placement="bottom"'+
													   'title="" data-html="true" data-original-title="'+concat+'"'+
													   'class="info-tooltip">'+
													'<img src="archive/'+brev.immagine+'" />'+
													'<p>'+brev.nome+' <span class="badge">'+count+'</span></p>'+
													'</a>'+
												'</li>');
				else
					$("#brevInConquista").append('<li class="brev" value="'+brev.idbrevetto+'"><a href="#" data-toggle="tooltip" data-placement="bottom"'+
													   'title="" data-html="true" data-original-title="'+concat+'"'+
													   'class="info-tooltip">'+
													'<img src="archive/'+brev.immagine+'" />'+
													'<p>'+brev.nome+' <span class="badge">'+count+'</span></p>'+
													'</a>'+
												'</li>');
			});
			$('.spec').click(function(){
				//var id=$(this).parent().parent().attr("value");
				var idSpec=$(this).attr("value");
				window.open('specialita.php?id='+id+'&idS='+idSpec,"_self");
			});
			$(".spec").children('a').tooltip();
			$(".brev").children('a').tooltip();
	});
}

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
			}
		});
		
	});
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function trueAs1(value){
	if(value=='1'){
		return true;
	}
	return false;
}
