<?php

	$saludID=json_decode(file_get_contents('php://input'));

	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	}

	$curs = oci_new_cursor($conn);
	$stid = oci_parse($conn, "begin MASCOTAS_PAQ.get_InfoMascota(:cursbv,:pSaludIDMascota); end;");
	oci_bind_by_name($stid, ":cursbv", $curs, -1, OCI_B_CURSOR);
	oci_bind_by_name($stid, ":pSaludIDMascota", $saludID);
	oci_execute($stid);
	oci_execute($curs);
	$json = array();
	while($row = oci_fetch_array($curs, OCI_BOTH+OCI_RETURN_NULLS)) {
	    $json[] = array_map("utf8_encode", $row);
	};

	echo json_encode($json, JSON_UNESCAPED_UNICODE+JSON_NUMERIC_CHECK);

	oci_free_statement($stid);
	oci_free_statement($curs);
	oci_close($conn);

?>