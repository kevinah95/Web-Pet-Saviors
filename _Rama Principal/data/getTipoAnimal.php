<?php

	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	}

	$curs = oci_new_cursor($conn);
	$stid = oci_parse($conn, "begin MASCOTAS_PAQ.get_TIPOANIMAL(:cursbv); end;");
	oci_bind_by_name($stid, ":cursbv", $curs, -1, OCI_B_CURSOR);
	oci_execute($stid);

	//Ejecuta el ref cursor como un id normal
	oci_execute($curs);
	$json = array();
	while (($row = oci_fetch_array($curs, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
	    $json[] = array_map("utf8_encode", $row);
	}
	echo json_encode($json, JSON_UNESCAPED_UNICODE);
	oci_free_statement($stid);
	oci_free_statement($curs);
	oci_close($conn);
?>