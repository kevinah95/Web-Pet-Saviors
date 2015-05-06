-----------------------------------------------------------------------------------------------------
-- Paquete Calificaciones - Califica Usuarios ------------------------------------------------
-----------------------------------------------------------------------------------------------------
--Secuencia que maneja los identificadores de la tabla calificaciones.
CREATE SEQUENCE  "PETSAVIORS"."S_IDCALIFICACION"  MINVALUE 1 MAXVALUE 1000000 INCREMENT BY 1 START WITH 4 NOCACHE  NOORDER  NOCYCLE ;
 
 --Paquete que almacena los procedimientos relacionados a la tabla calificaciones.
create or replace PACKAGE CALIFICACIONES AS
  --Procedimiento que actualiza la calificación de un usuario determinado en la tabla USUARIO.
  procedure set_Usuario_Calificacion(pCorreo USUARIOS.CORREOUSUARIO%type, pCalif USUARIOS.SUMA_CALIFICACIONES%type);
  --Procedimiento que ingresa una nueva calificación en la tabla claificaciones.
  procedure save_Calificacion(pCalificante ALL_CALIFICACIONES.CALIFICANTE%type, 
  pCalificador ALL_CALIFICACIONES.CALIFICADOR%type, pCalificacion ALL_CALIFICACIONES.CALIFICACION%type, 
  pMotivo ALL_CALIFICACIONES.MOTIVO%type);
end CALIFICACIONES;
/
create or replace PACKAGE BODY CALIFICACIONES AS
  PROCEDURE set_Usuario_Calificacion(pCorreo USUARIOS.CORREOUSUARIO%type, pCalif USUARIOS.SUMA_CALIFICACIONES%type) as
    begin
      update usuarios 
      set SUMA_CALIFICACIONES = SUMA_CALIFICACIONES + pCalif,
          CANT_CALIFICACIONES = CANT_CALIFICACIONES + 1
      where CORREOUSUARIO = pCorreo;
    end;

  PROCEDURE save_Calificacion(pCalificante ALL_CALIFICACIONES.CALIFICANTE%type, 
                              pCalificador ALL_CALIFICACIONES.CALIFICADOR%type, 
                              pCalificacion ALL_CALIFICACIONES.CALIFICACION%type, 
                              pMotivo ALL_CALIFICACIONES.MOTIVO%type) as
    begin
      insert 
      into all_calificaciones("ID_CALIFICACION", "CALIFICANTE", "CALIFICADOR", "CALIFICACION", "MOTIVO")
      values (S_IDCALIFICACION.NEXTVAL, pCalificante, pCalificador, pCalificacion, pMotivo);
      commit;
    end;
end CALIFICACIONES;