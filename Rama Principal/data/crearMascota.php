<?php           
        
    $newMascota=json_decode(file_get_contents('php://input'));

 //    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
 //    if (!$conn) {
 //        $e = oci_error();
 //        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
 //    };


 //    $sql= "begin 
 //        :ret := MASCOTAS_PAQ.insertar_Mascota(
 //            :pNOMBRE,:pRAZA,:pTIPO,:pENTRENAMIENTO,:pDESCRIPCION,:pTAMANO,:pCOLOR, 
	//         :pENERGIA,:pESPACIO,:pPELAJE,:pFOTO_ANTES,:pFOTO_DESPUES,:pESTADO_MASCOTA,
 //            :pTELEFONO_RESCATISTA,:pCORREO_RESCATISTA,:pSEVERIDAD, :pVETERINARIO,
 //            :pENFERMEDAD,:pTRATAMIENTO,:pMEDICAMENTOS); end;";
 //    //Se crea la sentencia usando parse
 //    $query = oci_parse($cnn , $sql);
	// //Se crean las variables tomadas de los inputs
	
	// oci_bind_by_name($query ,":ret",$ret,20);
 //    oci_bind_by_name($query ,":pNOMBRE",$newMascota->);
 //    oci_bind_by_name($query ,":pRAZA",$newMascota->);
 //    oci_bind_by_name($query ,":pTIPO",$newMascota->);
 //    oci_bind_by_name($query ,":pENTRENAMIENTO",$newMascota->);
 //    oci_bind_by_name($query ,":pDESCRIPCION",$newMascota->);
 //    oci_bind_by_name($query ,":pTAMANO",$newMascota->);
 //    oci_bind_by_name($query ,":pCOLOR",$newMascota->);
 //    oci_bind_by_name($query ,":pENERGIA",$newMascota->);
 //    oci_bind_by_name($query ,":pESPACIO",$newMascota->);
 //    oci_bind_by_name($query ,":pPELAJE",$newMascota->);
 //    oci_bind_by_name($query ,":pFOTO_ANTES",$newMascota->);
 //    oci_bind_by_name($query ,":pFOTO_DESPUES",$newMascota->);
 //    oci_bind_by_name($query ,":pESTADO_MASCOTA",$newMascota->);
 //    oci_bind_by_name($query ,":pTELEFONO_RESCATISTA",$newMascota->);
 //    oci_bind_by_name($query ,":pCORREO_RESCATISTA",$newMascota->);
 //    oci_bind_by_name($query ,":pSEVERIDAD",$newMascota->);
 //    oci_bind_by_name($query ,":pVETERINARIO",$newMascota->);
 //    oci_bind_by_name($query ,":pENFERMEDAD",$newMascota->);
 //    oci_bind_by_name($query ,":pTRATAMIENTO",$newMascota->);
 //    oci_bind_by_name($query ,":pMEDICAMENTOS",$newMascota->);

 //    oci_execute($query);
 //    print($ret);

 //    oci_free_statement($query);
	// oci_close($cnn);
    print_r($newMascota->tamanio);

?>