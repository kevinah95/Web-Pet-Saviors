<?php           
        
    $newFoto = json_decode(file_get_contents('php://input'));

    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    };


    $sql= "begin 
            FOTOS_PKG.addPhoto(
            :pID,
            :pURL); end;";

    //Se crea la sentencia usando parse
    $query = oci_parse($conn , $sql);
	//Se crean las variables tomadas de los inputs
    oci_bind_by_name($query ,":pID",$newFoto->idAdop);
    oci_bind_by_name($query ,":pURL",$newFoto->url);

    oci_execute($query);

    oci_free_statement($query);
	oci_close($conn);

?>