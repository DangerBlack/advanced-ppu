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
<link rel="stylesheet" type="text/css" href="css/datepicker.css" />


      
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/datatables.min.js"></script>
<script type="text/javascript"  src="js/default.js"></script>
<script type="text/javascript"  src="js/sentiero.js"></script>
<script type="text/javascript" src="js/bootstrap-datepicker.js" ></script>

 
 <script type="text/javascript" > 
 $(document).ready(function(){
				<?php
					@$id=$_GET['id'];
					echo 'var id="'.$id.'";';
				?>
				init();
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
          <a class="navbar-brand" href="#">Advanced P.P.U.</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="panoramica.html">Panoramica</a></li>
            <li><a href="specialita-tool.html">Specialità</a></li>
            <li><a href="extra.html">Extra</a></li>
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
								<p><label>Conquistata il: </label> <input class="data" type="data" id="dataScoperta" /></p>
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
								<p><label>In cammino da: </label> <span type="data" class="dataScoperta" ></span></p>
								<p><label>Conquistata il: </label> <input class="data" type="data" id="dataCompetenza" /></p>
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
								<p><label>In cammino da: </label> <span type="data" class="dataCompetenza" ></span></p>
								<p><label>Conquistata il: </label> <input class="data" type="data" id="dataResponsabilita" /></p>
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
