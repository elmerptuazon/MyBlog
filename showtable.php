<?php
include 'db_conn.php';
$conn = OpenCon();
	$show_query = "SELECT * FROM blog_tbl";
	$show_table_query = mysqli_query($conn, $show_query);

		while($row_table = mysqli_fetch_assoc($show_table_query)) {
			$list = array(
				'Username'=>$row_table['UserName'],
				'Firstname'=>$row_table['FirstName'],
				'Lastname'=>$row_table['LastName'],
				'Password'=>$row_table['Password'],
				'Gender'=>$row_table['Gender'],
				'Email'=>$row_table['Email'],
				'Birthdate'=>$row_table['Birthdate'],
				'Date Created'=>$row_table['Date_Created'],
				'Date Modified'=>$row_table['Date_Modified'],
				'Status'=>$row_table['Status']

			);
		}
		echo json_encode($list);

CloseCon($conn);
?>