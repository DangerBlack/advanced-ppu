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
function init(){
	isLogged();
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
										'<td>'+toHRData(scout.datanascita)+'</td>'+
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


function isLogged(){
	$.post("php/login.php",function(data){
		if(data==200){
			$(".dropdown-menu").append('<li role="separator" class="divider"></li>'+
			'<li><a href="#" onclick="logout()"><span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span> Logout</a></li>');
		}else{
			location.replace("login.html");
		}
	});
}
function logout(){
	$.post("php/logout.php",function(data){
		if(data==200){
			location.replace("login.html");
		}else{
			
		}
	});
}



//FUNZIONALITA AGGIUNTIVE
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

function wrapUrlPost(post){
	post=post.replace(/(https?:\/\/)?[a-z0-9.]*\.[a-z0-9#\/?=]+/gi,function(x){
		var url=x;
		if(url.indexOf("http")!=0){
			url="http://"+url;
		}
		return '<a href="'+url+'" target="_blank" >'+x+'</a>';
	});
	return post;
}

function toHRData(data){
	if(data!=null){
		var split=data.split('-');
		if(split.length==3)
			return split[2]+'/'+split[1]+'/'+split[0];
	}
	return '';
}
function toDBData(data){
	if(data!=null){
		console.log(data);
		var split=data.split("/");	
		if(split.length==3){
			data=split[2]+'-'+split[1]+'-'+split[0];
			console.log(data);
			return data;
		}
	}
	return '';
}
