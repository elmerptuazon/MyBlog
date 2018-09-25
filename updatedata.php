<?php
include 'crud.php';
$input_username = $_GET['successusername'];
$input_firstname = $_GET['successfirstname'];
$input_lastname = $_GET['successlastname'];
$input_gender = $_GET['successgender'];
$input_email = $_GET['successemail'];
$input_birthdate = $_GET['successbirthdate'];
updateData($input_username,$input_firstname,$input_lastname,$input_gender,$input_email,$input_birthdate,$input_date_modified);
?>
