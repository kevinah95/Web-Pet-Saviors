<?php
$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}
$s = oci_parse($conn, "begin :ret :=USUARIOS_PAQ.VERIFICAR_USUARIO( 'kevinah95@gmail.com','124'); end;");
oci_bind_by_name($s, ':ret', $r, 256);
oci_execute($s);
echo "Result is: ".$r;

oci_free_statement($s);
oci_close($conn);
?>