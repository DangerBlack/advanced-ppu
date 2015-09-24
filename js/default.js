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
										'<td><img class="preview edit" src="archive/photo/'+scout.photo+'" /></td>'+
										'<td>'+scout.cognome+'</td>'+
										'<td>'+scout.nome+'</td>'+
										'<td>'+scout.codice+'</td>'+
										'<td>'+'<a href="https://www.google.it/maps/place/'+scout.indirizzo.replace(/ /g,"+")+"+"+scout.residenza.replace(/ /g,"+")+'" target="_blank">'+ scout.indirizzo+'</a>'+'</td>'+
										'<td>'+scout.residenza+'</td>'+
										'<td>'+toHRData(scout.datanascita)+'</td>'+
										'<td>'+scout.sesso+'</td>'+
										'<td><button type="button" class="btn btn-info edit"><span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</button></td></tr>');
		});
		
		var column=[];
		if(isMobile()){
			column=[
				{
					"targets": [ 1 ],
					"visible": false
				},
				{
					"targets": [ 2 ],
					"visible": false
				},
				{
					"targets": [ 3 ],
					"visible": false
				},
				{
					"targets": [ 5 ],
					"visible": false
				},
				{
					"targets": [ 6 ],
					"visible": false
				},
				{
					"targets": [ 7 ],
					"visible": false
				}
			];
		}
		$('#tabellaRagazzi').DataTable({
					"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
					"pageLength": -1,
					"columnDefs":column
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
function isMobile(){
	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true
   return isMobile; 
}
