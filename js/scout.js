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
			$("#note").html(s.varie.replace(/\n/g,"<br />"));
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
				for(var i=0;i<spec['impegni'].length;i++){
					count++;
					concat+=spec['impegni'][i].impegno +'<br />';					
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
				for(var i=0;i<brev['impegni'].length;i++){
					count++;
					concat+=brev['impegni'][i].impegno +'<br />';					
				}
				if(brev.conquistata!=0)
					$("#listaBrevetti").append('<li class="brev" value="'+brev.idbrevetti+'"><a href="#" data-toggle="tooltip" data-placement="bottom"'+
													   'title="" data-html="true" data-original-title="'+concat+'"'+
													   'class="info-tooltip">'+
													'<img src="archive/'+brev.immagine+'" />'+
													'<p>'+brev.nome+' <span class="badge">'+count+'</span></p>'+
													'</a>'+
												'</li>');
				else
					$("#brevInConquista").append('<li class="brev" value="'+brev.idbrevetti+'"><a href="#" data-toggle="tooltip" data-placement="bottom"'+
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
	$('.brev').click(function(){
		//var id=$(this).parent().parent().attr("value");
		var idBrev=$(this).attr("value");
		window.open('brevetto.php?id='+id+'&idB='+idBrev,"_self");
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
		specialitaModal(id,modal);
	  }
	  if(recipient=="@brev"){
		brevettoModal(id,modal);
	  }
	  if(recipient=="@Commento"){
		commentoModal(id,modal);
	  }
	});
}


function specialitaModal(id,modal){
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
function brevettoModal(id,modal){
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
function commentoModal(id,modal){
	modal.find('.modal-title').html("Scrivi un commento");
	modal.find('.modal-body').html('<p class="space"><label>Titolo: </label> <input id="titolo" type="text" placeholder="Chiacchierata" /></p>'+
									'<label>Corpo: </label><br /> <textarea id="commento" type="text" placeholder="-testo-" ></textarea><span class="rightText"><span id="counter">0</span><span>/500</span></span>');
	
	$("#commento").keypress(function(){
		var l=$(this).val().length;
		if(l>500){
			$("#counter").css("color","red");
		}else{
			$("#counter").css("color","black");
		}
		$("#counter").html(l);
	});
	$("#send").click(function(){
	  var commento=$("#commento").val();
	  var titolo=$("#titolo").val();
	  addCommento(id,titolo,commento);
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
function addCommento(id,titolo,commento){//TODO server side
	$.post("php/addBrev.php",{"id":id,"titolo":titolo,"commento":commento},function(data){
		if(data=="200"){
			$('#myModal').modal('hide');
		}
	});
}
