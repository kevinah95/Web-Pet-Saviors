<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }

    $stid = oci_parse($conn, "SELECT * FROM Usuarios WHERE CORREOUSUARIO='". $userMail ."' AND CONTRASENIA='". $userPass . "'");
    oci_execute($stid);

    // Convierte los datos de la base a Json
    $outp = "[";
    while ($row = oci_fetch_array($stid, OCI_BOTH)) {
        if ($outp != "[") {$outp .= ",";}
        $outp .= '{"Correo":"'  . $row["CORREOUSUARIO"] . '",';
        $outp .= '"Nombre":"'   . $row["NOMBRE"]        . '",';
        $outp .= '"P_Apellido":"'   . $row["P_APELLIDO"] . '",';
        $outp .= '"S_Apellido":"'   . $row["S_APELLIDO"] . '",';
        $outp .= '"Telefono":"'   . $row["TELEFONO"]   . '",';
        $outp .= '"Es_Rescatista":"'   . $row["ES_RESCATISTA"]   . '",';
        $outp .= '"Es_Adoptante":"'   . $row["ES_ADOPTANTE"]   . '",';
        $outp .= '"Es_Administrador":"'   . $row["ES_ADMINISTRADOR"]   . '",';
        $outp .= '"Esta_ListaNegra":"'   . $row["ESTA_LISTANEGRA"]   . '",';
        if (oci_field_is_null($stid,"NOTAS")){
        	$outp .= '"Notas":"Sin Comentarios"}';
        }else{
        	$outp .= '"Notas":"'   . $row["NOTAS"]  . '"}';
        }
        
    }
    $outp .="]";

    echo(utf8_encode ($outp));

    oci_free_statement($stid);
    oci_close($conn);
?>


