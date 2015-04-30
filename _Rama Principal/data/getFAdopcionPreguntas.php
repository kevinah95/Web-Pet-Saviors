<?php

$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$curs = oci_new_cursor($conn);
$stid = oci_parse($conn, "begin FORMULARIO_PAQ.get_Preguntas(:cursbv); end;");
oci_bind_by_name($stid, ":cursbv", $curs, -1, OCI_B_CURSOR);
oci_execute($stid);

oci_execute($curs);  // Execute the REF CURSOR like a normal statement id
$json = array();
while (($row = oci_fetch_array($curs, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
    $json[] = array_map("utf8_encode", $row);
}




echo json_encode($json, JSON_UNESCAPED_UNICODE);

//Debug de JSON
// $error = json_last_error();
// var_dump($json, $error === JSON_ERROR_UTF8);




oci_free_statement($stid);
oci_free_statement($curs);
oci_close($conn);
?>