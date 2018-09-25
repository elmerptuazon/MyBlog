<?php
include 'db_conn.php';

function createData($fname,$lname,$uname,$pwd,$gender,$email,$bday) {
	$conn = OpenCon();
	$userid = substr(md5(uniqid(rand(1,9))), 0, 8);
	$status_num = 1;

	$sql = "INSERT INTO blog_tbl (UID, UserName, FirstName, LastName, Password, Gender, Email, Birthdate) VALUES('$userid', '$fname', '$lname', '$uname', '$pwd', '$gender', '$email', '$bday')";
	$sql_signup_username = "SELECT UserName FROM blog_tbl";
	$sql_signup_username_result = mysqli_query($conn, $sql_signup_username);
	while($row_signup_username = mysqli_fetch_array($sql_signup_username_result, MYSQLI_ASSOC)) {
		if($fname == $row_signup_username['UserName']) {
			echo 'Already signed up';
			exit;
		}
	}
		if ($conn->query($sql) === TRUE) {
   			echo "New record created successfully ";
   			
		} else {
   			echo "Error: " . $sql . "<br>" . $conn->error;
		}
		
	CloseCon($conn);
	}

function readData($uName,$pWord, $session_key) {
session_start(); 
$conn = OpenCon();	
		$login_query = "SELECT * FROM blog_tbl";
		$result = mysqli_query($conn, $login_query);

		while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
			if($uName == $row['UserName']) {
				if($pWord == $row['Password']) {
					echo 'Success';
					exit;
				}
				if($pWord !== $row['Password']) {
					echo 'try again';
					exit;
				}
			}
		}
		if($uName !== $row['UserName']) {
			echo 'try again';
		}
	CloseCon($conn);
	}
	
function updateData($input_username,$input_firstname,$input_lastname,$input_gender,$input_email,$input_birthdate) {
$conn = OpenCon();

		$update_query = "UPDATE blog_tbl SET FirstName = '$input_firstname', LastName = '$input_lastname', Gender = '$input_gender', Email = '$input_email', Birthdate = '$input_birthdate' WHERE UserName = '$input_username'";

		
			if($conn->query($update_query) === TRUE) {
				echo 'Updated';
			}
			else {
				echo 'Error: ' . $conn->error;
			}
		

CloseCon($conn);
}

function deleteData($inputvalue) {
	$conn = OpenCon();
	
	$delete_sql = "DELETE FROM blog_tbl WHERE UserName = '$inputvalue'";

	if($conn->query($delete_sql) === TRUE) {
		echo "Deleted";
	}
	else {
		echo "Error: " . $conn->error;
	}
	
CloseCon($conn);
}

function viewData($input_username) {
	$conn = OpenCon();
	$update_array_list = [];
	$select_query = "SELECT UserName, FirstName, LastName, Gender, Email, Birthdate, Date_Modified, Status FROM blog_tbl WHERE UserName=" . $input_username . "";
	$update_result = mysqli_query($conn, $select_query);

	$update_row = mysqli_fetch_assoc($update_result);
		$update_array_list = array(
			'username' =>$update_row['UserName'],
			'firstname' => $update_row['FirstName'],
			'lastname' => $update_row['LastName'],
			'gender' => $update_row['Gender'],
			'email' => $update_row['Email'],
			'birthdate' => $update_row['Birthdate'],
			'date_modified' => $update_row['Date_Modified'],
			'status' => $update_row['Status']
		);
		echo json_encode($update_array_list);
	CloseCon($conn);
}



	?>