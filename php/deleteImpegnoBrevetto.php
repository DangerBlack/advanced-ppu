<?php
	include('query.php');
	$id=$_POST['id'];
	deleteImpegnoBrevetto($id);
	echo 410;
?>
