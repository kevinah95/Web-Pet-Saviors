<?php 
	
	//Obtiene el usuario .json desde loginService.js
	$editadoMascota=json_decode(file_get_contents('php://input'));  

	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba', 'AL32UTF8');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	};

	// Script SQL
	$sql = "begin 
		MASCOTAS_PAQ.actualizar_mascota( 
		:ID, :Nombre, 
		:Raza, :Tipo, 
		:Entrenamiento, :Descripcion,
		:Tamano, :Color,
		:Energia, :Espacio,
		:Pelaje, :FotoAntes,
		:FotoDespues, :EstadoMascota,
		:Severidad, :Veterinario,
		:Enfermedad, :Tratamiento,
		:Medicamentos, :Lugar,
		:Usuario); end;";

	// Prepara una sentencia de Oracle para su ejecución
	$stid = oci_parse($conn, $sql); // gestor de sentencia

	// Ligando campos con variables
	$IdToInt = (int)$editadoMascota->ID; 
	oci_bind_by_name($stid, ':ID', $IdToInt);
	oci_bind_by_name($stid, ':Nombre', $editadoMascota->Nombre);
	oci_bind_by_name($stid, ':Raza', $editadoMascota->Raza);
	oci_bind_by_name($stid, ':Tipo', $editadoMascota->Tipo);
	oci_bind_by_name($stid, ':Entrenamiento', $editadoMascota->Entrenamiento);
	oci_bind_by_name($stid, ':Descripcion', $editadoMascota->Descripcion);
	oci_bind_by_name($stid, ':Tamano', $editadoMascota->Tamano);
	oci_bind_by_name($stid, ':Color', $editadoMascota->Color);
	oci_bind_by_name($stid, ':Energia', $editadoMascota->Energia);
	oci_bind_by_name($stid, ':Espacio', $editadoMascota->Espacio);
	oci_bind_by_name($stid, ':Pelaje', $editadoMascota->Pelaje);
	oci_bind_by_name($stid, ':FotoAntes', $editadoMascota->FotoAntes);
	oci_bind_by_name($stid, ':FotoDespues', $editadoMascota->FotoDespues);
	oci_bind_by_name($stid, ':EstadoMascota', $editadoMascota->Estado);
	oci_bind_by_name($stid, ':Severidad', $editadoMascota->atrSeveridad);
	oci_bind_by_name($stid, ':Veterinario', $editadoMascota->atrVeterinario);
	oci_bind_by_name($stid, ':Enfermedad', $editadoMascota->atrEnfermedad);
	oci_bind_by_name($stid, ':Tratamiento', $editadoMascota->atrTratamiento);
	oci_bind_by_name($stid, ':Medicamentos', $editadoMascota->atrMedicamentos);
	oci_bind_by_name($stid, ':Lugar', $editadoMascota->Lugar);
	oci_bind_by_name($stid, ':Usuario', $editadoMascota->Usuario);

	//Ejecuntando sentencia
	oci_execute($stid);
	print('Correcto');
	
	//Cierra la conexión
	oci_free_statement($stid);
	oci_close($conn);


	

?>