<?php
include 'crud.php';
$uName = $_POST['uname'];
$pWord = $_POST['pwd'];
$session_key = $_POST['storagevalue'];
	readData($uName,$pWord, $session_key);
?>

