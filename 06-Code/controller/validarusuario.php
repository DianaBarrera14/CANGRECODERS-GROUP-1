
<?php
require_once "../db/db.php";
$usuario = "jfcarrera3";//$_POST['usuario'] ;
$password = 1711990836;//$_POST['password'] ;
$query = new MongoDB\Driver\Query(array('user' => $usuario,'password'=>$password));

 //Output of the executeQuery will be object of MongoDB\Driver\Cursor class
$cursor = $manager->executeQuery('gestionEducativa.usuarios', $query);
// Convert cursor to Array and print result
$users = $cursor->toArray();
$result = count($users);

if ($result != 0) {
      echo 1;
}else{
    echo 0;
};
?>
