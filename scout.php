<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<meta name="author" content="Daniele Baschieri,Nicola Corti" />
<meta name="description" content="Un semplice programma per la gestione della progressione personale in Reparto agesci.." />
<meta name ="copyright" content="2015" />
<meta name="keywords" content="Progressione Personale Unitaria" />

<title>A-PPU</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="css/datatables.min.css"/>
 <link rel="stylesheet" type="text/css" href="css/default.css" />


      
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/datatables.min.js"></script>
<script type="text/javascript"  src="js/default.js"></script>
<script type="text/javascript"  src="js/scout.js"></script>

 
 <script type="text/javascript" > 
 $(document).ready(function(){
				<?php
					echo 'var id="'.$_GET['id'].'";';
				?>
				
				initScout(id);
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
          <a class="navbar-brand" href="index.html">Advanced P.P.U</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="#about">Panoramica</a></li>
            <li><a href="#contact">Specialità</a></li>
            <li><a href="#contact">Extra</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
			  <li class="dropdown">
				  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >Utilità <span class="caret"></span></a>
				  <ul class="dropdown-menu">
					  <li><a href="#"><span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span> Modifica</a></li>
					  <li role="separator" class="divider"></li>
					  <li><a href="#"><span class="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span> Abbandonato</a></li>
					  <li><a href="#"><span class="glyphicon glyphicon glyphicon-road" aria-hidden="true"></span> Passaggi</a></li>
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
						<img class="photo" src="archive/bigphoto/DSC00045.JPG" />
					</div>
					<div class="col-lg-8">
						<p>Scheda di: <b class="name"></b></p>
						<p>Squadriglia: <b class="sqadriglia"></b></p>
						<img class="photoSq"  /><br />
						<p><a href="">modifica avatar</a></p>
					</div>
				</div>
				<div class="row">
					<hr />
					<div class="col-lg-12">
						<ul class="nav nav-tabs">
						  <li class="active"><a data-toggle="tab" href="#informazioni">Informazioni</a></li>
						  <li><a data-toggle="tab" href="#contatti">Contatti</a></li>
						</ul>
						<div class="tab-content">
							<div id="informazioni" class="tab-pane fade in active">
								<h3>Informazioni 
									<button type="button" class="btn btn-xs btn-info editInfo" aria-label="Right Align" onclick="" >
									  <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> <span class="">Edit</span>
									</button> 
								</h3>
								<table id="infoTable">
									<tr>
										<td>Nome:</td>
										<td><span id="nome" type='text' name='nome' value=''/> </td>
									</tr>
									<tr>

										<td>Cognome:</td>
										<td><span id="cognome" type='text' name='cognome' value=''/> </td>
									</tr>
									<tr>

										<td>Codice:</td><td><span id="codice" type='text' name='codice' value=''/> </td>
									</tr>
									<tr>

										<td>Indirizzo:</td><td> <span id="indirizzo" type='text' name='indirizzo' value=''/> </td>
									</tr>
									<tr>

										<td>Data di nascita:</td><td> <span id="datanascita" type='date' name='datanascita' value=''/> </td>
									</tr>
									<tr>

										<td>Residenza:</td><td> <span id="residenza" type='text' name='residenza' value=''/> </td>
									</tr>
									<tr>

										<td>Sesso:</td><td> <span id="sesso" type='text' name='sesso' value=''/> </td>
									</tr>
									<tr>

										<td>Luogo di nascita:</td><td> <span id="luogo" type='text' name='luogonascita' value=''/> </td>
									</tr>
									<tr>

										<td>CAP:</td><td> <span id="cap" type='text' name='cap' value=''/> </td>
									</tr>
									<tr>

										<td>Provincia:</td><td> <span id="provincia" type='text' name='provincia' value='BO'/> </td>
									</tr>
									<tr>

										<td>Nazione:</td><td> <span id="nazione" type='text' name='nazione' value='Ita'/> </td><span type='hidden' name='id' value='44'>   
									</tr>
									<tr>
										<td>Squadriglia:</td>
										<td><select name='idsquadriglie'>
													<option value='6' selected>aquile</option>
													<option value='7'>iene</option>
													<option value='8'>pantere</option>
													<option value='9'>lupi</option>	
											</select>
										</td>
									</tr>
								</table>
							</div>
							<div id="contatti" class="tab-pane fade">
								<h3>Contatti
									<button type="button" class="btn btn-xs btn-info editInfo" aria-label="Right Align" onclick="" >
									  <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> <span class="">Edit</span>
									</button> 
								</h3>
								<table id="contattiTable">
									<tr>
										<td>Babbo</td>
										<td><span id="numbabbo" type="text" /></td>
									</tr>
									<tr>
										<td>Mamma</td>
										<td><span id="nummamma" type="text" /></td>
									</tr>
									<tr>
										<td>num Casa</td>
										<td><span id="numcasa" type="text" /></td>
									</tr>
									<tr>
										<td>num Cell</td>
										<td><span id="numcell" type="text" /></td>
									</tr>
									<tr>
										<td>num Nonno</td>
										<td><span id="numnonno" type="text" /></td>
									</tr>
									<tr>
										<td>mail Babbo</td>
										<td><span id="mailbabbo" type="text" /></td>
									</tr>
									<tr>
										<td>mail Mamma</td>
										<td><span id="mailmamma" type="text" /></td>
									</tr>
									<tr>
										<td>mail</td>
										<td><span id="mail" type="text" /></td>
									</tr>
								</table>
							</div>
						</div>
						<div class="buttonField">
							<button id="confirmChange" type="button" class="btn btn-sm btn-success" aria-label="Right Align" onclick="" >
							  <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> <span class=""> Confirm</span>
							</button>
							<button id="closeChange" type="button" class="btn btn-sm btn-danger" aria-label="Right Align" onclick="" >
							  <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> <span class=""> Discarge</span>
							</button>
							
						</div> 
					</div>
				</div>
				<div class="row">
					<hr />
					<div class="col-lg-12">
						<div class="panel panel-default">
						  <div class="panel-heading">Varie</div>
						  <div class="panel-body">
							<textarea id="varie">Il ragazzo è brutto!</textarea>
						  </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="panel panel-default">
				  <div class="panel-heading">Sentiero <button type="button" class="btn btn-info btn-xs right editSentiero"><span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</button></div>
				  <div class="panel-body">
					<img class="tappa" src="archive/tappe/fine.jpg" />
					<ul id="listaImpegni">
						<li>Fare tante ba</li>
						<li>Non picchiare le bambine!</li>
					</ul>
				  </div>
				</div>
				<div class="panel panel-default">
				  <div class="panel-heading">Specialità</div>
				  <div class="panel-body">
					<ul id="listaSpecialita" class="listaVuota Specialita">
						<li>
							<img src="archive/spec/cuoco.jpg" />
							<p>Cuoco <span class="badge">3</span></p>
						</li>
						<li>
							<img src="archive/spec/attore.jpg" />
							<p>Attore <span class="badge">6</span></p>
						</li>
					</ul>
				  </div>
				</div>
				<div class="panel panel-default">
				  <div class="panel-heading">Specialità in Conquista<button type="button" class="btn btn-success btn-xs right" data-toggle="modal" data-target="#myModal" data-whatever="@spec"><span class="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span> Add</button></div>
				  <div class="panel-body">
					<ul id="specInConquista" class="listaVuota Specialita">
						<li>
							<img src="archive/spec/cuoco.jpg" />
							<p>Cuoco <span class="badge">3</span></p>
						</li>
						<li>
							<img src="archive/spec/attore.jpg" />
							<p>Attore <span class="badge">6</span></p>
						</li>
					</ul>
				  </div>
				</div>
				<div class="panel panel-default">
				  <div class="panel-heading">Brevetti</div>
				  <div class="panel-body">
					<ul id="listaBrevetti" class="listaVuota Brevetti">
						<li>
							<img src="archive/brev/alpina.jpg" />
							<p>Alpinista <span class="badge">3</span></p>
						</li>
						<li>
							<img src="archive/brev/pioniere.jpg" />
							<p>Pioniere <span class="badge">6</span></p>
						</li>
					</ul>
				  </div>
				</div>
				<div class="panel panel-default">
				  <div class="panel-heading">Brevetti in Conquista <button type="button" class="btn btn-success btn-xs right" data-toggle="modal" data-target="#myModal" data-whatever="@brev"><span class="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span> Add</button></div>
				  <div class="panel-body">
					<ul id="brevInConquista" class="listaVuota Brevetti">
						<li>
							<img src="archive/brev/alpina.jpg" />
							<p>Alpinista <span class="badge">3</span></p>
						</li>
						<li>
							<img src="archive/brev/pioniere.jpg" />
							<p>Pioniere <span class="badge">6</span></p>
						</li>
					</ul>
				  </div>
				</div>
			</div>
        </div>
        
      </div>
    </div>
<!-- Modal -->
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
