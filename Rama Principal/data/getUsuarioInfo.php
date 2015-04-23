<?php 
	
	$user=json_decode(file_get_contents('php://input'));  //get user from json generated by login function in loginService.js

	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	}
		
	
	$curs = oci_new_cursor($conn);
	$stid = oci_parse($conn, "begin USUARIOS_PAQ.get_Usuario_Info(:cursbv,'".$user->mail."'); end;");
	oci_bind_by_name($stid, ":cursbv", $curs, -1, OCI_B_CURSOR);
	oci_execute($stid);
	oci_execute($curs);  // Execute the REF CURSOR like a normal statement id
	$json = array();
	while (($row = oci_fetch_array($curs, OCI_BOTH+OCI_RETURN_NULLS)) != false) {
	    $json[] = array_map("utf8_encode", $row);
	};

	echo json_encode($json, JSON_UNESCAPED_UNICODE+JSON_NUMERIC_CHECK);

	

	
		
?>