function initSettings(){
    var memBranca=4;
    var memRuolo=4;
    $(".error-message").hide();

    $(".editPhoto").click(function(){
        $(".photo").hide();
        $(".editPhoto").hide();
        $('#eventi-form').show();
    });
    $('#eventi-form').submit( function( e ) {
        console.log("Evento triggerato");
        $.ajax( {
          url: 'php/uploadPhotoUser.php',
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

    $.get("php/getUserInfo.php",function(data){
        var js=JSON.parse(data);
        $(".photo").attr("src","archive/photo/"+js[0].photo);
        $("#user").val(js[0].utente);
        $("#email").val(js[0].email);
        memBranca=js[0].branca;
        memRuolo=js[0].ruolo;
        $("#ruolo").html(getRuoloSelect(js[0].ruolo));
        $("#branca").html(getBrancaSelect(js[0].ruolo,js[0].branca));
    });
    $(".updatePswd").click(function(){
        var pswd=hex_sha1($("#oldpswd").val());
        var newpswd=hex_sha1($("#newpswd").val());
        var confirmpswd=hex_sha1($("#confirmpswd").val());
        if(newpswd!=confirmpswd){
            $(this).parent().find(".error-message").html('<p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span> le password non combaciano!</p>');
            $(this).parent().find(".error-message").show();
        }else{
            $.post('php/updatePswd.php',{'pswd':pswd,'newpswd':newpswd},function(data){
                if(data!=202){
                    $(this).parent().find(".error-message").html('<p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span> impossibile completare l\'operazione!</p>');
                    $(this).parent().find(".error-message").show();
                }else{
                    $(this).parent().find(".error-message").hide();
                    $("#oldpswd").val('');
                    $("#newpswd").val('');
                    $("#confirmpswd").val('');
                    location.reload();
                }
            });
        }
    });

    $(".updateInfo").click(function(){
        var utente=$("#user").val();
        var email=$("#email").val();
        var ruolo=$("#ruolo").val();
        var branca=$("#branca").val();
        if((utente=="")||(email=="")){
            $(this).parent().find(".error-message").html('<p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span> La mail o la password non sono stati definiti!</p>');
            $(this).parent().find(".error-message").show();
        }else{
            $.post('php/updateUserInfo.php',{'utente':utente,'email':email,'ruolo':ruolo,'branca':branca},function(data){
                if(data!=202){
                    $(this).parent().find(".error-message").html('<p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span> impossibile completare l\'operazione!</p>');
                    $(this).parent().find(".error-message").show();
                }else{
                    //location.reload();
                }
            });
        }
    });

    $('#myModal').on('show.bs.modal', function (event) {
          var button = $(event.relatedTarget) // Button that triggered the modal
          var recipient = button.data('whatever') // Extract info from data-* attributes
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
          var modal = $(this);
          //alert(recipient);
          if(recipient=="@addUser"){
            modal.find('.modal-title').html("Aggiungi un Utente");
            modal.find('.modal-body').html('<p class="space"><label>Username: </label> <input id="form-utente" class="form-control" type="text" placeholder="Robert Baden-Powell" /></p>'+
                                            '<p class="space"><label>Email: </label> <input id="form-email" class="form-control" type="text" placeholder="robert.bp@gilwell.uk" /></p>'+
                                            '<p class="space"><label>Password: </label> <input id="form-pswd" class="form-control" type="text" placeholder="password" /></p>'+
                                            '<p class="space"><label>Ruolo: </label><select id="form-ruolo" class="form-control">'+getRuoloSelect(memRuolo)+'</select></p>'+
                                            '<p class="space"><label>Branca: </label><select id="form-branca" class="form-control">'+getBrancaSelect(memRuolo,memBranca)+'</select></p>');

            $("#send").click(function(){
              var utente=$("#form-utente").val();
              var email=$("#form-email").val();
              var pswd=$("#form-pswd").val();
              var ruolo=$("#form-ruolo").val();
              var branca=$("#form-branca").val();
              addUser(utente,email,pswd,ruolo,branca);
            });
          }
          if(recipient=="@editUser"){
                var data=button.data("json").replace(/'/g,'"');
                console.log(data);
                var js=JSON.parse(data);

                modal.find('.modal-title').html("Modifica l'Utente id: "+js.id);
                modal.find('.modal-body').html('<p class="space"><label>Username: </label> <input id="form-utente" class="form-control" type="text" placeholder="Robert Baden-Powell" value="'+js.utente+'" /></p>'+
                                                '<p class="space"><label>Email: </label> <input id="form-email" class="form-control" type="text" placeholder="robert.bp@gilwell.uk" value="'+js.email+'"/></p>'+
                                                '<p class="space"><label>Ruolo: </label><select id="form-ruolo" class="form-control">'+getRuoloSelect(memRuolo)+'</select></p>'+
                                                '<p class="space"><label>Branca: </label><select id="form-branca" class="form-control">'+getBrancaSelect(memRuolo,memBranca)+'</select></p>');

                $("#form-ruolo").val(js.ruolo);
                $("#form-branca").val(js.branca);
                $("#send").click(function(){
                  var utente=$("#form-utente").val();
                  var email=$("#form-email").val();
                  var pswd=$("#form-pswd").val();
                  var ruolo=$("#form-ruolo").val();
                  var branca=$("#form-branca").val();
                  $.post('php/updateUserInfo.php',{'id':js.id,'utente':utente,'email':email,'ruolo':ruolo,'branca':branca},function(data){
                      if(data==202){
                        $('#myModal').modal('hide');
                      }
                  });
                });
          }
    });
    $.get("php/getUserList.php",function(data){
        var js=JSON.parse(data);
        for(var i=0;i<js.length;i++){
            var p=js[i];
            $("#userList").append('<li class="media">'+
                                    '<div class="media-left">'+
                                        '<a href="#">'+
                                          '<img class="media-object" src="archive/photo/'+p.photo+'" alt="photo">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="media-body">'+
                                        '<h4 class="media-heading">'+p.utente+' <button class="btn btn-xs btn-danger deleteUser" value="'+p.id+'" nome="'+p.utente+'"> <span class="glyphicon glyphicon-trash"></span> </button></h4>'+
                                        '<p>Branca: '+getBrancaFromNumber(parseInt(p.branca))+'</p>'+
                                        '<p><button class="btn btn-sm btn-info" data-toggle="modal" data-target="#myModal" data-whatever="@editUser" data-json="'+JSON.stringify(p).replace(/"/g,"'")+'"><span class="glyphicon glyphicon-wrench" aria-hidden="true"></span> Change</button>'+
                                        '</p>'+
                                        '</div>'+
                                    '</div>'+
                               '</li>');
        }

        $(".deleteUser").click(function(){
            var id=$(this).val();
            var nome=$(this).attr('nome');
            var risp = prompt('Vuoi eliminare definitivamente l\'utente '+nome+'?\nIl processo è irreversibile!!!\nPer favore digita Si', "No");
            if ((risp == "si")||(risp == "Si")) {
                $.post('php/deleteUser.php',{'id':id},function(data){
                    if(data==204){
                        console.log("cancellato ! ");
                        location.reload();
                    }
                });
            }
        })
    });
}
function addUser(utente,email,pswd,ruolo,branca){
    $.post("php/addUser.php",{"utente":utente,"email":email,"pswd":hex_sha1(pswd),"ruolo":ruolo,"branca":branca},function(data){
        if(data==201){
            alert("Utente creato con successo");
        }
    });
}
function getBrancaSelect(ruolo,branca){
    var branche=["tutte","Lupetti/Coccinelle","Reparto","Clan"];
    if(ruolo>3){
        return '<option value="'+i+'" >'+branche[branca]+'</option>';
    }

    var s="";
    var selected="";
    for(var i=0;i<branche.length;i++){
        selected="";
        console.log("i:"+i+" branca:"+branca);
        if(i==branca){
            selected='selected';
            console.log("accaduto");
        }
        s=s+='<option value="'+i+'" '+selected+' >'+branche[i]+'</option>';
    }
    return s;
}
function getRuoloSelect(ruolo){
    var ruoli=["root","admin","capo","rover","ragazzo"];
    var s="";
    for(var i=ruolo;i<ruoli.length;i++){
        s=s+='<option value="'+i+'" >'+ruoli[i]+'</option>';
    }
    return s;
}

function getBrancaFromNumber(n){
    switch(n){
        case 0:
            return "tutte";
            break;
        case 1:
            return "Lupetti/Coccinelle";
            break;
        case 2:
            return "Reparto";
            break;
        case 3:
            return "Clan";
        break;
        default:
            return "Nessuna: "+n;
    }
}
