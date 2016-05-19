<?php
	include("query.php");

	if(!isLogged())
		die("Non siete loggati");

    $id=$_POST['id'];

    $ruolo_utente=getUser($id)[0]['ruolo'];

    $ruolo=getRuolo();

    if(($ruolo_utente>=$ruolo)&&($ruolo<=2)){
        deleteUser($id);
        return 204;
    }else{
        return 403;
    }
?>
