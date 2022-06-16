<?php
require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$nivel = $_POST['nivel'];
$telefono    = $_POST['telefono'];
$direccion = $_POST['direccion'];
$paralelo = $_POST['paralelo'];
$docente = $_POST['docente'];
$materias = $_POST['materias'];
$year = $_POST['year'];
$nummaterias = $_POST['nummaterias'];
$salario = $_POST['salario'];
$usuario = $_POST['usuario'];
$password = $_POST['password'];
$tipo_usuario = $_POST['tipo_usuario'];
$estatus = $_POST['estatus'];


$obj = array (
'name' => $nombre,
'lastName' => $apellidos,
'idCedula' => $docente,
'user'=>$usuario,
'password'=>$password,
'type_user'=>$tipo_usuario,
'status'=>$estatus,
'signatureName'=>$materias,
'salary'=>$salario,
'numCredits'=>null
);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('gestionEducativa.usuarios', $insert);

if ($result->getInsertedCount() == 1) {
    echo 'registrado';
	
} else {
    echo 'error';
    
}