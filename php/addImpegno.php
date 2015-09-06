<?php
	include('query.php');
	$id=$_POST['id'];
	$idSpec=$_POST['idS'];
	$impegno=$_POST['impegno'];
	insertImpegno($id,$idSpec,$impegno);
	echo 200;
?>
