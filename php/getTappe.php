<?php
	include('query.php');
	$id=$_GET['id'];
	$html=$_GET['html'];
	$res=getTappe($id);
	if($html=="true"){
		echo $res[0]['metodo'];
	}else{
		echo json_encode($res);
	}
?>
