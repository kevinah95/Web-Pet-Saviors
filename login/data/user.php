<?php 
	
	$user=json_decode(file_get_contents('php://input'));  //get user from json generated by login function in loginService.js

	$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
	if (!$conn) {
	    $e = oci_error();
	    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
	}

	$stid = oci_parse($conn, "SELECT * FROM Usuarios WHERE CORREOUSUARIO='". $user->mail ."' AND CONTRASENIA='". $user->pass . "'");
	if (!$stid) {
		
	}else{
		oci_execute($stid);
		$row = oci_fetch_array($stid, OCI_BOTH);
		if(!empty($row)){
			
			session_start();
			$_SESSION['uid']=uniqid('ang_');
			print($_SESSION['uid']);	
		};
		
	};
	

	// if($user->mail=='kevinah95@gmail.com' && $user->pass=='1234') {
		
	// }
		
?>