--Secuencia que se ejecuta en cada inserción de mascota a la tabla MASCOTA

CREATE SEQUENCE s_idMascota
  START WITH 1
  INCREMENT BY 1
  MINVALUE 1
  MAXVALUE 1000000
  NOCACHE
  NOCYCLE;