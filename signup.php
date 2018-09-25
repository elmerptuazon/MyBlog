
<?php 
include 'crud.php';
	$fname = $_POST['firstnames'];
	$lname = $_POST['lastnames'];
	$uname = $_POST['unames'];
	$pwd = $_POST['pwds'];
	$email = $_POST['emails'];
	$bday = $_POST['birthdates'];
	$gender = $_POST['options'];
	createData($fname,$lname,$uname,$pwd,$gender,$email,$bday);
	
?>


