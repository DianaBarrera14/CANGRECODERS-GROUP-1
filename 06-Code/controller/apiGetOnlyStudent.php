<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database file
include_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/mongodb_config.php";

$dbname = 'gestionEducativa';
$collection = 'usuarios';


//DB connection
$db = new DbManager();
$conn = $db->getConnection();

//get id and define id to search
$data = json_decode(file_get_contents("php://input", true));
$id = $data->{'type_user'};

// read all records
$filter = [$id];
$option = [];
$read = new MongoDB\Driver\Query(array('type_user'=>$id)); //GetOnlyStudent by "type_user": "Estudiante"

//fetch records
$records = $conn->executeQuery("$dbname.$collection", $read);

echo json_encode(iterator_to_array($records));

?>