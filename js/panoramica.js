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
function initPanoramica(){
	
	$.get("php/getScoutList.php",function(data){
		var js=JSON.parse(data);
		situazione=[];
		caricaScout(js,0);
	});
	
}

function caricaScout(lista,index){
	if(index<lista.length){
		$.post("php/getScout.php",{"id":lista[index].idscout},function(data){
			var js=JSON.parse(data);
			mostraScout(js[0]);
			caricaScout(lista,index+1);
		});
	}else{
		//fine caricamento
		mostraSituazione(lista);
	}
}
function mostraScout(scout){
	var valmet=new Metodo(scout.idscout);//valutazione metodologica
	console.log("Mi occupo di:"+scout.idscout);
	var max=-1;
	var idmax=-1;
	var listaImpegni="";
	var nometappa=""; 
	try{
		for(var i=scout.tappe.length-1;i>=0;i--){
			console.log("Guardo tappa alla posizione:"+i);
			if((scout.tappe[i].conquistata==0)&&(scout.tappe[i].idtappe>idmax)){
				console.log("deve ancora prenderla");
				max=i;
				idmax==scout.tappe[i].idtappe;
			}
		}
		
		if(max!=-1){
			for(var j=0;j<scout.tappe[max].mete.length;j++){
				listaImpegni+='<li>'+scout.tappe[max].mete[j].meta+'</li>';
			}	
			nometappa=scout.tappe[max].nome;
			valmet.punteggioTappa(scout.datanascita,scout.tappe[max]);
		}else{
			nometappa="Cammino Concluso";
			listaImpegni="--";
		}
	}catch(e){
		console.log(e);
		console.log("incongruenza del db su: "+scout.id+" "+scout.nome+" "+scout.cognome);
	}
	if(listaImpegni=="")
		listaImpegni="<li>Sembra non si sia preso alcun impegno!</li>";
	
	var listaSpecialita="";	
	var listaSpecialitaInConquista="";
	if(scout.specialita.length==0)
		valmet.punteggioNoSpecialita(scout.datanascita);
	$.each(scout.specialita,function(e,spec){//TODO: piccole modifice da scout.js si può fattorizzare
		var count=0;
		var concat='';
		for(var i=0;i<spec['impegni'].length;i++){
			count++;
			concat+=spec['impegni'][i].impegno +'<br />';					
		}
		valmet.punteggioSpecialita(scout.datanascita,spec,count);
		if(spec.conquistata!=0)
			listaSpecialita+=('<li class="spec" value="'+spec.idspecialita+'" ><a href="#" data-toggle="tooltip" data-placement="bottom"'+
											   'title="" data-html="true" data-original-title="'+concat+'"'+
											   'class="info-tooltip">'+
											'<img src="archive/'+spec.immagine+'" />'+
											'<p>'+spec.nome+' <span class="badge">'+count+'</span></p>'+
											'</a>'+
										'</li>');
		else
			listaSpecialitaInConquista+=('<li class="spec" value="'+spec.idspecialita+'"><a href="#" data-toggle="tooltip" data-placement="bottom"'+
											   'title="" data-html="true" data-original-title="'+concat+'"'+
											   'class="info-tooltip">'+
											'<img src="archive/'+spec.immagine+'" />'+
											'<p>'+spec.nome+' <span class="badge">'+count+'</span></p>'+
											'</a>'+
										'</li>');
	});
	var listaBrevetti="";
	var listaBrevettiInConquista="";
	if(scout.brevetti.length==0)
		valmet.punteggioNoBrevetti(scout.datanascita);
	$.each(scout.brevetti,function(e,brev){//TODO: piccole modifice da scout.js si può fattorizzare
				var count=0;
				var concat='';
				for(var i=0;i<brev['impegni'].length;i++){
					count++;
					concat+=brev['impegni'][i].impegno +'<br />';					
				}
				valmet.punteggioBrevetto(scout.datanascita,brev,count);
				if(brev.conquistata!=0)
					listaBrevetti+=('<li class="brev" value="'+brev.idbrevetti+'"><a href="#" data-toggle="tooltip" data-placement="bottom"'+
													   'title="" data-html="true" data-original-title="'+concat+'"'+
													   'class="info-tooltip">'+
													'<img src="archive/'+brev.immagine+'" />'+
													'<p>'+brev.nome+' <span class="badge">'+count+'</span></p>'+
													'</a>'+
												'</li>');
				else
					listaBrevettiInConquista+=('<li class="brev" value="'+brev.idbrevetti+'"><a href="#" data-toggle="tooltip" data-placement="bottom"'+
													   'title="" data-html="true" data-original-title="'+concat+'"'+
													   'class="info-tooltip">'+
													'<img src="archive/'+brev.immagine+'" />'+
													'<p>'+brev.nome+' <span class="badge">'+count+'</span></p>'+
													'</a>'+
												'</li>');
			});		
	$("#panoramica").append('<div class="panel panel-default">'+
							  '<div class="panel-heading">'+scout.nome+" "+scout.cognome+'</div>'+
							  '<div class="panel-body">'+
								'<div class="row">'+
									'<div class="col-lg-4">'+
										'<img class="photo" src="archive/photo/'+scout.photo+'" />'+
										'<p>'+toHRData(scout.datanascita)+'</p>'+
									'</div>'+
									'<div class="col-lg-8">'+
										'<p>Impegni per la tappa della <i><b>'+nometappa+'<b/></i>:<p>'+
										'<ul >'+listaImpegni+'</ul>'+
									'</div>'+
								'</div>'+
								'<div class="row">'+
									'<div class="col-lg-6">'+
										'<p>Elenco <i><b>Specialità<b/></i>:<p>'+
										'<ul class="listaVuota Specialita">'+listaSpecialita+'</ul>'+
									'</div>'+
									'<div class="col-lg-6">'+
										'<p>Elenco <i><b>Specialita in Conquista<b/></i>:<p>'+
										'<ul class="listaVuota Specialita">'+listaSpecialitaInConquista+'</ul>'+
									'</div>'+
								'</div>'+
								'<div class="row">'+
									'<div class="col-lg-6">'+
										'<p>Elenco <i><b>Brevetti<b/></i>:<p>'+
										'<ul class="listaVuota Brevetti">'+listaBrevetti+'</ul>'+
									'</div>'+
									'<div class="col-lg-6">'+
										'<p>Elenco <i><b>Brevetti in Conquista<b/></i>:<p>'+
										'<ul class="listaVuota Brevetti">'+listaBrevettiInConquista+'</ul>'+
									'</div>'+
								'</div>'+
								'<div class="row">'+
									'<div class="col-lg-12">'+
										valmet.toHtml()+
									'</div>'+
								'</div>'+
							  '</div>'+
							'</div>');
	situazione.push(valmet);
	console.log('aggiunto');
}

