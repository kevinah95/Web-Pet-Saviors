<?php           
        
    $Objeto=json_decode(file_get_contents('php://input'));

    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    };

    
    

    $sql= "begin TIPOS_RAZAS_PAQ.Insertar_Tipo(:pTipo); end;";

    //Se crea la sentencia usando parse
    $query = oci_parse($conn , $sql);
	//Se crean las variables tomadas de los inputs
    oci_bind_by_name($query ,":pTipo",$Objeto->tipo);
    oci_execute($query);
    oci_free_statement($query);

    for ($i=0; $i < count($Objeto->razas); $i++) {
        // print_r($Objeto->razas[$i]->raza);
        $sql= "begin 
        :ret := TIPOS_RAZAS_PAQ.Insertar_Raza(:pRaza,:pTipo); end;";
        $query = oci_parse($conn , $sql);
        oci_bind_by_name($query ,":ret",$ret,20);
        oci_bind_by_name($query ,":pRaza",$Objeto->razas[$i]->raza);
        oci_bind_by_name($query ,":pTipo",$Objeto->tipo);
        oci_execute($query);
    }
    
    print($ret);

    oci_free_statement($query);    
    
	oci_close($conn);
    

?>