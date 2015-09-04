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
			$("#nome").val(s.nome);
			$("#cognome").val(s.cognome);
			$("#codice").val(s.codice);
			$("#indirizzo").val(s.indirizzo);
			$("#datanascita").val(s.datanascita);
			$("#residenza").val(s.residenza);
			$("#sesso").val(s.sesso);
			$("#luogo").val(s.luogonascita);
			$("#cap").val(s.cap);
			$("#provincia").val(s.provincia);
			$("#nazione").val(s.nazione);
			$("#idsquadriglie").val(s.idsquadriglie);
			$("#varie").val(s.varie);
			$("#numbabbo").val(s.numbabbo);
			$("#nummamma").val(s.numammma);
			$("#numcasa").val(s.numcasa);
			$("#numnonno").val(s.numnonno);
			$("#mailbabbo").val(s.mailbabbo);
			$("#mailmamma").val(s.mailmamma);
			$("#mail").val(s.mail);
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
				for(var i=1;i<=6;i++){
					if((spec['prova'+i] != "")&&(spec['prova'+i]!=null))
						count++;
				}
				if(spec.conquistata!=0)
					$("#listaSpecialita").append('<li>'+
													'<img src="archive/'+spec.immagine+'" />'+
													'<p>'+spec.nome+' <span class="badge">'+count+'</span></p>'+
												'</li>');
				else
					$("#specInConquista").append('<li>'+
													'<img src="archive/'+spec.immagine+'" />'+
													'<p>'+spec.nome+' <span class="badge">'+count+'</span></p>'+
												'</li>');
			});	
			$("#listaBrevetti").html('');	
			$("#brevInConquista").html('');
			$.each(s.brevetti,function(e,brev){
				var count=0;
				for(var i=1;i<=6;i++){
					if((brev['prova'+i] != "")&&(brev['prova'+i]!=null))
						count++;
				}
				if(brev.conquistata!=0)
					$("#listaBrevetti").append('<li>'+
													'<img src="archive/'+brev.immagine+'" />'+
													'<p>'+brev.nome+' <span class="badge">'+count+'</span></p>'+
												'</li>');
				else
					$("#brevInConquista").append('<li>'+
													'<img src="archive/'+brev.immagine+'" />'+
													'<p>'+brev.nome+' <span class="badge">'+count+'</span></p>'+
												'</li>');
			});
	});
}
