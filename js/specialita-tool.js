/**
	Copyright 2015 Daniele Baschieri
	version: 1.0
	
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
function initSpecialitaTool(){
	$.get("php/getListaSpech.php",function(data){
		var js=JSON.parse(data);
		disponiPerSpec(js);
		$('#tabellaSpecialita').DataTable({
			"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
			"pageLength": -1
		}); 
	});
}

function disponiPer(who){
	$.get("php/getListaSpech.php",function(data){
		var js=JSON.parse(data);	
		switch(who){
			case 1:
				disponiPerSpec(js);
			break;
			case 2:
				disponiPerPersona(js);
			break;
			case 3:
				disponiPerAnno(js);
			break;
		}
	});
}

function disponiPerSpec(js){
	$("#tabellaSpecialita").find('thead').html('<tr>'+
													'<th>Foto</th>'+
													'<th>Nome</th>'+
													'<th>Conquistatori</th>'+
													'<th>In Cammino</th>'+
												'</tr>');
	$("#tabellaSpecialita").find('tfoot').html('<tr>'+
													'<th>Foto</th>'+
													'<th>Nome</th>'+
													'<th>Conquistatori</th>'+
													'<th>In Cammino</th>'+
												'</tr>');
	$("#elencoSpecialita").html('');
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
		$("#badge"+q[key].name).text(q[key].val);
		//alert(key+" "+datamining[key]);
	}
}

function disponiPerPersona(js){
	$("#tabellaSpecialita").find('thead').html('<tr>'+
									'<th>photo</th>'+
									'<th>nome</th>'+
									'<th>specialità</th>'+
									'<th>in cammino</th>'+
									'<th>Suggerimenti</th>'+
								'</tr>');
	$("#tabellaSpecialita").find('tfoot').html('<tr>'+
									'<th>photo</th>'+
									'<th>nome</th>'+
									'<th>specialità</th>'+
									'<th>in cammino</th>'+
									'<th>Suggerimenti</th>'+
								'</tr>');
		$("#elencoSpecialita").html('');
		for(var i=0;i<js.length;i++){
			if ($("#scout"+js[i].idscout).length) {
			}else{
				   $("#elencoSpecialita").append('<tr id="scout'+js[i].idscout+'"><td class="img"></td><td class="nome"></td><td class="specialita"></td><td class="cammino"></td><td class="sugg"><button type="button" class="btn btn-xs btn-primary suggerimenti" value="'+js[i].idscout+'">Suggerimenti</button><div class="lista" style="display:none;"></div></td></tr>');
				   $("#scout"+js[i].idscout).children(".nome").html(''+js[i].nome+' '+js[i].cognome);
				   $("#scout"+js[i].idscout).children(".img").append('<img src="archive/photo/'+js[i].photo+'" width="50" />');
			}
			if(js[i].conquistata==true){
				 $("#scout"+js[i].idscout).children(".specialita").append('<img src="archive/'+js[i].sphoto+'" width="50" alt="'+js[i].sname+'" title="'+js[i].sname+'" /> ');
			}else{
				 $("#scout"+js[i].idscout).children(".cammino").append('<img src="archive/'+js[i].sphoto+'" width="50" alt="'+js[i].sname+'" title="'+js[i].sname+'" /> ');
			}
			$("#scout"+js[i].idscout).children(".sugg").children("div").append(js[i].sname+",");
		}
		$(".suggerimenti").on("click",function(){
			
			var id=$(this).val();
			suggerisciCompetenza($(this).next('div').text(),id);
		});
}

function disponiPerAnno(js){
		$("#tabellaSpecialita").find('thead').html('<tr>'+
								'<th>anno</th>'+
								'<th>specialità</th>'+
								'<th>in conquista</th>'+
							'</tr>');
		$("#tabellaSpecialita").find('tfoot').html('<tr>'+
								'<th>anno</th>'+
								'<th>specialità</th>'+
								'<th>in conquista</th>'+
							'</tr>');
		$("#elencoSpecialita").html('');
		var d = new Date();
		var n = d.getFullYear(); 
		var anno=n;
		var datamining=new Array();
		for(var i=anno-16;i<anno-11;i++){
			$("#elencoSpecialita").append('<tr id="anno'+i+'"><td class="anno"></td><td class="spec"></td><td class="cammino"></tr>');
			$("#anno"+i).children(".anno").html(i);
			datamining[i]=new Array();
			datamining[i].p=0;
			datamining[i].np=0;
		}
		for(var i=0;i<js.length;i++){
			var datausabile=js[i].datanascita.split('-')[0];
			if ($("#anno"+datausabile).length) {
			}else{
				   $("#elencoSpecialita").append('<tr id="anno'+js[i].datanascita.split('-')[0]+'"><td class="anno"></td><td class="spec"></td><td class="cammino"></tr>');
				   $("#anno"+js[i].datanascita.split('-')[0]).children(".anno").html(js[i].datanascita.split('-')[0]);
			}
			if(js[i].conquistata==true){
				$("#anno"+js[i].datanascita.split('-')[0]).children(".spec").append('<img src="archive/'+js[i].sphoto+'" width="50" alt="'+js[i].sname+'" title="'+js[i].sname+' '+js[i].nome+' '+js[i].cognome+'" /> ');
				try{
					datamining[js[i].datanascita.split('-')[0]].p+=1;
				}catch(e){
					console.log('out of range');
				}
			}else{
				$("#anno"+js[i].datanascita.split('-')[0]).children(".cammino").append('<img src="archive/'+js[i].sphoto+'" width="50" alt="'+js[i].sname+'" title="'+js[i].sname+' '+js[i].nome+' '+js[i].cognome+'" /> ');
				try{
					datamining[js[i].datanascita.split('-')[0]].np+=1;
				}catch(e){
					console.log('out of range');
				}
			}
			
		}
		$("#datamining").html("<ul></ul>");
		for(var i=anno-16;i<anno-11;i++){						
			$("#datamining").children('ul').append('<li>'+i+' '+datamining[i].p+'/'+datamining[i].np+'</li>');
		}
}


function suggerisciCompetenza(specialita,id){
	var lspe=specialita.split(',');
	$.get('php/getSpecialitaCollegate.php?idBrev=*',function(data){
		var js=JSON.parse(data);
		
		var lcom=new Array();
		for(var i=0;i<js.length;i++){
			lcom[i]=new Array();
		}
		for(var i=0;i<js.length;i++){
			for(var j=0;j<lspe.length;j++){
				var co=js[i].specialita;
				var ca=lspe[j];
				if((ca!="")&&(findSpec(co,ca)>-1)){
					lcom[i].push(ca);
				}
			}					
		}
		$("#scout"+id).children('.sugg').html('');
		max=-1;
		for(var i=0;i<js.length;i++){
			if(lcom[i].length>max)max=lcom[i].length;
		}
		for(var i=0;i<js.length;i++){
			if(lcom[i].length>(max-1))
			$("#scout"+id).children('.sugg').append('<p><span title="'+concatena(lcom[i])+'">'+js[i].nome+': '+lcom[i].length+'</span></p>');
		}
		
	});
}
function findSpec(lspecialita,specialita){
	for(var i=0;i<lspecialita.length;i++){
		if(lspecialita[i].nome==specialita)
			return i;
	}
	return -1;
}
function concatena(lcom){
	var s="";
	for(var i=0;i<lcom.length;i++)
		s+=lcom[i]+", ";
	return s;
}
function cfl(string)
{
	return string.charAt(0).toUpperCase() + string.slice(1);
}
