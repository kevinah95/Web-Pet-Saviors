declare
   result VARCHAR2(256);
BEGIN
   result := MASCOTAS_PAQ.insertar_Mascota(
    2, 'YOYO','SCHNAUSER','PERRO', 'ENTRENADO','BIGOTES Y CEJAS PELUDAS','MEDIANO','GRIS','ACTIVO','POCO ESPACIO','CORTO',
    'URL FOTOA1','URL FOTOA2','EN ADOPCION',22494007,'aleasan@hotmail.com','GOLPEADO','JORGE VEGA','NO', 'NO','NO');
   DBMS_OUTPUT.put_line(result);
END;
--Prueba de insercion
create or replace PACKAGE mascotas_paq AS  
   FUNCTION insertar_Mascota(
    pID MASCOTAS.ID_MASCOTA%TYPE, 
    pNOMBRE MASCOTAS.NOMBRE_MASCOTA%TYPE, 
    pRAZA MASCOTAS.RAZA_MASCOTA%TYPE, 
    pTIPO MASCOTAS.TIPO_MASCOTA%TYPE, 
    pENTRENAMIENTO MASCOTAS.ENTRENAMIENTO_MASCOTA%TYPE, 
    pDESCRIPCION MASCOTAS.DESCRIPCION_MASCOTA%TYPE,
    pTAMANO MASCOTAS.TAMANO_MASCOTA%TYPE, 
    pCOLOR MASCOTAS.COLOR_MASCOTA%TYPE, 
    pENERGIA MASCOTAS.ENERGIA_MASCOTA%TYPE, 
    pESPACIO MASCOTAS.ESPACIO_MASCOTA%TYPE, 
    pPELAJE MASCOTAS.PELAJE_MASCOTA%TYPE, 
    pFOTO_ANTES MASCOTAS.FOTO_ANTES%TYPE, 
    pFOTO_DESPUES MASCOTAS.FOTO_DESPUES%TYPE, 
    pESTADO_MASCOTA MASCOTAS.ESTADO_MASCOTA%TYPE, 
    pTELEFONO_RESCATISTA MASCOTAS.TELEFONO_RESCATISTA%TYPE, 
    pCORREO_RESCATISTA MASCOTAS.CORREO_RESCATISTA%TYPE, 
    pSEVERIDAD ESTADO_DE_SALUD.SEVERIDAD%TYPE, 
    pVETERINARIO ESTADO_DE_SALUD.NOMBRE_VETERINARIO%TYPE, 
    pENFERMEDAD ESTADO_DE_SALUD.NOMBRE_ENFERMEDAD%TYPE, 
    pTRATAMIENTO ESTADO_DE_SALUD.NOMBRE_TRATAMIENTO%TYPE, 
    pMEDICAMENTOS ESTADO_DE_SALUD.NOMBRE_MEDICAMENTOS%TYPE)
RETURN VARCHAR2;
   --PROCEDURE actualizar_Mascota(pcorreo VARCHAR2, pnombre VARCHAR2, 
     -- pApellido VARCHAR2, sApellido VARCHAR2, 
     -- pcontrasenia VARCHAR2, ptelefono NUMBER,
     -- pesRescatista NUMBER, pesAdoptante NUMBER,
     -- pNotas VARCHAR2, pFoto VARCHAR2);
   FUNCTION verificar_Mascota (
    pID IN MASCOTAS.ID_MASCOTA%TYPE)
   RETURN VARCHAR2;
END mascotas_paq;

