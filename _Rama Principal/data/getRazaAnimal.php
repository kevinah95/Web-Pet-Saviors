<?php

	$tipoAnimal=file_get_contents('php://input');

	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba' ,'AL32UTF8');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	}

	$curs = oci_new_cursor($conn);
	$stid = oci_parse($conn, "begin MASCOTAS_PAQ.get_RazaAnimal(:cursbv,:pTipoAnimal); end;");
	oci_bind_by_name($stid, ":cursbv", $curs, -1, OCI_B_CURSOR);
	oci_bind_by_name($stid, ':pTipoAnimal', $tipoAnimal);
	oci_execute($stid);

	//Ejecuta el ref cursor como un id normal
	oci_execute($curs);
	$json = array();
	while (($row = oci_fetch_array($curs, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
	    $json[] = array_map(null, $row);
	}
	echo json_encode($json, JSON_UNESCAPED_UNICODE);
	oci_free_statement($stid);
	oci_free_statement($curs);
	oci_close($conn);
?>