<?php
require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";

$name = $_POST['nombre'];
$lastName = $_POST['apellidos'];
//$nivel = $_POST['curso'];
$phone    = $_POST['telefono'];
$address = $_POST['direccion'];
$parallel = $_POST['paralelo'];
$identificationCard = $_POST['cedula'];
//$materias = $_POST['materias'];
$year = $_POST['year'];
$nummaterias = $_POST['nummaterias'];
//$salario = $_POST['salario'];
$user = $_POST['usuario'];
$password = $_POST['password'];
$tipo_usuario = $_POST['tipo_usuario'];
$estatus = $_POST['estatus'];


$obj = array (
'nombre' => $name,
'apellidos' => $lastName,
//'curso' => $nivel,
'telefono' => $phone,
'direccion'=> $address,
'paralelo'=> $parallel,
'cedula' => $identificationCard,
'yearLectivo'=>$year,
'numMaterias'=>$nummaterias,
'usuario'=>$user,
'password'=>$password,
'tipo_usuario'=>$tipo_usuario,
'estatus'=>$estatus
);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('gestionEducativa.usuarios', $insert);

if ($result->getInsertedCount() == 1) {
    echo 1;
	
} else {
    echo 0;
    
}