function Metodo(id){
	this.id=id;
	this.point=0;
	this.trouble=[];
	
	
	this.min_number_of_impegni=2;//4 per i gruppi consolidati
}

/**
 *Semantica dei punteggi 
 * +1 cosa positiva
 * +2 cosa molto positiva
 * +3 eccezionale veramente
 * -1 cosa da evitare
 * -2 cosa molto grave
 * -3 disastro metodologico
 **/
Metodo.prototype.addTrouble=function(level,text){
	this.trouble.push('<p class="trouble-level-'+level+'">'+text+' <span class="badge">-'+level+'</span></p>');
}
Metodo.prototype.punteggioTappa=function(datanascita,tappa){
		datanascita=parseInt(datanascita);
		var d = new Date();
		var anno = d.getFullYear();
		if(anno-datanascita-tappa.idtappe<=13){//TODO FARE I CONTI BENE!
			this.point+=2;
		}else{
			this.point-=anno-datanascita-tappa.idtappe-12;
			console.log(this.point);
			this.addTrouble(Math.abs(anno-datanascita-tappa.idtappe-12),"Ragazzo indietro rispetto alle mete");
		}		
		if(tappa.mete.length>this.min_number_of_impegni){
			this.point+=tappa.mete.length-this.min_number_of_impegni;
		}else{
			this.point--;
			this.addTrouble(1,"Il ragazzo ha preso troppi pochi impegni per raggiungere la tappa della "+tappa.nome);
		}
		if(tappa.mete.lenght==0){
			this.addTrouble(3,"Il ragazzo non ha preso impegni per raggiungere la tappa della "+tappa.nome);
			this.point-=3;
		}
	}

Metodo.prototype.punteggioNoSpecialita=function(datanascita){
	datanascita=parseInt(datanascita)
	var d = new Date();
	var anno = d.getFullYear();
	if(anno-datanascita>15){
		this.addTrouble(3,"Il ragazzo è al quarto anno e non ha nessuna specialità!");
		this.point-=3;
	}
	if(anno-datanascita==14){
		this.addTrouble(3,"Il ragazzo è al terzo anno e non è in cammino per nessuna specialità!");
		this.point-=3;
	}
	if(anno-datanascita==13){
		this.addTrouble(1,"Il ragazzo è al secondo anno e non è in cammino per nessuna specialità!");
		this.point-=3;
	}
}	
Metodo.prototype.punteggioSpecialita=function(datanascita,specialita,numImpegni){
	datanascita=parseInt(datanascita)
	var d = new Date();
	var anno = d.getFullYear();
	if(specialita.conquistata==1){
		this.point+=2;
	}
	else{
		if(anno-datanascita>14){
			this.point-=1;
			this.addTrouble(1,'Il ragazzo è al quarto anno e dovrebbe occuparsi della tappa della responsabilità e non di prendere '+specialita.nome+'!');
		}
		if(numImpegni>2){
			this.point+=2;
		}else{
			this.point-=1;
			this.addTrouble(1,"Il ragazzo ha preso troppi pochi impegni per raggiungere la specialità di "+specialita.nome);
		}
		if(numImpegni==0){
			this.point-=3;
			this.addTrouble(3,"Il ragazzo non ha preso impegni per raggiungere la specialità di "+specialita.nome);
		}		
	}
}
Metodo.prototype.punteggioNoBrevetti=function(datanascita){
	datanascita=parseInt(datanascita)
	var d = new Date();
	var anno = d.getFullYear();
	if(anno-datanascita>15){
		this.addTrouble(3,"Il ragazzo è al quarto anno e non ha nessun brevetto!");
		this.point-=3;
	}
	if(anno-datanascita>=13){
		this.addTrouble(3,"Il ragazzo è al terzo anno e non è in cammino per nessun brevetto!");
		this.point-=3;
	}
	if(anno-datanascita==12){
		this.addTrouble(1,"Il ragazzo dovrebbe cominciare a pensare al suo brevetto!");
		this.point-=3;
	}
}	
Metodo.prototype.punteggioBrevetto=function(datanascita,brevetto,numImpegni){
	datanascita=parseInt(datanascita)
	var d = new Date();
	var anno = d.getFullYear();
	if(brevetto.conquistata==1){
		this.point+=3;
	}
	else{
		if(anno-datanascita>14){
			this.point-=2;
			this.addTrouble(2,'Il ragazzo è al quarto anno e dovrebbe occuparsi della tappa della responsabilità e non di prendere '+brevetto.nome+'!');
		}
		if(numImpegni>2){
			this.point+=2;
		}else{
			this.point-=1;
			this.addTrouble(1,"Il ragazzo ha preso troppi pochi impegni per raggiungere il brevetto di "+brevetto.nome);
		}
		if(numImpegni==0){
			this.point-=3;
			this.addTrouble(3,"Il ragazzo non ha preso impegni per raggiungere il brevetto di "+brevetto.nome);
		}		
	}
}
Metodo.prototype.toHtml=function(){
	var s='';
	s+='Punteggio Metodologico: '+this.point;
	s+='<ul>';
	for(var i=0;i<this.trouble.length;i++){
		s+='<li>'+this.trouble[i]+'</li>';
	}
	s+='</ul>';
	return s;
}
