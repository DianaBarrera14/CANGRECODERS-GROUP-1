<?php
require_once "../db/db.php";
$materia = $_POST['materia'];
$year    = $_POST['year'];
$departamento = $_POST['departamento'];
$nivel = $_POST['nivel'];
$paralelo = $_POST['paralelo'];
$docente = $_POST['docente'];

$obj = array (
'signatureName' => $materia,
'schoolYear' => $year,
'department'=> $departamento,
'level'=> $nivel,
'parallel' => $paralelo,
'idCedula'=>$docente
);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('gestionEducativa.materias', $insert);

if ($result->getInsertedCount() == 1) {
    echo 'registrado';
	
} else {
    echo 'error';
    
}