<?php 
    require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";
    $filter = [];
    $options = [];
    $query = new MongoDB\Driver\Query($filter, $options);
    $cursor = $manager->executeQuery('gestionEducativa.usuarios', $query);
    
 

    foreach ($cursor as $document) {
        $document = json_decode(json_encode($document),true);
        $datos[]=array('nombres'=>$document['nombre'], 'apellidos'=>$document['apellidos'], 'cedula'=>$document['cedula'], 'tipo_usuario'=>$document['tipo_usuario'],);
        
    }
        
    echo json_encode($datos);
?>