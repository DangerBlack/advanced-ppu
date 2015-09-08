<?php
	include('query.php');
	$id=$_POST['id'];
	$conferma=$_POST['conferma'];
	var_dump($conferma);
	if($conferma=="true"){
		$conferma=1;
	}else{
		$conferma=0;
	}
	$res=setTappaConquistata($id,$conferma);
	echo 202;
?>
