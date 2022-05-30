<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://bootswatch.com/5/cerulean/bootstrap.min.css">
    <link rel="stylesheet" href="views/css/style.css">
    <title>Sistema de Gestión Educativa</title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img class="logo-sistema" style="height:auto; width:150px !important;" src="https://inmejia.edu.ec/wp-content/uploads/2022/03/Escudo-de-armas-del-Instituto-Nacional-Mejia-2022-125-anos-245x300.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#">Home
                <span class="visually-hidden">(current)</span>
            </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            </ul>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>

<?php 
    require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";
    
    $filter = [];
    $options = [];
    $query = new MongoDB\Driver\Query($filter, $options);
    $cursor = $manager->executeQuery('gestionEducativa.usuarios', $query);
    
    // Insert into database
    
    echo '<div class="col-md-12">';
    echo '<h1 style="text-align:center;">CONSULTA DE REGISTROS DEL SISTEMA</h1>';
    echo '<div class="row" style="padding-left: 10rem;padding-right: 10rem;">';
    echo '<table cellspacing="10" cellpadding="10" border>';
    echo '<tr>';
    echo '<th>Nombres</th>';
    echo '<th>Apellidos</th>';
    echo '<th>Perfil</th>';
    echo '<th>Status</th>';
    echo '</tr>';

    foreach ($cursor as $document) {
        $document = json_decode(json_encode($document),true);
            
        echo '<tr>';
        echo '<td>'.$document['nombre'].'</td>';
        echo '<td>'.$document['apellidos'].'</td>';
        echo '<td>'.$document['tipo_usuario'].'</td>';
        echo '<td>'.$document['estatus'].'</td>';
        echo '</tr>';
    }
    echo '</div>';
    echo '</div>';

   
?>
 
 <div class="col-md-12">
        <h1 style="text-align:center;">REGISTRO DE DATOS EN EL SISTEMA</h1>
        <div class="row">
            <?php
            
             
            
            
            ?>

        </div>

    </div>
</body>
</html>