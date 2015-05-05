<?php           
    $newDEV = json_decode(file_get_contents('php://input'));
    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    };


    $sql= "begin 
            DEVOLUCIONES_PKG.devolver(
            :pDevuelve,
            :pRescata,
            :pIDMasc,
            :pMotivo); end;";

    //Se crea la sentencia usando parse
    $query = oci_parse($conn , $sql);
	//Se crean las variables tomadas de los inputs

    oci_bind_by_name($query ,":pRescata",$newDEV->RESCATA);
    oci_bind_by_name($query ,":pDevuelve",$newDEV->DEVUELVE);
    oci_bind_by_name($query ,":pIDMasc",$newDEV->IDMASCOTA);
    oci_bind_by_name($query ,":pMotivo",$newDEV->MOTIVO);
    print_r($newDEV->DEVUELVE);


    oci_execute($query);

?>