<?php
require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
//$nivel = $_POST['curso'];
$telefono   = $_POST['telefono'];
$direccion = $_POST['direccion'];
$paralelo = $_POST['paralelo'];
$cedula = $_POST['cedula'];
//$materias = $_POST['materias'];
$year = $_POST['year'];
$nummaterias = $_POST['nummaterias'];
//$salario = $_POST['salario'];
$usuario = $_POST['usuario'];
$password = $_POST['password'];
$tipo_usuario = $_POST['tipo_usuario'];
$estatus = $_POST['estatus'];


$obj = array (
'name' => $nombre,
'lastName' => $apellidos,
'idCedula' => $cedula,
'user'=> $usuario,
'password'=> $password,
'type_user'=> $tipo_usuario,
'status'=> $estatus,
'signatureName'=>null,
'salary'=>null,
'numCredits'=>$nummaterias
);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('gestionEducativa.usuarios', $insert);

if ($result->getInsertedCount() == 1) {
    echo 1;
    
	
} else {
    echo 0;
    
}