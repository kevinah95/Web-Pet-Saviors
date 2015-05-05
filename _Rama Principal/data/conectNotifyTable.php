<?php

    //Obtiene el usuario .json desde loginService.js
    $user = json_decode(file_get_contents('php://input'));
    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    }

    $stid = oci_parse($conn, 'SELECT * FROM Notificaciones WHERE DESTINATARIO = :correo');

    oci_bind_by_name($stid,":correo",$user->CORREOUSUARIO);
    oci_execute($stid);


    // Convierte los datos de la base a Json
    $outp = "[";
    while ($row = oci_fetch_array($stid, OCI_BOTH)) {
        if ($outp != "[") {$outp .= ",";}
        $outp .= '{"IdentificadorNotif":"'  . $row["ID_NOTIFICACION"] . '",';
        $outp .= '"IdentificadorFormu":"'   . $row["ID_FORMULARIO"]        . '",';
        $outp .= '"Mascota":"'   . $row["ID_MASCOTA"]        . '",';
        $outp .= '"Remitente":"'   . $row["REMITENTE"] . '",';
        $outp .= '"Destinatario":"'   . $row["DESTINATARIO"] . '",';
        if (oci_field_is_null($stid,"MENSAJE")){
    	   $outp .= '"Mensaje":"Sin Mensaje"}';
        }else{
        	$outp .= '"Mensaje":"'   . $row["MENSAJE"]  . '"}';
        }
        
    }
    $outp .="]";

    echo($outp);

    oci_free_statement($stid);
    oci_close($conn);
?>


