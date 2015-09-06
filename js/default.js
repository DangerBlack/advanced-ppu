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
			$("#listaImpegni").html('');
			for(var i=0;i<s.tappe.length;i++)
				if(s.tappe[i].conquistata==0){
					$(".tappa").attr("src","archive/"+s.tappe[i].immagine);
					$("#listaImpegni").html('');
					for(var j=0;j<s.tappe[i].mete.length;j++){
						$("#listaImpegni").append('<li>'+s.tappe[i].mete[j].meta+'</li>');
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
			eventScout(id);
	});
}
function eventScout(id){
	$(".editInfo").click(function(){
		$(".buttonField").show();
		$(".editInfo").hide();
		var field=["#nome","#cognome","#codice","#indirizzo","#datanascita","#residenza","#sesso","#luogo","#cap","#provincia","#nazione","#numbabbo","#nummamma","#numcasa","#numcell","#numnonno","#mailbabbo","#mailmamma","#mail"];
		
		for(var i=0;i<field.length;i++){
			$(field[i]).replaceWith(function(){
				var val=$(this).text();
				var id=$(this).attr("id");
				return '<input type="text" id="'+id+'" value="'+val+'" />';
			}); 
		}
	});
	$(".editSentiero").click(function(){
		window.open("sentiero.php?id="+id,"self");
	});
	$("#confirmChange").click(function(){
		var field=["#nome","#cognome","#codice","#indirizzo","#datanascita","#residenza","#sesso","#luogo","#cap","#provincia","#nazione","#numbabbo","#nummamma","#numcasa","#numcell","#numnonno","#mailbabbo","#mailmamma","#mail"];	
		var dati={};
		dati['id']=id;
		for(var i=0;i<field.length;i++){
			var dato=$(field[i]).val();
			dati[field[i].slice(1)]=dato;
		}
		dati['idsquadriglie']=$("#idsquadriglie").val();
		$.post("php/updateScout.php",dati,function(data){
			if(data==202){
				$(".buttonField").hide();
				$(".editInfo").show();
				var field=["#nome","#cognome","#codice","#indirizzo","#datanascita","#residenza","#sesso","#luogo","#cap","#provincia","#nazione","#numbabbo","#nummamma","#numcasa","#numcell","#numnonno","#mailbabbo","#mailmamma","#mail"];
				for(var i=0;i<field.length;i++)
					$(field[i]).replaceWith(function(){
						var val=$(this).val();
						var id=$(this).attr("id");
						return '<span type="text" id="'+id+'" >'+val+'</span>';
					}); 
				}
		});
	});
	$("#closeChange").click(function(){
		$(".buttonField").hide();
		$(".editInfo").show();
		var field=["#nome","#cognome","#codice","#indirizzo","#datanascita","#residenza","#sesso","#luogo","#cap","#provincia","#nazione","#numbabbo","#nummamma","#numcasa","#numcell","#numnonno","#mailbabbo","#mailmamma","#mail"];
		for(var i=0;i<field.length;i++)
			$(field[i]).replaceWith(function(){
				var val=$(this).val();
				var id=$(this).attr("id");
				return '<span type="text" id="'+id+'" >'+val+'</span>';
			}); 
	});
	$('.spec').click(function(){
		//var id=$(this).parent().parent().attr("value");
		var idSpec=$(this).attr("value");
		window.open('specialita.php?id='+id+'&idS='+idSpec,"_self");
	});
	$(".spec").children('a').tooltip();
	$(".brev").children('a').tooltip();
	
	$('#myModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var recipient = button.data('whatever') // Extract info from data-* attributes
	  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this);
	  //alert(recipient);
	  if(recipient=="@spec"){
		  modal.find('.modal-title').html("Seleziona la Specialità da aggiungere");
		  $.get("php/getSpecialita.php",function(data){
			   var lista='<label>Specialità: </label> <select id="specScelta">';
			   var js=JSON.parse(data);
			   $.each(js,function(e,spec){
				   lista+='<option value="'+spec.id+'">'+spec.nome+'</option>';
			   });
			   lista+='</select>';
			   modal.find('.modal-body').html(lista);
			   modal.find('.modal-body').append('<p class="space"><label>Maestro: </label> <input id="maestro" type="text" placeholder="Maestro" /></p>');
		  });
		  $("#send").click(function(){
			  var maestro=$("#maestro").val();
			  var idSpec=$("#specScelta").val();
			  addNuovaSpec(id,idSpec,maestro);
		  });
	   }
	   if(recipient=="@brev"){
		  modal.find('.modal-title').html("Seleziona il Brevetto da aggiungere");
		  $.get("php/getBrevetti.php",function(data){
			   var lista='<label>Brevetto: </label> <select id="brevScelto">';
			   var js=JSON.parse(data);
			   $.each(js,function(e,brev){
				   lista+='<option value="'+brev.id+'">'+brev.nome+'</option>';
			   });
			   lista+='</select>';
			   modal.find('.modal-body').html(lista);
			   modal.find('.modal-body').append('<p class="space"><label>Maestro: </label> <input id="maestro" type="text" placeholder="Maestro" /></p>');
		  });
		  $("#send").click(function(){
			  var maestro=$("#maestro").val();
			  var idBrev=$("#brevScelto").val();
			  addNuovoBrev(id,idBrev,maestro);
		  });
	   }
	   
	});
}

