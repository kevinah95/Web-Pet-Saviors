<?php           
        
    $newUser = json_decode(file_get_contents('php://input'));

    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    };


    $sql= "begin 
            USUARIOS_PAQ.set_Lista_Negra(
            :pID,
            :pNuevoEstado); end;";

    //Se crea la sentencia usando parse
    $query = oci_parse($conn , $sql);
	//Se crean las variables tomadas de los inputs
    oci_bind_by_name($query ,":pID",$newUser->CORREO);
    oci_bind_by_name($query ,":pNuevoEstado",$newUser->ESTADO);


    oci_execute($query);

    oci_free_statement($query);
	oci_close($conn);

?>