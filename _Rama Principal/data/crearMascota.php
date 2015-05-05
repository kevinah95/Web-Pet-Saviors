<?php           
    //Carga los datos desde loginService        
    $newMascota=json_decode(file_get_contents('php://input'));

    $conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
    if (!$conn) {
        $e = oci_error();
        trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
    };


    $sql= "begin 
        :ret := MASCOTAS_PAQ.insertar_Mascota(
            :pUSUARIO,
            :pNOMBRE,:pRAZA,:pTIPO,:pENTRENAMIENTO,:pDESCRIPCION,:pTAMANO,:pCOLOR, 
	        :pENERGIA,:pESPACIO,:pPELAJE,:pFOTO_ANTES,:pFOTO_DESPUES,:pESTADO_MASCOTA,
            :pSEVERIDAD, :pVETERINARIO,
            :pENFERMEDAD,:pTRATAMIENTO,:pMEDICAMENTOS,
            :pLUGAR); end;";

    //Se crea la sentencia usando parse
    $query = oci_parse($conn , $sql);
	//Se crean las variables tomadas de los inputs
	
	oci_bind_by_name($query ,":ret",$ret,20);
    oci_bind_by_name($query ,":pUSUARIO",$newMascota->duenio);
    oci_bind_by_name($query ,":pNOMBRE",$newMascota->nombre);
    oci_bind_by_name($query ,":pNOMBRE",$newMascota->nombre);
    oci_bind_by_name($query ,":pRAZA",$newMascota->raza);
    oci_bind_by_name($query ,":pTIPO",$newMascota->tipo);
    oci_bind_by_name($query ,":pENTRENAMIENTO",$newMascota->entrenamiento);
    oci_bind_by_name($query ,":pDESCRIPCION",$newMascota->descripcion);
    oci_bind_by_name($query ,":pTAMANO",$newMascota->tamanio);
    oci_bind_by_name($query ,":pCOLOR",$newMascota->color);
    oci_bind_by_name($query ,":pENERGIA",$newMascota->energia);
    oci_bind_by_name($query ,":pESPACIO",$newMascota->espacio);
    oci_bind_by_name($query ,":pPELAJE",$newMascota->pelaje);
    oci_bind_by_name($query ,":pFOTO_ANTES",$newMascota->fotoAntes);
    oci_bind_by_name($query ,":pFOTO_DESPUES",$newMascota->fotoDespues);
    $estadoMascota="EN ADOPCION";
    oci_bind_by_name($query ,":pESTADO_MASCOTA",$estadoMascota);
    oci_bind_by_name($query ,":pSEVERIDAD",$newMascota->severidad);
    oci_bind_by_name($query ,":pVETERINARIO",$newMascota->veterinario);
    oci_bind_by_name($query ,":pENFERMEDAD",$newMascota->enfermedad);
    oci_bind_by_name($query ,":pTRATAMIENTO",$newMascota->tratamiento);
    oci_bind_by_name($query ,":pMEDICAMENTOS",$newMascota->medicamento);
    oci_bind_by_name($query ,":pLUGAR",$newMascota->lugar);

    oci_execute($query);
    print($ret);

    oci_free_statement($query);
	oci_close($conn);
    

?>