--BODY
create or replace PACKAGE BODY MASCOTAS_PAQ AS --Second part
FUNCTION insertar_Mascota(
    pID MASCOTAS.ID_MASCOTA%TYPE, 
    pNOMBRE MASCOTAS.NOMBRE_MASCOTA%TYPE, 
    pRAZA MASCOTAS.RAZA_MASCOTA%TYPE, 
    pTIPO MASCOTAS.TIPO_MASCOTA%TYPE, 
    pENTRENAMIENTO MASCOTAS.ENTRENAMIENTO_MASCOTA%TYPE, 
    pDESCRIPCION MASCOTAS.DESCRIPCION_MASCOTA%TYPE,
    pTAMANO MASCOTAS.TAMANO_MASCOTA%TYPE, 
    pCOLOR MASCOTAS.COLOR_MASCOTA%TYPE, 
    pENERGIA MASCOTAS.ENERGIA_MASCOTA%TYPE, 
    pESPACIO MASCOTAS.ESPACIO_MASCOTA%TYPE, 
    pPELAJE MASCOTAS.PELAJE_MASCOTA%TYPE, 
    pFOTO_ANTES MASCOTAS.FOTO_ANTES%TYPE, 
    pFOTO_DESPUES MASCOTAS.FOTO_DESPUES%TYPE, 
    pESTADO_MASCOTA MASCOTAS.ESTADO_MASCOTA%TYPE, 
    pTELEFONO_RESCATISTA MASCOTAS.TELEFONO_RESCATISTA%TYPE, 
    pCORREO_RESCATISTA MASCOTAS.CORREO_RESCATISTA%TYPE, 
    pSEVERIDAD ESTADO_DE_SALUD.SEVERIDAD%TYPE, 
    pVETERINARIO ESTADO_DE_SALUD.NOMBRE_VETERINARIO%TYPE, 
    pENFERMEDAD ESTADO_DE_SALUD.NOMBRE_ENFERMEDAD%TYPE, 
    pTRATAMIENTO ESTADO_DE_SALUD.NOMBRE_TRATAMIENTO%TYPE, 
    pMEDICAMENTOS ESTADO_DE_SALUD.NOMBRE_MEDICAMENTOS%TYPE)
RETURN VARCHAR2
IS    
   BEGIN 
        INSERT ALL
        INTO ESTADO_DE_SALUD("ID_SALUD","NOMBRE_VETERINARIO","NOMBRE_ENFERMEDAD","NOMBRE_TRATAMIENTO","NOMBRE_MEDICAMENTOS","SEVERIDAD")
        VALUES(pID,pVETERINARIO,pENFERMEDAD,pTRATAMIENTO,pMEDICAMENTOS,pSEVERIDAD)
        INTO MASCOTAS("ID_MASCOTA","NOMBRE_MASCOTA","TIPO_MASCOTA","RAZA_MASCOTA","ENTRENAMIENTO_MASCOTA","DESCRIPCION_MASCOTA","TAMANO_MASCOTA","COLOR_MASCOTA","ENERGIA_MASCOTA","ESPACIO_MASCOTA","PELAJE_MASCOTA","FOTO_ANTES","FOTO_DESPUES","ESTADO_MASCOTA","ID_SALUD","TELEFONO_RESCATISTA","CORREO_RESCATISTA") 
        VALUES(pID,pNOMBRE,pTIPO,pRAZA,pENTRENAMIENTO,pDESCRIPCION,pTAMANO,pCOLOR,pENERGIA,pESPACIO,pPELAJE,pFOTO_ANTES,pFOTO_DESPUES,'EN ADOPCION',pID,pTELEFONO_RESCATISTA,pCORREO_RESCATISTA) 
        SELECT * FROM dual;
        COMMIT;   
        RETURN 'Insertado';
   EXCEPTION
     WHEN DUP_VAL_ON_INDEX
     THEN
     RETURN 'Error';     
   END; 


----------------------------------------------Verificar
FUNCTION verificar_Mascota (
   pID IN MASCOTAS.ID_MASCOTA%TYPE)
RETURN VARCHAR2
IS
   id MASCOTAS.ID_MASCOTA%TYPE;
BEGIN
     SELECT ID_MASCOTA INTO id
     FROM MASCOTAS                 
     WHERE ID_MASCOTA = pID; 
     RETURN 'Registrado';
EXCEPTION
     WHEN NO_DATA_FOUND
     THEN
     RETURN NULL;
END; 
-------------------END PAQUETE
END MASCOTAS_PAQ;