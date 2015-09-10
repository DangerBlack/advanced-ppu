<?php
	include('query.php');
	$idScout=$_POST['idScout'];
	$idBrev=$_POST['idBrev'];
	deleteBrevetto($idScout,$idBrev);
	echo 410;
?>
