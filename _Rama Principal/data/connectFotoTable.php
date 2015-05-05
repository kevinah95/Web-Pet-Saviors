<?php 
	$adopcion = file_get_contents('php://input');
	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	}

	$stid = oci_parse($conn, 'SELECT * FROM FOTOS_ADOPCIONES WHERE ID_ADOPCION = :id_adop');
	oci_bind_by_name($stid,":id_adop",$adopcion);
	oci_execute($stid);


	// Convierte los datos de la base a Json
    $outp = "[";
	while ($row = oci_fetch_array($stid, OCI_BOTH)) {
	    if ($outp != "[") {$outp .= ",";}
	    $outp .= '{"IdFoto":"'  . $row["ID_FOTO"] . '",';
	    $outp .= '"Foto":"'  . $row["FOTO"] . '"}';
	}
	$outp .="]";

	
	echo(utf8_encode ($outp));
	oci_free_statement($stid);
	oci_close($conn);
?>


