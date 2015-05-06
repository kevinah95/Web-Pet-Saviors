--Secuencia que determina los identificadores de la tabla Adopción
CREATE SEQUENCE s_idAdopcion
  START WITH 1
  INCREMENT BY 1
  MINVALUE 1
  MAXVALUE 1000000
  NOCACHE
  NOCYCLE;
/
--Paquete con procedimietos relacionados a las adocpiones
create or replace package ADOPCIONES_PKG
as
    --Procedimiento que realiza la adopción de una mascota
    procedure adoptar(old_user in varchar2, new_user in varchar2, id_masc in number, coment in varchar2); 
    --Procedimineto que actualiza el usuario posesor de la mascota
    procedure set_user(pUSUARIO MASCOTAS.USUARIO_ASOCIADO%TYPE,
		       pPet MASCOTAS.ID_MASCOTA%TYPE);
    --Procedimiento que elimina las notificaciones relacionadas a la mascota adoptada
    procedure eliminar_notificaciones(pMASCOTA MASCOTAS.ID_MASCOTA%TYPE);
end;
/

---------------------------------------------------------------------------------------------------------------------------
create or replace package body ADOPCIONES_PKG
as
  
procedure set_user(pUSUARIO MASCOTAS.USUARIO_ASOCIADO%TYPE,
		   pPet MASCOTAS.ID_MASCOTA%TYPE) 
 is
  begin 
    UPDATE mascotas 
    SET USUARIO_ASOCIADO=pUSUARIO
    WHERE ID_MASCOTA=pPet;
end;

procedure eliminar_notificaciones(pMASCOTA MASCOTAS.ID_MASCOTA%TYPE)
is 
  begin
    DELETE FROM NOTIFICACIONES
    WHERE ID_MASCOTA = pMASCOTA;
  end;

procedure adoptar(old_user in varchar2, new_user in varchar2, id_masc in number, coment in varchar2)
  is
    begin
      set_user(new_user,id_masc);
      eliminar_notificaciones(id_masc);      
      insert into ADOPCIONES (id_adopcion,dueno_previo,correo_adoptante,comentarios,id_mascota,estado)
      values (s_idAdopcion.nextval, old_user, new_user, coment, id_masc,'COMPLETA');
  end;
  
end ADOPCIONES_PKG;