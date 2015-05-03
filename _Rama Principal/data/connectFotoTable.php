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


// WHILE que convierte los datos de la base a Json
$outp = "[";
while ($row = oci_fetch_array($stid, OCI_BOTH)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"Foto":"'  . $row["FOTO"] . '",';
}
$outp .="]";

//utf8_encode($String)--->Para convertir a UTF-8'

echo(utf8_encode ($outp));

oci_free_statement($stid);
oci_close($conn);
?>


