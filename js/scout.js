/**
	Copyright 2015 Daniele Baschieri
	version: 1.01
	
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
function initScout(id){

	$.post("php/getScout.php",{"id":id},function(data){
		var js=JSON.parse(data);
		var s=js[0];
			$(".name").html(s.nome+" "+s.cognome);
			$(".photo").attr("src","archive/bigphoto/"+s.photo);
			$(".squadriglia").html('<span>'+s.nomeSq+'</span><br /><span class="colorbox primary" style="background-color:#'+s.colore1+'"></span>'+
									'<span class="colorbox secondary" style="background-color:#'+s.colore2+'"></span>');
			
			$("#nome").html(s.nome);
			$("#cognome").html(s.cognome);
			$("#codice").html(s.codice);
			$("#indirizzo").html(s.indirizzo);
			$("#datanascita").html(toHRData(s.datanascita));
			$("#residenza").html(s.residenza);
			$("#sesso").html(s.sesso);
			$("#luogo").html(s.luogonascita);
			$("#cap").html(s.cap);
			$("#provincia").html(s.provincia);
			$("#nazione").html(s.nazione);
			$.get("php/getSquadriglie.php",function(data){
				$("#idsquadriglie").html('');
				var js=JSON.parse(data);
				console.log(js.length);
				for(var i=0;i<js.length;i++){
					var isSelected='';
					if(js[i].idsquadriglie==s.idsquadriglie)
						isSelected='selected="selected"';
					$("#idsquadriglie").append('<option '+isSelected+' value="'+js[i].idsquadriglie+'" sesso="'+js[i].sesso+'">'+js[i].nome+'</option>');
				}
			});
			
			
			//$("#note").html(s.varie.replace(/\n/g,"<br />"));
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
			
			$("#commenti").html('');
			$.each(s.commenti,function(e,commento){
				var post=commento.testo.replace(/\n/g,"<br />");
				post=wrapUrlPost(post);
				
				var edit="";
				if(commento.owner){
					edit='<button type="button" class="btn btn-xs btn-info right editCommento" data-toggle="modal" data-target="#myModal" data-whatever="@EditCommento-'+commento.id+'">'+
						  '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit'+
						'</button>';
				}
				var ora=commento.data.split(' ')[1].split(":");
				var ora=ora[0]+":"+ora[1];
				var data=ora+' '+toHRData(commento.data.split(' ')[0]);
				$("#commenti").append(
							'<div class="media" id="commento'+commento.id+'">'+
							  '<div class="media-left">'+
								'<a href="#">'+
									'<img src="archive/photo/'+commento.photo+'" width=64 height=64 />'+
									'<p class="userName">'+commento.username+'</p>'+
								'</a>'+
							  '</div>'+
							  '<div class="media-body">'+
								'<h4 class="media-heading"><span class="titolo">'+commento.titolo+'</span> <span class="rightText">'+data+'</span></h4>'+
								'<article class="post">'+
									post+
								'</article>'+
								edit+
							  '</div>'+
							'</div>'
				);
			});
			eventScout(id);
	});
}
function eventScout(id){
	$(".editInfo").click(function(){
		$(".buttonField").show();
		$(".editInfo").hide();
		var field=["#nome","#cognome","#codice","#indirizzo","#datanascita","#residenza","#sesso","#luogonascita","#cap","#provincia","#nazione","#numbabbo","#nummamma","#numcasa","#numcell","#numnonno","#mailbabbo","#mailmamma","#mail"];
		for(var i=0;i<field.length;i++){
			$(field[i]).replaceWith(function(){
				var val=$(this).text();
				var id=$(this).attr("id");
				return '<input type="text" id="'+id+'" value="'+val+'" />';
			}); 
		}
	});
	$(".editSentiero").click(function(){
		location.href="sentiero.php?id="+id;
	});
	$("#confirmChange").click(function(){
		var field=["#nome","#cognome","#codice","#indirizzo","#datanascita","#residenza","#sesso","#luogonascita","#cap","#provincia","#nazione","#numbabbo","#nummamma","#numcasa","#numcell","#numnonno","#mailbabbo","#mailmamma","#mail"];
		var dati={};
		dati['id']=id;
		for(var i=0;i<field.length;i++){
			var dato=$(field[i]).val();
			dati[field[i].slice(1)]=dato;
			if(i==4){//DATANASCITA
				dati[field[i].slice(1)]=toDBData(dato);
			}
		}
		dati['idsquadriglie']=$("#idsquadriglie").val();
		$.post("php/updateScout.php",dati,function(data){
			if(data==202){
				$(".buttonField").hide();
				$(".editInfo").show();
				var field=["#nome","#cognome","#codice","#indirizzo","#datanascita","#residenza","#sesso","#luogonascita","#cap","#provincia","#nazione","#numbabbo","#nummamma","#numcasa","#numcell","#numnonno","#mailbabbo","#mailmamma","#mail"];
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
		var field=["#nome","#cognome","#codice","#indirizzo","#datanascita","#residenza","#sesso","#luogonascita","#cap","#provincia","#nazione","#numbabbo","#nummamma","#numcasa","#numcell","#numnonno","#mailbabbo","#mailmamma","#mail"];
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
	  if(recipient.indexOf("EditCommento")!=-1){
		  var idCommento=recipient.split('-')[1];
		  editCommentoModal(id,modal,idCommento);
	  }
	});
	
	
	$("#abbandonato").click(function(){
		changeStatus(id,2,"abbandonato");
	});
	$("#passaggi").click(function(){
		changeStatus(id,1,"passaggi");
	});
	
    $(".editPhoto").click(function(){
		$(".photo").hide();
		$(".editPhoto").hide();
		$('#eventi-form').show();
	});
	$('#eventi-form').submit( function( e ) {
		console.log("Evento triggerato");
		$.ajax( {
		  url: 'php/upload.php?id='+id,
		  type: 'POST',
		  data: new FormData( this ),
		  processData: false,
		  contentType: false,
		  success: function(data){
			  console.log(data);
			  location.reload();
			}
		} );
		e.preventDefault();
	  } );
}

function changeStatus(idScout,status,statusName){
	var risp = prompt('Vuoi cambiare lo stato questo Ragazzo in '+statusName+'?\nIl processo è irreversibile!!!\nPer favore digita Si', "No");
	if ((risp == "si")||(risp == "Si")) {
		$.post('php/setStatusScout.php',{'idScout':idScout,'status':status},function(data){
			if(data==201){
				console.log("CHANGED 4EVA! ");
				location.href="index.html";
			}
		});
	}
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
function editCommentoModal(id,modal,idCommento){
	
	var titolo=$("#commento"+idCommento).find('.titolo').text();
	var post=$("#commento"+idCommento).find('.post').text();
	modal.find('.modal-title').html("Scrivi un commento");
	modal.find('.modal-body').html('<p class="space"><label>Titolo: </label> <input id="titolo" type="text" placeholder="Chiacchierata" value="'+titolo+'"/></p>'+
									'<label>Corpo: </label><br /> <textarea id="commento" type="text" placeholder="-testo-" >'+post+'</textarea><span class="rightText"><span id="counter">0</span><span>/500</span></span>');
	
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
	  editCommento(idCommento,id,titolo,commento);
	});
}
function addNuovaSpec(id,idSpec,maestro){
	$.post("php/addSpec.php",{"id":id,"idS":idSpec,"maestro":maestro},function(data){
		if(data=="201"){
			$('#myModal').modal('hide');
			location.reload();
		}
	});
}
function addNuovoBrev(id,idBrev,maestro){
	$.post("php/addBrev.php",{"id":id,"idB":idBrev,"maestro":maestro},function(data){
		if(data=="201"){
			$('#myModal').modal('hide');
			location.reload();
		}
	});
}
function addCommento(id,titolo,commento){
	$.post("php/addCommento.php",{"id":id,"titolo":titolo,"commento":commento},function(data){
		if(data=="201"){
			$('#myModal').modal('hide');
			location.reload();
		}
	});
}
function editCommento(id,idScout,titolo,commento){
	$.post("php/editCommento.php",{"id":id,"idScout":idScout,"titolo":titolo,"commento":commento},function(data){
		if(data=="202"){
			$('#myModal').modal('hide');
			location.reload();
		}
	});
}
