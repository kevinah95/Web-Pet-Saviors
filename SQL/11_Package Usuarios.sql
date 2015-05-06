--Paquete que maneja los procedimientos y funciones relativas a los usuarios.
create or replace PACKAGE usuarios_paq AS 
 --Función que recibe todos los parámetros necesarios para insertar un usuario en la tabla y lo realiza si todas son válidas.   
   FUNCTION insertar_Usuario(
    pcorreo USUARIOS.CORREOUSUARIO%TYPE, 
    pnombre USUARIOS.NOMBRE%TYPE, 
    pApellido USUARIOS.P_APELLIDO%TYPE, 
    sApellido USUARIOS.S_APELLIDO%TYPE, 
    pcontrasenia USUARIOS.CONTRASENIA%TYPE, 
    ptelefono USUARIOS.TELEFONO%TYPE,
    pesRescatista USUARIOS.ES_RESCATISTA%TYPE, 
    pesAdoptante USUARIOS.ES_ADOPTANTE%TYPE)
   RETURN VARCHAR2; 
-------------------------------------   
--Función que recibe todos los parámetros necesarios para actualizar un usuario en la tabla y lo realiza si todas son válidas.
   FUNCTION actualizar_Usuario(
  pCorreo USUARIOS.CORREOUSUARIO%TYPE, 
  pNombre USUARIOS.NOMBRE%TYPE, 
  pApellido USUARIOS.P_APELLIDO%TYPE, 
  sApellido USUARIOS.S_APELLIDO%TYPE, 
  pContrasenia USUARIOS.CONTRASENIA%TYPE, 
  pTelefono USUARIOS.TELEFONO%TYPE,
  pesRescatista USUARIOS.ES_RESCATISTA%TYPE, 
  pesAdoptante USUARIOS.ES_ADOPTANTE%TYPE,
  pNotas USUARIOS.NOTAS%TYPE,
  pFoto USUARIOS.FOTO%TYPE)
  RETURN VARCHAR2;
-------------------------------------
--Función que recibe el identificador de un usuario y verifica si existe
   FUNCTION verificar_Usuario (
    pCorreo IN USUARIOS.CORREOUSUARIO%TYPE,
    pContrasenia IN USUARIOS.CONTRASENIA%TYPE)
   RETURN VARCHAR2;
-------------------------------------
---Cursor que mediante el identificador de un usuario, retorna todos sus atributos
   PROCEDURE get_Usuario_Info(cursorUsuario OUT SYS_REFCURSOR, pCorreo USUARIOS.CORREOUSUARIO%TYPE);

--Procedimiento que cambia el estado de un usuario, determina si está o no en la lista negra
  PROCEDURE set_Lista_Negra(
    pUSUARIO USUARIOS.CORREOUSUARIO%TYPE, 
    pESTADO USUARIOS.ESTA_LISTANEGRA%TYPE);
 
--Procedimiento que cambia el estado de un usuario, determina si es o no administrador   
  PROCEDURE set_Admin(
    pUSUARIO USUARIOS.CORREOUSUARIO%TYPE, 
    pESTADO USUARIOS.ES_ADMINISTRADOR%TYPE);

END usuarios_paq;
/
--------------------------------------------------------------
create or replace PACKAGE BODY USUARIOS_PAQ AS 

FUNCTION insertar_Usuario (
  pCorreo USUARIOS.CORREOUSUARIO%TYPE, 
  pNombre USUARIOS.NOMBRE%TYPE, 
  pApellido USUARIOS.P_APELLIDO%TYPE, 
  sApellido USUARIOS.S_APELLIDO%TYPE, 
  pContrasenia USUARIOS.CONTRASENIA%TYPE, 
  pTelefono USUARIOS.TELEFONO%TYPE,
  pesRescatista USUARIOS.ES_RESCATISTA%TYPE, 
  pesAdoptante USUARIOS.ES_ADOPTANTE%TYPE ) 
RETURN VARCHAR2
IS 
    
   BEGIN 
        INSERT INTO USUARIOS ("CORREOUSUARIO", "NOMBRE", "P_APELLIDO", "S_APELLIDO", "CONTRASENIA", "TELEFONO", "ES_RESCATISTA", "ES_ADOPTANTE")
        VALUES(pCorreo,pNombre,pApellido,sApellido,pContrasenia,pTelefono,pesRescatista,pesAdoptante);
        COMMIT;   
        RETURN 'Insertado';
   EXCEPTION
     WHEN DUP_VAL_ON_INDEX
     THEN
     RETURN 'Error';   
      
   END; 


