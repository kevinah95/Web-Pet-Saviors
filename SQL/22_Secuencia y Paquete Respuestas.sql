--Secuencia que determina los identificadores de la tabla respuestas
CREATE SEQUENCE s_idRespuesta
  START WITH 1
  INCREMENT BY 1
  MINVALUE 1
  MAXVALUE 1000000
  NOCACHE
  NOCYCLE;
/
 ---------------------------------------------------------------------------------------------------------------------------
--Paquete con los procedimientos relacionados a la inserción de respuestas
create or replace package RESPUESTAS_USER_PKG
as
  --Procedimiento que inserta respuestas, dadas por el usuario, en la tabla respuestas	
  procedure registrar_respuesta(id_p in number,id_formu in number, c_pregunta in varchar2, c_responde in varchar2, id_pet in number, c_resp in varchar2);
end;
/

create or replace package body RESPUESTAS_USER_PKG
as
  procedure registrar_respuesta(id_p in number, id_formu in number, c_pregunta in varchar2, c_responde in varchar2, id_pet in number, c_resp in varchar2)
  is
    begin
      insert into RESPUESTAS_USER (ID_RESPUESTA, ID_PREGUNTA, ID_FORMULARIO, CORREO_PREGUNTA, CORREO_RESPONDE, ID_MASCOTA, CONT_RESPUESTA)
      values (s_idRespuesta.nextval, id_p, id_formu, c_pregunta, c_responde, id_pet, c_resp);
    end;
end RESPUESTAS_USER_PKG;