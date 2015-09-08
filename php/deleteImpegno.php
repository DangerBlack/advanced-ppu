<?php
	include('query.php');
	$id=$_POST['id'];
	deleteImpegno($id);
	echo 410;
?>
