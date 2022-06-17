<?php
require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";
$usuario = $_POST['txtUsuario'] ;
$password = $_POST['txtPassword'] ;
$query = new MongoDB\Driver\Query(array('usuario' => $usuario,'password'=>$password));