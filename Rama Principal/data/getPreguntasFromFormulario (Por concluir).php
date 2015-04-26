<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$Formulario = '1'; //Aquí viene lo que la progra le mande, por el momento, es estático.
$curs = oci_new_cursor($conn);
$stid = oci_parse($conn, "begin formulario_preguntas.get_Preguntas(:cursbv,:pID_Formulario); end;");
oci_bind_by_name($stid, ":cursbv", $curs, -1, OCI_B_CURSOR);
oci_bind_by_name($stid, ":pID_Formulario", $Formulario);
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