<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = oci_connect('PetSaviors', 'PetSaviors', 'localhost/DBPrueba');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT * FROM Mascotas');
oci_execute($stid);

// WHILE que convierte los datos de la base a Json
$outp = "[";
while ($row = oci_fetch_array($stid, OCI_BOTH)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"ID":"'  . $row["ID_MASCOTA"] . '",';
    $outp .= '"Nombre":"'   . $row["NOMBRE_MASCOTA"]        . '",';
    $outp .= '"Tipo":"'   . $row["TIPO_MASCOTA"] . '",';
    $outp .= '"Raza":"'   . $row["RAZA_MASCOTA"] . '",';
    $outp .= '"Entrenamiento":"'   . $row["ENTRENAMIENTO_MASCOTA"]   . '",';
    $outp .= '"Descripcion":"'   . $row["DESCRIPCION_MASCOTA"]   . '",';
    $outp .= '"Tamano":"'   . $row["TAMANO_MASCOTA"]   . '",';
    $outp .= '"Color":"'   . $row["COLOR_MASCOTA"]   . '",';
    $outp .= '"Energia":"'   . $row["ENERGIA_MASCOTA"]   . '",';
    $outp .= '"Espacio":"'   . $row["ESPACIO_MASCOTA"]   . '",';
    $outp .= '"Pelaje":"'   . $row["PELAJE_MASCOTA"]   . '",';
    $outp .= '"FotoAntes":"'   . $row["FOTO_ANTES"]   . '",';
    $outp .= '"FotoDespues":"'   . $row["FOTO_DESPUES"]   . '",';
    $outp .= '"Estado":"'   . $row["ESTADO_MASCOTA"]   . '",';
    $outp .= '"Usuario":"'   . $row["USUARIO_ASOCIADO"]   . '",';
    $outp .= '"Lugar":"'   . $row["LUGAR_DE_ENCUENTRO"]   . '",';
    $outp .= '"IDSalud":"'   . $row["ID_SALUD"]   . '"}';   
}
$outp .="]";

//utf8_encode($String)--->Para convertir a UTF-8
echo(utf8_encode ($outp));

oci_free_statement($stid);
oci_close($conn);
?>