function mostraSituazione(lista){
	if(situazione.length==0){
		return false;
	}
	console.log(situazione);
	situazione.sort(function(a, b){return a.point-b.point});
	
	var problemi="";
	for(var i=0;i<5;i++){
		var scout=findInLista(situazione[i].id,lista);
		problemi+=('<li><a href="scout.php?id='+situazione[i].id+'">'+scout.nome+" "+scout.cognome+' <span class="badge">'+situazione[i].point+'</span></a></li>');
	}
	var top="";
	for(var i=situazione.length-1;i>=situazione.length-5;i--){
		var scout=findInLista(situazione[i].id,lista);
		top+=('<li><a href="scout.php?id='+situazione[i].id+'">'+scout.nome+" "+scout.cognome+' <span class="badge">'+situazione[i].point+'</span></a></li>');
	}
	$("#panoramica").prepend('<div class="panel panel-default">'+
									'<div class="panel-heading">'+scout.nome+" "+scout.cognome+'</div>'+
									'<div class="panel-body">'+
										'<div class="row">'+
											'<div class="col-lg-6">'+
												'<p>Individuati fattori di rischio nei seguenti ragazzi:</p>'+
												'<ul>'+
													problemi+
												'</ul>'+
											'</div>'+
											'<div class="col-lg-6">'+
												'<p>Individuati i ragazzi più attivi:</p>'+
												'<ul>'+
													top+
												'</ul>'+
											'</div>'+
										'</div>'+
									'</div>'+
							'</div>');
}

function findInLista(id,lista){
	for(var i=0;i<lista.length;i++){
		if(id==lista[i].idscout)
			return lista[i];
	}
}