----------------------------------------------UPDATE
FUNCTION actualizar_Usuario (
  pCorreo USUARIOS.CORREOUSUARIO%TYPE, 
  pNombre USUARIOS.NOMBRE%TYPE, 
  pApellido USUARIOS.P_APELLIDO%TYPE, 
  sApellido USUARIOS.S_APELLIDO%TYPE, 
  pContrasenia USUARIOS.CONTRASENIA%TYPE, 
  pTelefono USUARIOS.TELEFONO%TYPE,
  pesRescatista USUARIOS.ES_RESCATISTA%TYPE, 
  pesAdoptante USUARIOS.ES_ADOPTANTE%TYPE,
  pNotas USUARIOS.NOTAS%TYPE,
  pFoto USUARIOS.FOTO%TYPE)
  RETURN VARCHAR2
  IS 
   BEGIN 
      UPDATE USUARIOS 
      SET NOMBRE = pnombre, P_APELLIDO = pApellido,
      S_APELLIDO = sApellido, CONTRASENIA = pContrasenia,
      TELEFONO = pTelefono, ES_RESCATISTA = pesRescatista,
      ES_ADOPTANTE = pesAdoptante, NOTAS = pNotas,
      FOTO = pFoto 
      WHERE CORREOUSUARIO = pCorreo;
      COMMIT; 
      RETURN 'Actualizado';
   EXCEPTION
     WHEN OTHERS
     THEN
     RETURN 'Error';  
   END; 


----------------------------------------------Verificar
FUNCTION verificar_Usuario (
   pCorreo IN USUARIOS.CORREOUSUARIO%TYPE ,
   pContrasenia IN USUARIOS.CONTRASENIA%TYPE  )
RETURN VARCHAR2
IS
   correo USUARIOS.CORREOUSUARIO%TYPE;
BEGIN
     SELECT CORREOUSUARIO INTO correo
     FROM USUARIOS                 
     WHERE CORREOUSUARIO = pCorreo AND CONTRASENIA = pContrasenia; 
     RETURN 'Registrado';
EXCEPTION
     WHEN NO_DATA_FOUND
     THEN
     RETURN NULL;
END; 
----------------------------------------------

PROCEDURE get_Usuario_Info(cursorUsuario OUT SYS_REFCURSOR, pCorreo IN USUARIOS.CORREOUSUARIO%TYPE ) as
begin
  OPEN cursorUsuario 
    FOR select * from USUARIOS where CORREOUSUARIO = pCorreo;
end;

PROCEDURE set_Lista_Negra(
    pUSUARIO USUARIOS.CORREOUSUARIO%TYPE, 
    pESTADO USUARIOS.ESTA_LISTANEGRA%TYPE) as
begin
    UPDATE USUARIOS 
    SET ESTA_LISTANEGRA=pESTADO 
    WHERE CORREOUSUARIO=pUSUARIO;
end;

PROCEDURE set_Admin(
    pUSUARIO USUARIOS.CORREOUSUARIO%TYPE, 
    pESTADO USUARIOS.ES_ADMINISTRADOR%TYPE) as
begin
    UPDATE USUARIOS 
    SET ES_ADMINISTRADOR=pESTADO 
    WHERE CORREOUSUARIO=pUSUARIO;
end;
-------------------END PAQUETE
END USUARIOS_PAQ;
--##########################
--#       END PAQUETE
--##########################
---- PRUEBAS
-- declare
--    result VARCHAR2(256);
-- BEGIN
--    ----------------CORREO,NOMBRE,P_APELLIDO,S_APELLIDO,CONTRASENIA,TElEFONO,ES_RESCATISTA,ESADOPTANTE
--    result := USUARIOS_PAQ.INSERTAR_USUARIO('kevinah95@gmail.com','juan','juarez','jaramillo','pass',86,1,1);
--    DBMS_OUTPUT.put_line(result);
-- END;

-- BEGIN
--    ----------------CORREO,NOMBRE,P_APELLIDO,S_APELLIDO,CONTRASENIA,TElEFONO,ES_RESCATISTA,ESADOPTANTE,NOTAS,FOTO
--    USUARIOS_PAQ.ACTUALIZAR_USUARIO('j@gmail.com','juan2','juarez2','jaramillo2','pass2',75,1,1,NULL,NULL);
-- END;


-- declare
--    result VARCHAR2(256);
-- begin
--    -- Call the function
--    result := USUARIOS_PAQ.VERIFICAR_USUARIO ('kevinah95@gmail.com','134');
--    DBMS_OUTPUT.put_line(result);
-- end;