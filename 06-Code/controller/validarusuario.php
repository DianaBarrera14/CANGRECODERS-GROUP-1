<?php
require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";




$usuario = $_POST['txtUsuario'] ;
$password = $_POST['txtPassword'] ;

$query = new MongoDB\Driver\Query(array('usuario' => $usuario,'password'=>$password));

 //Output of the executeQuery will be object of MongoDB\Driver\Cursor class
$cursor = $manager->executeQuery('gestionEducativa.usuarios', $query);
// Convert cursor to Array and print result
$users = $cursor->toArray();
$result = count($users);

if ($result != 0) {
    require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/views/principal.php";
}else{
    require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/login.php";
}