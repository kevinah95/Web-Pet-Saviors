<?php 
	
	//Carga el usuario de login desde loginService,
	$newUsuario=json_decode(file_get_contents('php://input'));  
	
	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	};

	// Script SQL
	$sql = "begin 
		:retorna := USUARIOS_PAQ.INSERTAR_USUARIO( 
		:correo, :nombre, 
		:p_apellido, :s_apellido, 
		:contrasenia, :telefono,
		:es_rescatista, :es_adoptante); end;";

	

	// Prepara una sentencia de Oracle para su ejecución
	$stid = oci_parse($conn, $sql); // gestor de sentencia

	// Ligando campos con variables
	oci_bind_by_name($stid, ':retorna', $respuesta, 20);
	oci_bind_by_name($stid, ':correo', $newUsuario->correo);
	oci_bind_by_name($stid, ':nombre', $newUsuario->nombre);
	oci_bind_by_name($stid, ':p_apellido', $newUsuario->p_apellido);
	oci_bind_by_name($stid, ':s_apellido', $newUsuario->s_apellido);
	oci_bind_by_name($stid, ':contrasenia', $newUsuario->contrasenia);
	oci_bind_by_name($stid, ':telefono', $newUsuario->telefono);
	$bool_rescatista = (int)$newUsuario->es_rescatista;
	oci_bind_by_name($stid, ':es_rescatista', $bool_rescatista);
	$bool_adoptante = (int)$newUsuario->es_adoptante;
	oci_bind_by_name($stid, ':es_adoptante', $bool_adoptante);

	//Ejecuntando sentencia
	oci_execute($stid);
	print($respuesta);
	
?>