function addNuovaSpec(id,idSpec,maestro){
	$.post("php/addSpec.php",{"id":id,"idS":idSPec,"maestro":maestro},function(data){
		if(data=="200"){
			$('#myModal').modal('hide');
		}
	});
}
function addNuovoBrev(id,idBrev,maestro){
	$.post("php/addBrev.php",{"id":id,"idC":idBrev,"maestro":maestro},function(data){
		if(data=="200"){
			$('#myModal').modal('hide');
		}
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
				$('.openwiki').attr('onclick','window.open("http://it.scoutwiki.org/'+specName+'_%28Specialit%C3%A0_E/G%29","_blank")');
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
function addChecked(value){
	if(value==true){
		return 'checked="true"';
	}
	return "";
}
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
		for(var k=0;k<s.tappe.length;k++){
			var tnome=getTappFromId(parseInt(s.tappe[k].idtappe));
			$("#conquistata"+tnome).prop('checked',trueAs1(s.tappe[k].conquistata));
			$("#conquistata"+tnome).attr('value',s.tappe[k].id);
			$("#data"+tnome).val(s.tappe[k].dataconquistata);
			$(".add"+tnome).attr("data-whatever",s.tappe[k].id);
			for(var j=0;j<s.tappe[k].mete.length;j++){
				var m=s.tappe[k].mete[j];
				$("#tabellaMete"+tnome).find('.mete').append('<tr value="'+m.id+'">'+
																'<td>'+m.meta+'</td>'+
																'<td>'+m.impegno+'</td>'+
																'<td>'+m.datainizio+'</td>'+
																'<td>'+m.dataobiettivo+'</td>'+
																'<td><input value="'+m.id+'" class="confermaMeta" type="checkbox" '+addChecked(trueAs1(m.raggiunta))+' /></td>'+
																'<td>'+
																	'<button type="button" class="btn btn-danger btn-sm">'+
																	  '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'+
																	'</button>'+
																'</td>'+
															'</tr>');
			}
		}
		eventiSentiero(id);
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
}
function addNuovaMeta(idTappa,meta,impegno,datainizio,datafine){
	$.post("addNuovaMeta.php",{'idtappa':idTappa,"meta":meta,"impegno":impegno,"datainizio":datainizio,"datafine":datafine},function(data){
		if(data==200){
			
		}
	});
}
function getTappFromId(id){
	switch(id){
		case 1:
			return "Scoperta";
		break;
		case 2:
			return "Competenza";
		break;
		case 3:
			return "Responsabilita";
		break;
	}
	return "";
}

/*Some usefull function*/
