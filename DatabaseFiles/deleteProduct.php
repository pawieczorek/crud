<?php
require_once 'database_connections.php';
$data = json_decode(file_get_contents("php://input"));
$query = "DELETE FROM products WHERE productCode='" . $data->del_id . "'";

if (!mysqli_query($con, $query))
{ echo $con->error;}
echo true;
?>