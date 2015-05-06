--Secuencia que maneja los identificadores de la tabla fotos de las adopciones
CREATE SEQUENCE s_idFoto
  START WITH 1
  INCREMENT BY 1
  MINVALUE 1
  MAXVALUE 1000000
  NOCACHE
  NOCYCLE;
/
-----------------------------------------------------------------------------------------------------------------------
--Paquete que contiene todos los procedimientos relacionados a la tabla fotos.
create or replace package FOTOS_PKG
as
  --Procedimiento que agraga una foto a la tabla fotos
  procedure addPhoto(id_adop in number, urlPhoto in varchar2);
  --Procedimiento que remueve una foto de la tabla fotos
  procedure removePhoto(pIDPhoto in number);
end;
/

---------------------------------------------------------------------------------------------------------------------------
create or replace package body FOTOS_PKG
as
  procedure addPhoto(id_adop in number, urlPhoto in varchar2)
  is
    begin
      insert into FOTOS_ADOPCIONES (ID_FOTO, ID_ADOPCION, FOTO)
      values (s_idFoto.nextval, id_adop, urlPhoto);
    end;
  procedure removePhoto(pIDPhoto in number)
  is
    begin
      delete from FOTOS_ADOPCIONES
      where ID_FOTO = pIDPhoto;
    end;
  
end FOTOS_PKG;