<?php           
        
    $newAdop = json_decode(file_get_contents('php://input'));

    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    };

    $sql= "begin 
            ADOPCIONES_PKG.adoptar(
            :pOldUser,
            :pNewUser,
            :pIdMasc,
            :pComentario); end;";

    //Se crea la sentencia usando parse
    $query = oci_parse($conn , $sql);
	
    //Se crean las variables tomadas de los inputs
    oci_bind_by_name($query ,":pOldUser",$newAdop->CORREOUSUARIO_OLD);
    oci_bind_by_name($query ,":pNewUser",$newAdop->CORREOUSUARIO_NEW);
    oci_bind_by_name($query ,":pIdMasc",$newAdop->ID_MASCOTA);
    oci_bind_by_name($query ,":pComentario",$newAdop->COMENTARIO);


    oci_execute($query);
    print('Correcto');

    oci_free_statement($query);
	oci_close($conn);

?>