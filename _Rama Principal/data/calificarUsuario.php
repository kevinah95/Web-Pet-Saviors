<?php 
	
	//Obtiene el usuario .json desde loginService.js
	$usuarioCalificado=json_decode(file_get_contents('php://input')); 

	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	};

	// Script SQL
	$sql = "begin 
			CALIFICACIONES.set_Usuario_Calificacion( 
			:pCorreo, :pCalif); end;";

	$stid = oci_parse($conn, $sql);

	$CalifToInt = (int)$usuarioCalificado->Calificacion; 
	oci_bind_by_name($stid, ':pCorreo', $usuarioCalificado->CorreoUsuario);
	oci_bind_by_name($stid, ':pCalif', $CalifToInt);
	
	oci_execute($stid);
	
	oci_free_statement($stid);

	$sql = "begin
			CALIFICACIONES.save_Calificacion(
				:pCalificante, :pCalificador,
				:pCalificacion, :pMotivo
			); end;";

	$stid = oci_parse($conn, $sql);
	oci_bind_by_name($stid, ':pCalificante', $usuarioCalificado->CorreoUsuario);
	oci_bind_by_name($stid, ':pCalificador', $usuarioCalificado->CorreoCalificador);
	oci_bind_by_name($stid, ':pCalificacion', $usuarioCalificado->Calificacion);
	oci_bind_by_name($stid, ':pMotivo', $usuarioCalificado->Motivo);

	oci_execute($stid);
	print('Correcto');

	oci_free_statement($stid);
	oci_close($conn);
?>