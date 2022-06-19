<?php
require_once "../db/db.php";
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