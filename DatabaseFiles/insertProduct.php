<?php

require_once 'database_connections.php';

$data = json_decode(file_get_contents("php://input"));

$productCode = mysqli_real_escape_string($con, $data->productCode);
$productName = mysqli_real_escape_string($con, $data->productName);
$productLine = mysqli_real_escape_string($con, $data->productLine);
$productScale = mysqli_real_escape_string($con, $data->productScale);
$productVendor = mysqli_real_escape_string($con, $data->productVendor);
$productDescription = mysqli_real_escape_string($con, $data->productDescription);
$quantityInStock = mysqli_real_escape_string($con, $data->quantityInStock);
$buyPrice = mysqli_real_escape_string($con, $data->buyPrice);
$MSRP = mysqli_real_escape_string($con, $data->MSRP);




$query = "INSERT into products (productCode,productName,productLine,productScale,productVendor,productDescription,quantityInStock,buyPrice,MSRP) VALUES ('$productCode','$productName','$productLine','$productScale','$productVendor','$productDescription','$quantityInStock','$buyPrice','$MSRP')";



if (!mysqli_query($con, $query))
{ echo $con->error;}
echo true;
?>