<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Registro de Mascotas</title>

    <!-- Bootstrap -->
    <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="bower_components/bootstrap/dist/css/jasny-bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <form action="index.php" method="post">
    <div class="container">
    <div class="row">
        <!-- <div class="col-xs-12 col-sm-12 col-md-4 well well-sm text-center"> -->
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <section class="registro-form">
                <div class="text-center"><h1><span class="label label-default">Registra una Mascota</span></h1></div>
                <form class="form" role="agregarMascota" novalidate> <!-- agregar method="post" ng-submit="formLogin.$valid" -->
                    <div class="form-group"><!--Select de tipos-->
                      <label for="sel1">Tipo de Mascota:</label>
                      <select class="form-control" name="tipoMascota" id="tipoMascota" autofocus> <!--ID NO ESTOY SEGURO, era sel1 anteriormente-->
                        <option>Perro</option>
                        <option>Gato</option>
                        <option>Conejo</option>
                        <option>Tortuga</option>
                      </select>
                    </div>
                    <div class="form-group"><!--Razas-->
                      <label for="sel1">Tipo de Mascota:</label>
                      <select class="form-control" name="razaMascota" id="razaMascota">
                        <option>Huskey</option>
                        <option>Terrier</option>
                        <option>Bull Dog</option>
                        <option>Boxer</option>
                      </select>
                    </div>
                    <!--Nombre-->
                    <input class="form-control" ng-model="newUsuario.nombre" name="nombre" placeholder="Nombre" type="text"/>
                    <!--Descrpcion-->
                    <textarea class="form-control" rows="4" style="margin:10px 0" name="descripcion" placeholder="Descripción breve" type="text"></textarea>
                    <div class="form-group"><!--Select de Tamanio-->
                      <label for="sel1">Tamaño:</label>
                        <label class="radio-inline"><input type="radio" name="tamanio" value="pequenio">Pequeño</label>
                        <label class="radio-inline"><input type="radio" name="tamanio" value="mediano">Mediano</label>
                        <label class="radio-inline"><input type="radio" name="tamanio" value="grande">Grande</label>
                    </div>
                    <div class="form-group"><!--Select de Energia-->
                      <label for="sel1">Energía:</label>
                        <label class="radio-inline"><input type="radio" name="energia" value="perezoso">Perezoso</label>
                        <label class="radio-inline"><input type="radio" name="energia" value="moderado">Moderado</label>
                        <label class="radio-inline"><input type="radio" name="energia" value="activo">Activo</label>
                    </div>
                    <div class="form-group"><!--Select de Pelaje-->
                      <label for="sel1">Pelaje:</label>
                        <label class="radio-inline"><input type="radio" name="pelaje" value="corto">Corto</label>
                        <label class="radio-inline"><input type="radio" name="pelaje" value="medio">Medio</label>
                        <label class="radio-inline"><input type="radio" name="pelaje" value="largo">Largo</label>
                    </div>
                    <div class="form-group"><!--Select de Color-->
                      <label for="sel1">Color:</label>
                        <label class="checkbox-inline"><input type="checkbox" name="color" value="negro">Negro</label>
                        <label class="checkbox-inline"><input type="checkbox" name="color" value="blanco">Blanco</label>
                        <label class="checkbox-inline"><input type="checkbox" name="color" value="cafe">Café</label>
                        <label class="checkbox-inline"><input type="checkbox" name="color" value="gris">Gris</label>
                        <label class="checkbox-inline"><input type="checkbox" name="color" value="dorado">Dorado</label>
                        <label class="checkbox-inline"><input type="checkbox" name="color" value="otro">Otro</label>
                    </div>
                    <div class="form-group"><!--Select de Entrenamiento-->
                      <label for="sel1">Entrenamiento:</label>
                        <label class="radio-inline"><input type="radio" name="entrenamiento" value="si">Si</label>
                        <label class="radio-inline"><input type="radio" name="entrenamiento" value="no">No</label>
                        <label class="radio-inline"><input type="radio" name="entrenamiento" value="ns">No lo sé</label>
                    </div>
                    <div class="form-group"><!--Select de Espacio-->
                      <label for="sel1">Espacio Requerido:</label>
                        <label class="radio-inline"><input type="radio" name="espacio" value="mucho">Patio Amplio</label>
                        <label class="radio-inline"><input type="radio" name="espacio" value="poco">Patio Reducido</label>
                        <label class="radio-inline"><input type="radio" name="espacio" value="casa">Vive en casa</label>
                    </div>
                    <div class="form-group"><!--Severidad-->
                      <label for="sel1">Severidad en que se encontró:</label>
                        <label class="radio-inline"><input type="radio" name="severidad" value="critico">Crítico</label>
                        <label class="radio-inline"><input type="radio" name="severidad" value="mal">Mal Estado</label>
                        <label class="radio-inline"><input type="radio" name="severidad" value="bien">Buen Estado</label>
                    </div>
                    <!--Enfermedades-->
                    <textarea class="form-control" rows="2" style="margin:10px 0" name="enfermedades" placeholder="¿Sufre de alguna enfermedad?" type="text"></textarea>
                    <!--Tratamientos-->
                    <textarea class="form-control" rows="2" style="margin:10px 0" name="tratamientos" placeholder="Si está enfermo. ¿Qué tratamiento sigue?" type="text"></textarea>
                    <!--Medicamento-->
                    <textarea class="form-control" rows="2" style="margin:10px 0" name="medicamentos" placeholder="Indique los medicamentos que consume" type="text"></textarea>
                    <!--Veterinario-->
                    <textarea class="form-control" rows="2" style="margin:10px 0" name="veterinario" placeholder="Indique el nombre del veterinario" type="text"></textarea>
                    <!--Telefono-->
                    <input class="form-control" name="telefono" style="margin:10px 0" placeholder="Teléfono del rescatista" type="text"/>
                    <!--Correo-->
                    <input class="form-control" name="correo" style="margin:10px 0" placeholder="Correo del rescatista" type="text"/>
                    <div class="form-group">
                        <label for="sel1">Adjunta una foto de la mascota recién rescatada:</label>
                    <!--Selecciona Una Imagen-->
                      <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                        <div class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> 
                        <span class="fileinput-filename"></span></div>
                        <span class="input-group-addon btn btn-default btn-file">
                        <span class="fileinput-new">Seleccionar Archivo</span>
                        <span class="fileinput-exists">Cambiar</span>
                        <input type="file" name="fotoAntes"></span>
                        <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Eliminar</a>
                      </div></div>
                      <div class="form-group">
                        <label for="sel1">Adjunta una foto actual de la mascota:</label>
                    <!--Selecciona Una Imagen-->
                      <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                        <div class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> 
                        <span class="fileinput-filename"></span></div>
                        <span class="input-group-addon btn btn-default btn-file">
                        <span class="fileinput-new">Seleccionar Archivo</span>
                        <span class="fileinput-exists">Cambiar</span>
                        <input type="file" name="fotoDespues"></span>
                        <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Eliminar</a>
                      </div></div>
                       <!-- <br /> -->
                    <button class="btn btn-lg btn-primary btn-block" ng-click="crear(newUsuario)" type="submit" style="margin:20px 0" name="ejecutar">
                    Agregar Mascota</button>
                    <div class="form-group">
                        <a href="https://twitter.com/share" class="twitter-share-button" data-text="¡Ayuda a una mascota a encontrar hogar con Pet Saviors!" data-via="PetSaviorsTEC" data-size="large" data-count="none" data-hashtags="RescataUnaMascota">Tweet</a>
                        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
                    </div>
                </form>
            </section>
        </div>
        <div class="col-md-4"></div>
        <!-- </div> -->
        </div>
    </div>
    </form>
    <?php
        if (isset($_POST['ejecutar'])){
            //Aqui se crea la coneccion
            $ret='';
    		$tipoMascota=$_POST['tipoMascota'];
            $razaMascota=$_POST['razaMascota'];
            $nombre=$_POST['nombre'];
            $descripcion=$_POST['descripcion'];
            $tamanio=$_POST['tamanio'];
            $energia=$_POST['energia'];
            $pelaje=$_POST['pelaje'];
            $color=$_POST['color'];
            $entrenamiento=$_POST['entrenamiento'];
            $severidad=$_POST['severidad'];
            $enfermedades=$_POST['enfermedades'];
            $tratamientos=$_POST['tratamientos'];
            $medicamentos=$_POST['medicamentos'];
            $veterinario=$_POST['veterinario'];
            $telefono=$_POST['telefono'];
            $correo=$_POST['correo'];
            $espacio=$_POST['espacio'];
            $fotoAntes=$_POST['fotoAntes'];
            $fotoDespues=$_POST['fotoDespues'];
            $estadoMascota="EN ADOPCION";

            $cnn= oci_connect('PetSaviors','PetSaviors','localhost/dbprueba');
            $sql= "begin :ret := MASCOTAS_PAQ.insertar_Mascota(:pNOMBRE,:pRAZA,:pTIPO,:pENTRENAMIENTO,:pDESCRIPCION,:pTAMANO,:pCOLOR, 
    		:pENERGIA,:pESPACIO,:pPELAJE,:pFOTO_ANTES,:pFOTO_DESPUES,:pESTADO_MASCOTA,:pTELEFONO_RESCATISTA,:pCORREO_RESCATISTA,:pSEVERIDAD, 
    		:pVETERINARIO,:pENFERMEDAD,:pTRATAMIENTO,:pMEDICAMENTOS); end;";
            //Se crea la sentencia usando parse
            $query = oci_parse($cnn , $sql);
    		//Se crean las variables tomadas de los inputs
    		
    		oci_bind_by_name($query ,":ret",$ret,20);
            oci_bind_by_name($query ,":pNOMBRE",$nombre);
            oci_bind_by_name($query ,":pRAZA",$razaMascota);
            oci_bind_by_name($query ,":pTIPO",$tipoMascota);
            oci_bind_by_name($query ,":pENTRENAMIENTO",$entrenamiento);
            oci_bind_by_name($query ,":pDESCRIPCION",$descripcion);
            oci_bind_by_name($query ,":pTAMANO",$tamanio);
            oci_bind_by_name($query ,":pCOLOR",$color);
            oci_bind_by_name($query ,":pENERGIA",$energia);
            oci_bind_by_name($query ,":pESPACIO",$espacio);
            oci_bind_by_name($query ,":pPELAJE",$pelaje);
            oci_bind_by_name($query ,":pFOTO_ANTES",$fotoAntes);
            oci_bind_by_name($query ,":pFOTO_DESPUES",$fotoDespues);
            oci_bind_by_name($query ,":pESTADO_MASCOTA",$estadoMascota);
            oci_bind_by_name($query ,":pTELEFONO_RESCATISTA",$telefono);
            oci_bind_by_name($query ,":pCORREO_RESCATISTA",$correo);
            oci_bind_by_name($query ,":pSEVERIDAD",$severidad);
            oci_bind_by_name($query ,":pVETERINARIO",$veterinario);
            oci_bind_by_name($query ,":pENFERMEDAD",$enfermedades);
            oci_bind_by_name($query ,":pTRATAMIENTO",$tratamientos);
            oci_bind_by_name($query ,":pMEDICAMENTOS",$medicamentos);

            oci_execute($query);
            print($ret);

            oci_free_statement($query);
			oci_close($cnn);
        };
        ?>
   
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  </body>
</html>