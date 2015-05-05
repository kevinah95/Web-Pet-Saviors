<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }

    $stid = oci_parse($conn, "SELECT * FROM ADOPCIONES WHERE ESTADO = 'COMPLETA'");
    oci_execute($stid);

    // Convierte los datos de la base a Json
    $outp = "[";
    while ($row = oci_fetch_array($stid, OCI_BOTH)) {
        if ($outp != "[") {$outp .= ",";}
        $outp .= '{"IdAdopcion":"'  . $row["ID_ADOPCION"] . '",';
        $outp .= '"Rescatista":"'   . $row["DUENO_PREVIO"]        . '",';
        $outp .= '"Adoptante":"'   . $row["CORREO_ADOPTANTE"] . '",';
        $outp .= '"Mascota":"'   . $row["ID_MASCOTA"] . '",';
        $outp .= '"Comentarios":"'   . $row["COMENTARIOS"] . '",';
        if (oci_field_is_null($stid,"COMENTARIOS")){
        	$outp .= '"COMENTARIOS":"SIN COMENTARIOS"}';
        }else{
        	$outp .= '"COMENTARIOS":"'   . $row["COMENTARIOS"]  . '"}';
        }
        
    }
    $outp .="]";
    echo(utf8_encode ($outp));

    oci_free_statement($stid);
    oci_close($conn);
?>


