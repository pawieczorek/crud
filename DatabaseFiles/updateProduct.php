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

$buyPrice = floatval($buyPrice);
$MSRP = floatval($MSRP);



$query = "UPDATE products SET productCode='" . $productCode. "', productName='" . $productName. "',productLine='" . $productLine. "',productScale='" . $productScale. "', productVendor='" . $productVendor. "',productDescription='" . $productDescription. "', quantityInStock='" . $quantityInStock. "', buyPrice='" . $buyPrice. "', MSRP='" . $MSRP. "' WHERE productCode='" . $productCode. "'";

if (!mysqli_query($con, $query))
{ echo $con->error;}
echo true;
?>