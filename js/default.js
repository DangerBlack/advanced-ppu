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
										'<td>'+'<a href="https://www.google.it/maps/place/'+scout.indirizzo.replace(/ /g,"+")+"+"+scout.residenza.replace(/ /g,"+")+'" target="_blank">'+ scout.indirizzo+'</a>'+'</td>'+
										'<td>'+scout.residenza+'</td>'+
										'<td>'+scout.datanascita+'</td>'+
										'<td>'+scout.sesso+'</td>'+
										'<td><button type="button" class="btn btn-info edit"><span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</button></td></tr>');
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


/*Some usefull function*/
