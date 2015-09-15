<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<meta name="author" content="Daniele Baschieri,Nicola Corti" />
<meta name="description" content="Un semplice programma per la gestione della progressione personale in Reparto agesci.." />
<meta name ="copyright" content="2015" />
<meta name="keywords" content="Progressione Personale Unitaria" />
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>A-PPU - brevetto</title>

<link rel="apple-touch-icon" sizes="57x57" href="css/favicon/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="css/favicon//apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="css/favicon//apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="css/favicon//apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="css/favicon//apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="css/favicon//apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="css/favicon//apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="css/favicon//apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="css/favicon//apple-touch-icon-180x180.png">
<link rel="icon" type="image/png" href="css/favicon//favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="css/favicon//android-chrome-192x192.png" sizes="192x192">
<link rel="icon" type="image/png" href="css/favicon//favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="css/favicon//favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="css/favicon//manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="css/favicon//mstile-144x144.png">
<meta name="theme-color" content="#ffffff">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="css/datatables.min.css"/>
 <link rel="stylesheet" type="text/css" href="css/default.css" />
  <link rel="stylesheet" type="text/css" href="css/jquery.auto-complete.css" />
<link rel="stylesheet" type="text/css" href="css/datepicker.css" />


      
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/datatables.min.js"></script>
<script type="text/javascript"  src="js/default.js"></script>
<script type="text/javascript"  src="js/brevetto.js"></script>
<script type="text/javascript"  src="js/jquery.auto-complete.min.js"></script>
<script type="text/javascript" src="js/bootstrap-datepicker.js" ></script>
 
 <script type="text/javascript" > 
 $(document).ready(function(){
				<?php
					echo 'var id="'.$_GET['id'].'";';
					echo 'var idBrev="'.$_GET['idB'].'";';
				?>
				init();
				initBrevetto(id,idBrev);
			});
</script>
<style>
	
</style>

</head>

<body>
	<nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">Advanced P.P.U.</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="panoramica.html">Panoramica</a></li>
            <li><a href="specialita-tool.html">Specialità</a></li>
            <li><a href="#contact">Extra</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
			  <li class="dropdown">
				  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >Utilità <span class="caret"></span></a>
				  <ul class="dropdown-menu">
					  <li><a href="settings.html"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Settings</a></li>
					  <li role="separator" class="divider"></li>
					  <li><a href="#" id="deleteBrevetto"><span class="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span> Cancella</a></li>
				  </ul>
			  </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">

      <div class="starter-template">
		  <div class="row">
			  <div class="col-lg-6">
				  <div class="row">
					<div class="col-lg-4">
						<img class="photo" src="archive/spec/attore.jpg" />
					</div>
					<div class="col-lg-8 infoSpec">
						<p><label>Prove di:</label> <b class="name"></b></p>
						<p><label>Brevetto:</label> <b class="brevetto"></b></p>
						<p><label>Maestro:</label> <input id="maestro" class="typeahead" type="text" placeholder="maestro" /></p>
						<p><label>Giorno:</label> <input id="data" type="text" placeholder="08/08/2015"  data-provide="datepicker" /></p>
						<p><label>Conquistata:</label> <input id="conquistata" type="checkbox" /></p>
					</div>
				  </div>
				  <div class="row">
					  <div class="panel panel-default">
						  <div class="panel-heading">Impegni <button type="button" class="btn btn-success btn-xs right" data-toggle="modal" data-target="#myModal" data-whatever="@impegno"><span class="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span> Add</button></div>
						  <div class="panel-body">
							<ul id="listaImpegniBrev">
								<li>Fare l'attore</li>
								<li>Attorare di più!</li>
							</ul>
						  </div>
					  </div>
				  </div>
				  <div class="row">
						<div class="panel panel-default">
						  <div class="panel-heading">Varie</div>
						  <div class="panel-body">
							<textarea id="varie">Il ragazzo è brutto!</textarea><br />
							<button type="button" class="btn btn-info btn-xs right updateVarie">
								<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
								update
							</button>
						  </div>
						</div>
				   </div>
			  </div>
			  <div class="col-lg-6">
				  <div class="row">
					<div class="col-lg-12">
						<div class="panel panel-default">
						  <div class="panel-heading">Il Metodo</div>
						  <div class="panel-body">
							<article id="metodo">METODO</article>
						  </div>
						</div>
					</div>
				  </div>
				  <div class="row">
					<div class="col-lg-12">
						<div class="panel panel-default">
						  <div class="panel-heading">Specialita Collegate</div>
						  <div class="panel-body">
							<ul id="listaSpecialita" class="listaVuota Specialita"></ul>
						  </div>
						</div>
					</div>
				  </div>
				  <div class="row">
					<div class="col-lg-12">
						<div class="panel panel-default">
						  <div class="panel-heading">
							  Info da Wiki 
							  <button type="button" class="btn btn-xs btn-default openwiki" aria-label="Right Align" onclick="" >
								  <span class="glyphicon glyphicon glyphicon-new-window" aria-hidden="true"></span>
							  </button>  
						  </div>
						  <div class="panel-body">
							<iframe src="" ></iframe>
						  </div>
						</div>
					</div>
				  </div>
			  </div>
		  </div>
      </div>

    </div>
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			<h4 class="modal-title" id="myModalLabel">Modal title</h4>
		  </div>
		  <div class="modal-body">
			...
		  </div>
		  <div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			<button id="send" type="button" class="btn btn-primary">Send</button>
		  </div>
		</div>
	  </div>
	</div>
</body>

</html>
