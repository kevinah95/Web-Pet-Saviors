<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT * FROM Usuarios WHERE ESTA_LISTANEGRA = 1');
oci_execute($stid);

// WHILE que convierte los datos de la base a Json
$outp = "[";
while ($row = oci_fetch_array($stid, OCI_BOTH +OCI_RETURN_NULLS)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"Correo":"'  . $row["CORREOUSUARIO"] . '",';
    $outp .= '"Nombre":"'   . $row["NOMBRE"]        . '",';
    $outp .= '"P_Apellido":"'   . $row["P_APELLIDO"] . '",';
    $outp .= '"S_Apellido":"'   . $row["S_APELLIDO"] . '",';
    $outp .= '"Telefono":"'   . $row["TELEFONO"]   . '",';
    $outp .= '"Es_Resca":"'   . $row["ES_RESCATISTA"]   . '",';
    $outp .= '"Es_Adopt":"'   . $row["ES_ADOPTANTE"]   . '",';
    $outp .= '"Es_Admin":"'   . $row["ES_ADMINISTRADOR"]   . '",';
    $outp .= '"Esta_LN":"'   . $row["ESTA_LISTANEGRA"]   . '",';
    $outp .= '"Foto":"'   . $row["FOTO"]   . '",';
    $outp .= '"SumaCal":"'   . $row["SUMA_CALIFICACIONES"]   . '",';
    $outp .= '"CantCal":"'   . $row["CANT_CALIFICACIONES"]   . '",';
    $outp .= '"PromCal":"'   . $row["PROM_CALIFICACIONES"]   . '",';
    if (oci_field_is_null($stid,"NOTAS")){
    	$outp .= '"Notas":"Sin Comentarios"}';
    }else{
    	$outp .= '"Notas":"'   . $row["NOTAS"]  . '"}';
    }
    
}
$outp .="]";

//utf8_encode($String)--->Para convertir a UTF-8
echo(utf8_encode ($outp));

oci_free_statement($stid);
oci_close($conn);
?>


