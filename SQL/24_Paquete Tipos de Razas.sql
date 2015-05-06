--Paquete que contiene todos los procedimientos relacionados con la tabla tipos y razas de animales.
create or replace PACKAGE TIPOS_RAZAS_PAQ AS 
  --Procedimiento que inserta un tipo de animal en la tabla respectiva.
  PROCEDURE Insertar_Tipo(p1 TIPO_DE_ANIMAL.NOMBRE_TIPO%TYPE);
  --Procedimiento que inserta una raza en la tabla respectiva y se asocia con su tipo de animal.
  FUNCTION Insertar_Raza(p1 RAZA.NOMBRE_RAZA%TYPE, p2 TIPO_DE_ANIMAL.NOMBRE_TIPO%TYPE) RETURN VARCHAR2;

END TIPOS_RAZAS_PAQ;
/
create or replace PACKAGE BODY TIPOS_RAZAS_PAQ AS

  PROCEDURE Insertar_Tipo(p1 TIPO_DE_ANIMAL.NOMBRE_TIPO%TYPE)  AS
  BEGIN
    -- TAREA: Se necesita implantación para FUNCTION TIPOS_RAZAS_PAQ.Insertar_Tipo
    INSERT INTO TIPO_DE_ANIMAL("NOMBRE_TIPO")
    VALUES(p1);
    INSERT INTO RAZA("NOMBRE_RAZA")
    VALUES('Raza Única');
    COMMIT;
   EXCEPTION
      WHEN DUP_VAL_ON_INDEX THEN
      DBMS_OUTPUT.PUT_LINE('Duplicate value on an index');
  END Insertar_Tipo;
  
  FUNCTION Insertar_Raza(p1 RAZA.NOMBRE_RAZA%TYPE, p2 TIPO_DE_ANIMAL.NOMBRE_TIPO%TYPE)
  RETURN VARCHAR2
IS
  BEGIN
  INSERT ALL
  INTO RAZA("NOMBRE_RAZA") 
  VALUES (p1)
  INTO ANIMAL_TIENE_RAZA("NOMBRE_TIPO","NOMBRE_RAZA") 
  VALUES (p2,p1)
  SELECT * FROM dual;
  Commit;
  Return 'Insertado';
   EXCEPTION
     WHEN DUP_VAL_ON_INDEX
     THEN
     RETURN 'Error';
     WHEN OTHERS
     THEN
     RETURN 'Error';
  END;
  

END TIPOS_RAZAS_PAQ;