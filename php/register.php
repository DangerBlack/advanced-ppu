<?php
	include('query.php');
	
	$mail=$_POST['mail'];
	$pswd=$_POST['pswd'];
	$out=insertUser($mail,$pswd);
	if($out!=false){
		$today = date("H:i:s d/m/Y");
		$to      = $mail;
		$subject = 'Benvenuti su CantiScout';
		$message = '<html>'.
					'<body>'.
					'Benvenuto/a su CantiScout,<br />'.
					'se hai ricevuto questa mail significa che sei correttamente iscritto/a al sito!<br />'.
					'Comincia subito a caricare le tue canzoni preferite su <a href="http://www.512b.it/cantiscout">CantiScout</a><br />'.
					'dovrai caricarle usando il formato ChordPro, un formato piuttosto semplice!<br />'.
					'Grazie al tuo aiuto molti altri ragazzi potranno divertirsi attorno ad un fuoco!<br />'.
					'Buona Caccia'.
					'<br />'.
					'Lo Staff<br />'.
					'</body>'.
					'</html>';
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'From: CantiScout <cantiscout@512b.it>'. "\r\n";
		mail($to, $subject, $message, $headers);		
		
		$expire=time()+60*60*24*30;
		setcookie("mail", $mail, $expire);
		setcookie("pswd", $pswd, $expire);
		echo 200;
		return "200";
	}else{
		return "500";
	}
?>
