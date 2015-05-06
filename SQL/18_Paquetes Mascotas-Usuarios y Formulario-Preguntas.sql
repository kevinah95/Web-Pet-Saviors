-----------------------------------------------------------------------------------------------------
--Primer paquete - Obtiene las mascotas de X usuario ------------------------------------------------
-----------------------------------------------------------------------------------------------------

create or replace PACKAGE mascotas_Usuario AS
  procedure get_Usuario_Info(cursorGetMascota out SYS_REFCURSOR, pCorreo USUARIOS.CORREOUSUARIO%type);
end mascotas_Usuario;
/
create or replace PACKAGE BODY mascotas_Usuario AS
  PROCEDURE get_Usuario_Info(cursorGetMascota OUT SYS_REFCURSOR, pCorreo IN USUARIOS.CORREOUSUARIO%TYPE ) as
    begin
      OPEN cursorGetMascota 
        FOR 
        SELECT * from MASCOTAS
        WHERE MASCOTAS.USUARIO_ASOCIADO = pCorreo;
    end;
end mascotas_Usuario;
/
---------------------------------------------------------------------------------------------------
-- Segundo paquete - Obtiene las preguntas de X formulario ----------------------------------------
---------------------------------------------------------------------------------------------------

create or replace PACKAGE formulario_preguntas AS
  procedure get_Preguntas(cursorGetPreguntas out SYS_REFCURSOR, pID_Formulario FORMULARIO.ID_FORMULARIO%type);
end formulario_preguntas;
/
create or replace PACKAGE BODY formulario_preguntas AS
  PROCEDURE get_Preguntas(cursorGetPreguntas OUT SYS_REFCURSOR, pID_Formulario IN FORMULARIO.ID_FORMULARIO%TYPE ) as
    begin
      OPEN cursorGetPreguntas 
        FOR 
          SELECT preguntaFormulario.*
          FROM FORMULARIO tablaFormulario
          JOIN FORM_TIENE_PREGUNTAS relacion 
            ON relacion.ID_FORMUARIO = tablaFormulario.ID_FORMULARIO
          JOIN PREGUNTAS preguntaFormulario
            ON preguntaFormulario.ID_PREGUNTAS = relacion.ID_PREGUNTAS
          WHERE tablaFormulario.ID_FORMULARIO = pID_Formulario;
    end;
end formulario_preguntas;