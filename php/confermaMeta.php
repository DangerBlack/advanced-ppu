<?php
	include('query.php');
	$id=$_POST['id'];
	$conferma=$_POST['conferma'];
	if($conferma=="true"){
		$conferma=1;
	}else{
		$conferma=0;
	}
	$res=setMetaRaggiunta($id,$conferma);
	echo 202;
?>
