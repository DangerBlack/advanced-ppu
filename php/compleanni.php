<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
		
	header("Cache-Control: public");
	header("Content-Description: File Transfer");
	//header("Content-Length: ". filesize("$filename").";");
	header("Content-Disposition: attachment; filename=compleanni.ics");
	header("Content-Type: application/octet-stream; "); 
	header("Content-Transfer-Encoding: binary");
	
	
	 echo "BEGIN:VCALENDAR\n".
		  "VERSION:2.0\n".
		  "PRODID:-//Events Calendar//iCal4j 1.0//EN\n".
		  "CALSCALE:GREGORIAN\n".
		  "METHOD:REQUEST\n";			  
	$res = getCurrentScouts();		
	foreach ($res as $row)
	{
		echo "BEGIN:VEVENT\n";
		$data=explode("-",$row['datanascita']);
		echo "DTSTAMP:".date("Y").$data[1].$data[2]."T083000Z\n";
		echo "DTSTART:".date("Y").$data[1].$data[2]."T083000\n";
		echo "DTEND:".date("Y").$data[1].$data[2]."T093000\n";
		echo "SUMMARY:Compleanno di ".$row['nome']." ".$row['cognome']."\n";
		echo "LOCATION:".$row['indirizzo']." ".$row['residenza']."\n";
		echo "DESCRIPTION:Evento scout fai gli auguri\n";
		echo "END:VEVENT\n";
		echo "\n";
	}
	echo "END:VCALENDAR";

?>
