--Secuencia que maneja los identificadores de la tabla devoluciones.
CREATE SEQUENCE  "PETSAVIORS"."S_IDDEVOLUCION"  MINVALUE 1 MAXVALUE 1000000 INCREMENT BY 1 START WITH 16 NOCACHE  NOORDER  NOCYCLE ;
/
--Paquete que tiene todos los procedimientos relativos a la tabla devoluciones.
create or replace package DEVOLUCIONES_PKG
as
    --Procedimiento que recibe los datos de una mascota y realiza la devolución a partir de los datos de la adopción
    procedure devolver(old_user in varchar2, new_user in varchar2, id_masc in number, coment in varchar2, adopcion in number); 
    --Procedimiento que actualiza el usuario que posee la mascota
    procedure set_user(pUSUARIO MASCOTAS.USUARIO_ASOCIADO%TYPE,
		       pPet MASCOTAS.ID_MASCOTA%TYPE);
    --Procedimiento que elimina una adopción de la tabla adopciones (no usada, debido a que se maneja con un identificador en la adopción)
    procedure eliminar_adopcion(pMASCOTA MASCOTAS.ID_MASCOTA%TYPE);
    --Procedimiento que actualiza el estado de una adopción (COMPLETA O INCOMPLETA)
    procedure actualizar_estado(pESTADO ADOPCIONES.ESTADO%TYPE, pID ADOPCIONES.ID_ADOPCION%TYPE);
end;
/
------------------------------
create or replace package body DEVOLUCIONES_PKG
as
procedure actualizar_estado(pESTADO ADOPCIONES.ESTADO%TYPE, pID ADOPCIONES.ID_ADOPCION%TYPE)
is
  begin
    UPDATE ADOPCIONES
    SET ESTADO = pESTADO
    WHERE ID_ADOPCION=pID;
END;  
procedure set_user(pUSUARIO MASCOTAS.USUARIO_ASOCIADO%TYPE,
		   pPet MASCOTAS.ID_MASCOTA%TYPE) 
 is
  begin 
    UPDATE mascotas 
    SET USUARIO_ASOCIADO=pUSUARIO
    WHERE ID_MASCOTA=pPet;
end;
procedure eliminar_adopcion(pMASCOTA MASCOTAS.ID_MASCOTA%TYPE)
is 
  begin
    DELETE FROM ADOPCIONES
    WHERE ID_MASCOTA = pMASCOTA;
  end;

procedure devolver(old_user in varchar2, new_user in varchar2, id_masc in number, coment in varchar2,adopcion in number)
  is
    begin
      set_user(new_user,id_masc);
      actualizar_estado('INCOMPLETA',adopcion);
      insert into DEVOLUCIONES (id_devolucion,usuario_devuelve,usuario_rescatista,motivo,id_mascota)
      values (s_idDevolucion.nextval, old_user, new_user, coment, id_masc);
  end;
  
end devoluciones_PKG;