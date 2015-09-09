<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<meta name="author" content="Daniele Baschieri,Nicola Corti" />
<meta name="description" content="Un semplice programma per la gestione della progressione personale in Reparto agesci.." />
<meta name ="copyright" content="2015" />
<meta name="keywords" content="Progressione Personale Unitaria" />
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>A-PPU</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="css/datatables.min.css"/>
 <link rel="stylesheet" type="text/css" href="css/default.css" />


      
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/datatables.min.js"></script>
<script type="text/javascript"  src="js/default.js"></script>
<script type="text/javascript"  src="js/sentiero.js"></script>

 
 <script type="text/javascript" > 
 $(document).ready(function(){
				<?php
					@$id=$_GET['id'];
					echo 'var id="'.$id.'";';
				?>
				initSentiero(id);
				
				$("#metodoScoperta").load("php/getTappe.php?id=1&html=true");
				$("#metodoCompetenza").load("php/getTappe.php?id=2&html=true");
				$("#metodoResponsabilita").load("php/getTappe.php?id=3&html=true");
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
          <a class="navbar-brand" href="#">Advanced P.P.U</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="#about">Panoramica</a></li>
            <li><a href="#contact">Specialità</a></li>
            <li><a href="#contact">Extra</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">

      <div class="starter-template">
        <h1>Sentiero - mete e impegni</h1>
        <div class="row">
			<div class="col-lg-12">
				<h2>Sentiero di: <span class="nome">Nome Cognome</span></h2>
				<ul class="nav nav-tabs">
					<li role="presentation" class="active"><a data-toggle="tab" href="#tappaScoperta">Tappa della Scoperta</a></li>
					<li role="presentation"><a data-toggle="tab" href="#tappaCompetenza">Tappa della Competenza</a></li>
					<li role="presentation"><a data-toggle="tab" href="#tappaResponsabilita">Tappa della Responsabilità</a></li>
				</ul>
				<div class="tab-content">
					<div id="tappaScoperta" class="tab-pane fade in active">
						<div class="row">
							<div class="col-lg-3">
								<img src="archive/tappe/scoperta.jpg" class="smallTappa" />
							</div>
							<div class="col-lg-9">
								<p><label>Conquistata: </label> <input class="confermaTappa" type="checkbox" id="conquistataScoperta" /></p>
								<p><label>In cammino da: </label> <input type="data" id="datainzioScoperta" /></p>
								<p><label>Conquistata il: </label> <input type="data" id="dataScoperta" /></p>
							</div>
						</div>
						<div class="row">
							<table id="tabellaMeteScoperta" class="display" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Mete</th>
										<th>Impegni</th>
										<th>data inzio</th>
										<th>data verifrica</th>
										<th>raggiunta</th>
										<th>edit</th>
									</tr>
								</thead>

								<tfoot>
									<tr>
										<th>Mete</th>
										<th>Impegni</th>
										<th>data inzio</th>
										<th>data verifrica</th>
										<th>raggiunta</th>
										<th>edit</th>
									</tr>
								</tfoot>
								<tbody class="mete">
								</tbody>
							</table>
						</div>
						<div class="row">
							<button type="button" class="btn btn-success right addScoperta" data-toggle="modal" data-target="#myModal" data-whatever="@Scoperta">
							  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> add
							</button>
						</div>
						<div class="row">
							<hr />
							<h2>Consigli dal Metodo</h2>
							<div id="metodoScoperta"></div>
						</div>
					</div>
					<div id="tappaCompetenza" class="tab-pane fade">
						<div class="row">
							<div class="col-lg-3">
								<img src="archive/tappe/competenza.jpg" class="smallTappa" />
							</div>
							<div class="col-lg-9">
								<p><label>Conquistata: </label> <input class="confermaTappa" type="checkbox" id="conquistataCompetenza" /></p>
								<p><label>In cammino da: </label> <input type="data" id="datainzioCompetenza" /></p>
								<p><label>Conquistata il: </label> <input type="data" id="dataCompetenza" /></p>
							</div>
						</div>
						<div class="row">
							<table id="tabellaMeteCompetenza" class="display" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Mete</th>
										<th>Impegni</th>
										<th>data inzio</th>
										<th>data verifrica</th>
										<th>raggiunta</th>
										<th>edit</th>
									</tr>
								</thead>

								<tfoot>
									<tr>
										<th>Mete</th>
										<th>Impegni</th>
										<th>data inzio</th>
										<th>data verifrica</th>
										<th>raggiunta</th>
										<th>edit</th>
									</tr>
								</tfoot>
								<tbody class="mete">
								</tbody>
							</table>
						</div>
						<div class="row">
							<button type="button" class="btn btn-success right addCompetenza" data-toggle="modal" data-target="#myModal" data-whatever="@Competenza">
							  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> add
							</button>
						</div>
						<div class="row">
							<hr />
							<h2>Consigli dal Metodo</h2>
							<div id="metodoCompetenza"></div>
						</div>
					</div>
					<div id="tappaResponsabilita" class="tab-pane fade">
						<div class="row">
							<div class="col-lg-3">
								<img src="archive/tappe/responsabilita.jpg" class="smallTappa" />
							</div>
							<div class="col-lg-9">
								<p><label>Conquistata: </label> <input class="confermaTappa" type="checkbox" id="conquistataResponsabilita" /></p>
								<p><label>In cammino da: </label> <input type="data" id="datainzioResponsabilita" /></p>
								<p><label>Conquistata il: </label> <input type="data" id="dataResponsabilita" /></p>
							</div>
						</div>
						<div class="row">
							<table id="tabellaMeteResponsabilita" class="display" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Mete</th>
										<th>Impegni</th>
										<th>data inzio</th>
										<th>data verifrica</th>
										<th>raggiunta</th>
										<th>edit</th>
									</tr>
								</thead>

								<tfoot>
									<tr>
										<th>Mete</th>
										<th>Impegni</th>
										<th>data inzio</th>
										<th>data verifrica</th>
										<th>raggiunta</th>
										<th>edit</th>
									</tr>
								</tfoot>
								<tbody class="mete">
								</tbody>
							</table>
						</div>
						<div class="row">
							<button type="button" class="btn btn-success right addResponsabilita" data-toggle="modal" data-target="#myModal" data-whatever="@Responsabilita">
							  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> add
							</button>
						</div>
						<div class="row">
							<hr />
							<h2>Consigli dal Metodo</h2>
							<div id="metodoResponsabilita"></div>
						</div>
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
