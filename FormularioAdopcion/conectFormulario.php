<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT * FROM FORMULARIOS');
oci_execute($stid);

// WHILE que convierte los datos de la base a Json
$outp = "[";
while ($row = oci_fetch_array($stid, OCI_BOTH)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"id":"'  . $row["ID_FORMULARIO"] . '",';
    $outp .= '"tipoF":"'   . $row["TIPO_DE_FORMULARIO"]   . '"}';   
}
$outp .="]";

//utf8_encode($String)--->Para convertir a UTF-8
echo(utf8_encode ($outp));

oci_free_statement($stid);
oci_close($conn);
?>


