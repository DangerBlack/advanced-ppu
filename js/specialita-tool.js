function initSpecialitaTool(){
	$.get("php/getListaSpech.php",function(data){
		var js=JSON.parse(data);
		disponiPerSpec(js);
	});
}

function disponiPerSpec(js){
	var datamining=new Array();
	
	for(var i=0;i<js.length;i++){
			if ($("#spec"+js[i].idspecialita).length) {
			   
			} else {
				$("#elencoSpecialita").append('<tr id="spec'+js[i].idspecialita+'"><td class="img"></td><td class="nome"></td><td class="conquistatori"></td><td class="cammino"></td></tr>');
				$("#spec"+js[i].idspecialita).children(".nome").html(''+js[i].sname+' <span class="badge" id="badge'+js[i].sname+'">4</span>');
				$("#spec"+js[i].idspecialita).children(".img").append('<img src="archive/'+js[i].sphoto+'" width="50" />');
				
				datamining[js[i].sname]=0;
			}
			//$("#spec"+js[i].idspecialita).children(".conquistatori").append('<a href="scout.php?id='+js[i].idscout+'">'+js[i].nome+' '+js[i].cognome+'</a> '); //solo nomi
			var dove="conquistatori"
			if(js[i].conquistata==true){
				dove="conquistatori";
				datamining[js[i].sname]+=1;
			}else{
				dove="cammino";
			}
			
			$("#spec"+js[i].idspecialita).children("."+dove).append('<a href="scout.php?id='+js[i].idscout+'"><img src="archive/photo/'+js[i].photo+'" width="50" alt="'+js[i].nome+' '+js[i].cognome+'" title="'+js[i].nome+' '+js[i].cognome+' - '+js[i].maestro+'"/></a> ');//solo photo
	}
	$("#datamining").html("<ul></ul>");
	var q=new Array();
	for(key in datamining){
		q.push({name:key,val:datamining[key]});
	}
	//q.sort(function(a,b){return b.val-a.val});
	
	for(key in q){
		$("#datamining").children('ul').append('<li>'+q[key].name+': '+q[key].val+'</li>');
		console.log(q[key].name);
		$("#badge"+q[key].name).text(q[key].val);
		//alert(key+" "+datamining[key]);
	}
	
	$('#tabellaSpecialita').DataTable({
		"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
		"pageLength": -1
	}); 
}
