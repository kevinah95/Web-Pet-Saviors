<?php 
	
	//Obtiene el usuario .json desde loginService.js
	$editadoUsuario=json_decode(file_get_contents('php://input'));  
	
	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	};

	// Script SQL
	$sql = "begin 
		:retorna := USUARIOS_PAQ.actualizar_Usuario( 
		:correo, :nombre, 
		:p_apellido, :s_apellido, 
		:contrasenia, :telefono,
		:es_rescatista, :es_adoptante,
		:notas, :foto); end;";

	

	// Prepara una sentencia de Oracle para su ejecución
	$stid = oci_parse($conn, $sql); // gestor de sentencia

	// Ligando campos con variables
	oci_bind_by_name($stid, ':retorna', $respuesta, 20);
	oci_bind_by_name($stid, ':correo', $editadoUsuario->CORREOUSUARIO);
	oci_bind_by_name($stid, ':nombre', $editadoUsuario->NOMBRE);
	oci_bind_by_name($stid, ':p_apellido', $editadoUsuario->P_APELLIDO);
	oci_bind_by_name($stid, ':s_apellido', $editadoUsuario->S_APELLIDO);
	oci_bind_by_name($stid, ':contrasenia', $editadoUsuario->CONTRASENIA);
	oci_bind_by_name($stid, ':telefono', $editadoUsuario->TELEFONO);
	$bool_rescatista = (int)$editadoUsuario->ES_RESCATISTA;
	oci_bind_by_name($stid, ':es_rescatista', $bool_rescatista);
	$bool_adoptante = (int)$editadoUsuario->ES_ADOPTANTE;
	oci_bind_by_name($stid, ':es_adoptante', $bool_adoptante);
	oci_bind_by_name($stid, ':notas', $editadoUsuario->NOTAS);
	oci_bind_by_name($stid, ':foto', $editadoUsuario->FOTO);

	//Ejecuntando sentencia
	oci_execute($stid);
	print($respuesta);
	
?>