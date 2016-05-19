<?php
	//session_start();
	include('SimpleImage.php');
	include("query.php");

	if(!isLogged())
		die("Non siete loggati");

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
		 $file_name_changed=uniqid().".".$extension;

		if (file_exists("../archive/bigphoto/" . $file_name_changed)) {
			echo $_FILES["file"]["name"] . " already exists. ";
		} else {

			move_uploaded_file($_FILES["file"]["tmp_name"],"../archive/bigphoto/" . $file_name_changed);


			$image = new SimpleImage();
			$image->load("../archive/bigphoto/" . $file_name_changed);
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
			$image->save("../archive/photo/" . $file_name_changed);

			$id=getId();

			updateUserImage($id,$file_name_changed);
			echo "202";
		}
	  }
	} else {
	  echo "Invalid file";
	}
?>
