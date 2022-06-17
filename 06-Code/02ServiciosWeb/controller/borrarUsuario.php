<?php
require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";
$cedula = 1720792751;//$_POST['cedula'];
$obj = array (
    'cedula' => $cedula,

);

$delete = new MongoDB\Driver\BulkWrite();
$delete->delete($obj);
$result = $manager->executeBulkWrite('gestionEducativa.usuarios', $delete);
if ($result->getRemovedCount() == 1) {
    echo 1;
	
} else {
    echo 0;
    
}