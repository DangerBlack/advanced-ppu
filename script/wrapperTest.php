<?php
	function startsWith($haystack, $needle) {
		// search backwards starting from haystack length characters from the end
		return $needle === "" || strrpos($haystack, $needle, -strlen($haystack)) !== FALSE;
	}
	function wrappa($commento){
		$pattern = '/(http:\/\/[a-z0-9\.\/]+)/i';
		//$pattern ='_^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}-\x{ffff}0-9]-*)*[a-z\x{00a1}-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}-\x{ffff}0-9]-*)*[a-z\x{00a1}-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}-\x{ffff}]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$_iuS';
		
		$pattern ='/(((http|https):\/\/)?[A-Za-z0-9\.\/]+\.[#A-Za-z0-9\/]+)/';
		$replacement = '<a href="$1" target="_blank">$1</a>';
		$commento=preg_replace($pattern, $replacement, $commento);
		/*if(startsWith($commento,"http")==False){ //Controllare se la stringa sostituita inizi con http non tutto il commento preg_match??
			$commento="http://".$commento;
		}*/
		return  $commento;
	}
	
	$frase="Ciao luca http://www.google.it come va";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao LUca http://www.gooogle. come stai";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	
	$frase="Ciao Luca www.google.it come va?";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
		
	$frase="Ciao luca https://www.google.it come va";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	

	$frase="Ciao Luca https://www.google.php/";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca https://www.google.php/sardina ";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca https://www.google.php#culo ";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca https://www.google.html/culo/1924/ammacca";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca https://www.google.html:javascript(console.log(ciao))";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca https://www.GOGLE.html";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca https://www.AMA.html";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca https://www.google.google.html";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	
	$frase="Ciao Luca https://google.html";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca google.google.html";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca. come stai";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="Ciao Luca.bononi.it";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
	
	$frase="ciao google.it come va www.fedora.com io sto bene http://www.google.it male x ";
	echo 'O: '.$frase.'<br />';
	echo 'W: '.wrappa($frase).'<br />';
?>

