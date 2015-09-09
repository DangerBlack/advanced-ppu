<?php
	include('query.php');
	$id=$_POST['id'];
	$idSpec=$_POST['idB'];
	$impegno=$_POST['impegno'];
	insertImpegnoBrevetto($id,$idSpec,$impegno);
	echo 201;
?>
