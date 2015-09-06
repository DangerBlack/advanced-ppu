<?php
	include('query.php');
	$id=$_POST['id'];
	$conferma=$_POST['conferma'];
	if($conferma){
		$conferma=1;
	}else{
		$conferma=0;
	}
	$res=setTappaConquistata($id,$conferma);
	echo 202;
?>
