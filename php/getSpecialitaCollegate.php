<?php
	include("query.php");
	if(!isLogged())
		die("Non sei loggato");
	$idBrev=$_GET['idBrev'];
	$link=array();
	$link[17]=[69,70,75,81,105,110,112,114,125,127,128,129,131,136,140];
	$link[18]=[68,69,70,75,80,81,83,97,105,107,111,112,125,128,129,130,140];
	$link[19]=[78,86,97,98,101,102,105,117,124,132,134,137,138];
	$link[20]=[71,92,93,142,104,105,110,100,115,128,132];
	$link[21]=[73,73,97,98,101,102,104,105,100,116,128,132,134];
	$link[22]=[72,78,92,93,97,142,104,105,100,115,117,124,128,132,139];
	$link[23]=[80,73,83,73,87,73,97,98,101,102,108,116,118,73,120,123,134];
	$link[24]=[143];
	$link[25]=[80,83,87,94,97,101,102,112,114,116,118,127,128,129,131,134,140];
	$link[26]=[78,86,92,97,101,104,105,100,115,116,124,132,134,137,138,139];
	$link[27]=[69,70,75,80,81,83,89,94,111,112,114,125,127,128,129,136,140];
	$link[28]=[143];
	$link[29]=[143];
	$link[30]=[75,80,81,73,83,94,101,102,112,114,116,125,127,128,129,130,131,134,136];
	$link[31]=[69,81,83,93,102,112,114,100,125,127,131,136,140];
	$link[32]=[69,89,112,114,117,127];
	
	$res=getSpecialitaListFilter($link[$idBrev]);
	echo json_encode($res);
?>
