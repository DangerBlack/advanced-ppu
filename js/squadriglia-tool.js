function initSqTool(){
	$.get('php/getSquadriglie.php',function(data){
		var js=JSON.parse(data);
		for(var i=0;i<js.length;i++){
			$("#listaSq").append('<li>'+
									
									'<span class="colorbox primary" style="background-color:#'+js[i].colore1+'"></span>'+
									'<span class="colorbox secondary" style="background-color:#'+js[i].colore2+'"></span> '+
									'<label class="sqname">'+js[i].nome+'</label> '+
									'<button type="button" class="btn btn-xs btn-info" aria-label="Right Align" data-toggle="modal" data-target="#myModal" data-whatever="@EditSquadriglia-'+js[i].idsquadriglie+'">'+
										'<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> <span class="">Edit</span>'+
									'</button> '+ 
								'</li>');
		}
		$('#myModal').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget);
		  var recipient = button.data('whatever');
		  var modal = $(this);
		  //alert(recipient);
		  if(recipient=="@addSquadriglia"){
			addSquadriglia(modal);
		  }
		  if(recipient.indexOf("EditSquadriglia")!=-1){
			  var idSq=recipient.split('-')[1];
			  console.log(idSq);
			  editSquadriglia(js,idSq,modal);
		  }
		});
	});
}

function addSquadriglia(modal){
	modal.find('.modal-title').html("Aggiungi una squadriglia");
	modal.find('.modal-body').html('<p class="space"><label>Nome: </label> <input id="sqName" type="text" placeholder="Paguri" /></p>'+
									'<p class="space"><label>Sesso:</label><select id="sesso"><option value="M">Maschile</option><option value="F">Femminile</option></select></p>'+
									'<label>Colore Primario: </label>'+
									'<div class="input-group colore1">'+
										'<input id="colore1" type="text" value="" class="form-control" placeholder="#FFFFF"/>'+
										'<span class="input-group-addon"><i></i></span>'+
									'</div>'+
									'<label>Colore Secondario: </label>'+
									'<div class="input-group colore2">'+
										'<input id="colore2" type="text" value="" class="form-control" placeholder="#FFFFF"/>'+
										'<span class="input-group-addon"><i></i></span>'+
									'</div>'
									);
	$('.colore1').colorpicker();
	$('.colore2').colorpicker();
	$("#send").click(function(){
	  var nome=$("#sqName").val();
	  var sesso=$("#sesso").val();
	  var colore1=$("#colore1").val().slice(1);
	  var colore2=$("#colore2").val().slice(1);
	  sendAddSquadriglia(nome,sesso,colore1,colore2);
	});
}
function editSquadriglia(js,id,modal){
	for(var i=0;i<js.length;i++){
		console.log(js[i].idsquadriglia+" "+id);
		if(js[i].idsquadriglie==id){
			modal.find('.modal-title').html("Aggiungi una squadriglia");
			modal.find('.modal-body').html('<p class="space"><label>Nome: </label> <input id="sqName" type="text" placeholder="Paguri" value="'+js[i].nome+'"/></p>'+
											'<p class="space"><label>Sesso:</label><select id="sesso"><option '+ifGetSelected(js[i].sesso,"M")+'value="M">Maschile</option><option '+ifGetSelected(js[i].sesso,"F")+'value="F">Femminile</option></select></p>'+
											'<label>Colore Primario: </label>'+
											'<div class="input-group colore1">'+
												'<input id="colore1" type="text" value="'+js[i].colore1+'" class="form-control" placeholder="#FFFFF"/>'+
												'<span class="input-group-addon"><i></i></span>'+
											'</div>'+
											'<label>Colore Secondario: </label>'+
											'<div class="input-group colore2">'+
												'<input id="colore2" type="text" value="'+js[i].colore2+'" class="form-control" placeholder="#FFFFF"/>'+
												'<span class="input-group-addon"><i></i></span>'+
											'</div>'
											);
			$('.colore1').colorpicker();
			$('.colore2').colorpicker();
			$("#send").click(function(){
			  var nome=$("#sqName").val();
			  var sesso=$("#sesso").val();
			  var colore1=$("#colore1").val().slice(1);
			  var colore2=$("#colore2").val().slice(1);
			  sendUpdateSquadriglia(id,nome,sesso,colore1,colore2);
			});
		}
	}
}
function ifGetSelected(sessoSq,sesso){
	if(sessoSq==sesso)
		return 'selected="selected"';
	return '';
}
function sendAddSquadriglia(nome,sesso,colore1,colore2){
	$.post("php/addSquadriglia.php",{"nome":nome,"sesso":sesso,"colore1":colore1,"colore2":colore2},function(data){
		if(data==201){
			location.reload();
		}
	});
}
function sendUpdateSquadriglia(idsquadriglie,nome,sesso,colore1,colore2){
	$.post("php/updateSquadriglia.php",{"idsquadriglie":idsquadriglie,"nome":nome,"sesso":sesso,"colore1":colore1,"colore2":colore2},function(data){
		if(data==201){
			location.reload();
		}
	});
}
