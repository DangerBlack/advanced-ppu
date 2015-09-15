<?php
	//session_start();
	include('SimpleImage.php');
	include("query.php");
	
	//if(isset($_POST['username']) && isset($_POST['password'])) {
		//if (login($_POST['username'], $_POST['password'])) {
		
			$allowedExts = array("gif", "jpeg", "jpg", "png","JPG","PNG","GIF","JPEG");
			$temp = explode(".", $_FILES["file"]["name"]);
			$extension = end($temp);

			if ((($_FILES["file"]["type"] == "image/gif")
			|| ($_FILES["file"]["type"] == "image/jpeg")
			|| ($_FILES["file"]["type"] == "image/jpg")
			|| ($_FILES["file"]["type"] == "image/pjpeg")
			|| ($_FILES["file"]["type"] == "image/x-png")
			|| ($_FILES["file"]["type"] == "image/png"))
			&& ($_FILES["file"]["size"] < 500000)
			&& in_array($extension, $allowedExts)) {
			  if ($_FILES["file"]["error"] > 0) {
				echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
			  } else {
				if (file_exists("../archive/bigphoto/" . $_FILES["file"]["name"])) {
				  echo $_FILES["file"]["name"] . " already exists. ";
				} else {
				  move_uploaded_file($_FILES["file"]["tmp_name"],"../archive/bigphoto/" . $_FILES["file"]["name"]);
				  
				  
				  $image = new SimpleImage();
				  $image->load("../archive/bigphoto/" . $_FILES["file"]["name"]);
				  $width = $image->getWidth();
				  $height = $image->getHeight();
				  if($width>$height){
					  
					  $height=100*$height/$width;
					  $width=100;
				  }else{
					  $width=100*$width/$height;
					  $height=100;
				  }
				  $image->resize($width,$height);
				  $image->save("../archive/photo/" . $_FILES["file"]["name"]);
				  
				  $id=$_GET['id'];
				  
				  updateScoutImage($id,$_FILES["file"]["name"]); 
				  echo "202";
				}
			  }
			} else {
			  echo "Invalid file";
			}
	
	//}
	//}
?> 
