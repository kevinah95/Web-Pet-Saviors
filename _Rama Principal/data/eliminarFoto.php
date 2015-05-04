<?php           
        
    $photo = file_get_contents('php://input');
    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    };
    $sql= "begin 
            FOTOS_PKG.removePhoto(
            :pID); end;";

    //Se crea la sentencia usando parse
    $query = oci_parse($conn , $sql);
	//Se crean las variables tomadas de los inputs
    oci_bind_by_name($query ,":pID",$photo);
    oci_execute($query);
    oci_free_statement($query);
	oci_close($conn);

?>