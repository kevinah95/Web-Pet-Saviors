--Tabla ADOPCIONES se manejan todas las adopciones, datos del rescatista, adoptante, comentarios y mascotas.
CREATE TABLE PETSAVIORS.ADOPCIONES
  (
    ID_ADOPCION                 NUMBER NOT NULL ,
    DUENO_PREVIO                VARCHAR2 (256 CHAR) NOT NULL ,
    
    CORREO_ADOPTANTE            VARCHAR2 (256 CHAR) NOT NULL ,
    COMENTARIOS                 VARCHAR2 (256 CHAR) , 
    ESTADO                      VARCHAR2(30 BYTE) NOT NULL,
    
    ID_MASCOTA                  NUMBER NOT NULL ,
    
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
) ;

ALTER TABLE PETSAVIORS.ADOPCIONES ADD CONSTRAINT ADOPCIONES_PK PRIMARY KEY ( ID_ADOPCION ) ;

--Tabla FOTOS_ADOPCIONES se manejan todas las fotos de adopciones, con adopción relacionada, dirección de la foto y su identificador.
CREATE TABLE PETSAVIORS.FOTOS_ADOPCIONES
(
    ID_FOTO                     NUMBER NOT NULL , 
    ID_ADOPCION                 NUMBER NOT NULL ,
    FOTO                        VARCHAR2 (250 BYTE) ,
    
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
) ;
ALTER TABLE PETSAVIORS.FOTOS_ADOPCIONES ADD CONSTRAINT FOTO_ADOP_PK PRIMARY KEY ( ID_FOTO ) ;
ALTER TABLE PETSAVIORS.FOTOS_ADOPCIONES ADD CONSTRAINT FK_ID_ADOPCION FOREIGN KEY ( ID_ADOPCION ) REFERENCES PETSAVIORS.ADOPCIONES ( ID_ADOPCION ) ;
 
--Tabla ANIMAL_TIENE_RAZA, tabla de relación que enlaza al animal con su raza, guarda el tipo de animal y su respectiva raza.
CREATE TABLE PETSAVIORS.ANIMAL_TIENE_RAZA
(
    NOMBRE_TIPO                 VARCHAR2 (50 BYTE) NOT NULL ,
    NOMBRE_RAZA                 VARCHAR2 (50 BYTE) NOT NULL ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
ALTER TABLE PETSAVIORS.ANIMAL_TIENE_RAZA ADD CONSTRAINT ANIMAL_T_RAZA_PK PRIMARY KEY ( NOMBRE_TIPO, NOMBRE_RAZA ) ;

--TABLA ESTADO_DE_SALUD, tabla que maneja los datos de salus de cada mascota, guarda el veterinario, enfermedad, tratamiente, medicamentos y severidad.
CREATE TABLE PETSAVIORS.ESTADO_DE_SALUD
  (
    ID_SALUD                    NUMBER NOT NULL ,
    NOMBRE_VETERINARIO          VARCHAR2 (50 CHAR) ,
    NOMBRE_ENFERMEDAD           VARCHAR2 (50 CHAR) ,
    NOMBRE_TRATAMIENTO          VARCHAR2 (50 CHAR) ,
    NOMBRE_MEDICAMENTOS         VARCHAR2 (50 CHAR) ,
    SEVERIDAD                   VARCHAR2 (50 BYTE) ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
CREATE UNIQUE INDEX PETSAVIORS.ID_SALUD_PK ON PETSAVIORS.ESTADO_DE_SALUD
  (
    ID_SALUD ASC
  )
  ;
  ALTER TABLE PETSAVIORS.ESTADO_DE_SALUD ADD CONSTRAINT ID_SALUD_PK PRIMARY KEY ( ID_SALUD ) ;

--Tabla FORMULARIO, tabla que almacena los datos de cada formulario, guarda el tipo de formulario y su identificador.
CREATE TABLE PETSAVIORS.FORMULARIO
  (
    ID_FORMULARIO               NUMBER NOT NULL ,
    TIPO_FORMULARIO             VARCHAR2 (50 CHAR) ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
CREATE UNIQUE INDEX PETSAVIORS.FORMULARIO_PK ON PETSAVIORS.FORMULARIO
  (
    ID_FORMULARIO ASC
  )
  ;
  ALTER TABLE PETSAVIORS.FORMULARIO ADD CONSTRAINT FORMULARIO_PK PRIMARY KEY ( ID_FORMULARIO ) ;

--Tabla FORM_TIENE_PREGUNTAS, tabla de relación que enlaza los formularios con su respectivas preguntas.
CREATE TABLE PETSAVIORS.FORM_TIENE_PREGUNTAS
  (
    ID_FORMUARIO NUMBER NOT NULL ,
    ID_PREGUNTAS NUMBER NOT NULL ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
ALTER TABLE PETSAVIORS.FORM_TIENE_PREGUNTAS ADD CONSTRAINT FORM_TIENE_PREGUNTAS_PK PRIMARY KEY ( ID_FORMUARIO, ID_PREGUNTAS ) ;

--Tabla MASCOTAS, almacena los datos de las mascotas, su nombre, tipo, raza, entrenamiento, descripción, tamaño, color, energía,
-- espacio, pelaje, foto antes del recate y después, estado y el identificador de su salud.
CREATE TABLE PETSAVIORS.MASCOTAS
  (
    ID_MASCOTA                  NUMBER NOT NULL ,
    NOMBRE_MASCOTA              VARCHAR2 (35 CHAR) DEFAULT 'SIN NOMBRE' NOT NULL ,
    TIPO_MASCOTA                VARCHAR2 (50 BYTE) DEFAULT 'ANIMAL' NOT NULL ,
    RAZA_MASCOTA                VARCHAR2 (50 BYTE) NOT NULL ,
    ENTRENAMIENTO_MASCOTA       VARCHAR2 (35 CHAR) ,
    DESCRIPCION_MASCOTA         VARCHAR2 (150 BYTE) ,
    TAMANO_MASCOTA              VARCHAR2 (35 CHAR) ,
    COLOR_MASCOTA               VARCHAR2 (35 CHAR) ,
    ENERGIA_MASCOTA             VARCHAR2 (35 CHAR) ,
    ESPACIO_MASCOTA             VARCHAR2 (35 CHAR) ,
    PELAJE_MASCOTA              VARCHAR2 (35 CHAR) ,
    FOTO_ANTES                  VARCHAR2 (200 CHAR) ,
    FOTO_DESPUES                VARCHAR2 (200 CHAR) ,
    ESTADO_MASCOTA              VARCHAR2 (12 CHAR) DEFAULT 'EN ADOPCION' ,
    ID_SALUD                    NUMBER NOT NULL ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE),
    USUARIO_ASOCIADO            VARCHAR2 (256 CHAR) NOT NULL,
    LUGAR_DE_ENCUENTRO          VARCHAR2 (100 CHAR)
  ) ;
CREATE UNIQUE INDEX PETSAVIORS.ID_MASCOTA_PK ON PETSAVIORS.MASCOTAS
  (
    ID_MASCOTA ASC
  )
  ;
  ALTER TABLE PETSAVIORS.MASCOTAS ADD CONSTRAINT ID_MASCOTA_PK PRIMARY KEY ( ID_MASCOTA ) ;

--Tabla NOTIFICACIONES, almacena las notificaciones que recibe cada usuario. Guarda el formulario que genera la notificación, remitente
--destinatario, mensaje y la mascota.
CREATE TABLE PETSAVIORS.NOTIFICACIONES
  (
    ID_NOTIFICACION             NUMBER NOT NULL ,
    ID_FORMULARIO               NUMBER NOT NULL ,
    REMITENTE                   VARCHAR2 (256 CHAR) NOT NULL ,
    DESTINATARIO                VARCHAR2 (256 CHAR) NOT NULL ,
    MENSAJE                     VARCHAR2 (256 BYTE) ,
    ID_MASCOTA                  NUMBER NOT NULL,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
ALTER TABLE PETSAVIORS.NOTIFICACIONES ADD CONSTRAINT Notificaciones_PK PRIMARY KEY ( ID_NOTIFICACION ) ;

--Tabla PREGUNTAS, almacena las preguntas mostradas en los formularios. Guarda el contenido de la pregunta.
CREATE TABLE PETSAVIORS.PREGUNTAS
  (
    ID_PREGUNTAS       NUMBER NOT NULL ,
    CONTENIDO_PREGUNTA VARCHAR2 (100 CHAR) ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
CREATE UNIQUE INDEX PETSAVIORS.PREGUNTAS_PK ON PETSAVIORS.PREGUNTAS
  (
    ID_PREGUNTAS ASC
  )
  ;
  ALTER TABLE PETSAVIORS.PREGUNTAS ADD CONSTRAINT PREGUNTAS_PK PRIMARY KEY ( ID_PREGUNTAS ) ;

--Tabla RAZA. Almacena los nombres de las razas existentes en el sistema. Guarda el nombre de la raza.
CREATE TABLE PETSAVIORS.RAZA
  (
    NOMBRE_RAZA                 VARCHAR2 (50 BYTE) NOT NULL ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
CREATE UNIQUE INDEX PETSAVIORS.RAZA_PK ON PETSAVIORS.RAZA
  (
    NOMBRE_RAZA ASC
  )
  ;
  ALTER TABLE PETSAVIORS.RAZA ADD CONSTRAINT RAZA_PK PRIMARY KEY ( NOMBRE_RAZA ) ;

--Tabla RESPUESTAS. Almacena las respuestas que se utilizan el los test. Guarda el formulario y preguntas.
CREATE TABLE PETSAVIORS.RESPUESTAS
  (
    RESPUESTA                   VARCHAR2 (200 BYTE) NOT NULL ,
    ID_FORMULARIO               NUMBER NOT NULL ,
    ID_PREGUNTAS                NUMBER NOT NULL ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
ALTER TABLE PETSAVIORS.RESPUESTAS ADD CONSTRAINT RESPUESTAS_PK PRIMARY KEY ( RESPUESTA ) ;

--Tabla RESPUESTAS_USER. Almacena las respuestas que se generan con los formularios. Guarda la pregunta, el remitente y destinatario, la mascota y el contenido de la pregunta.
CREATE TABLE PETSAVIORS.RESPUESTAS_USER
  (
    ID_RESPUESTA                NUMBER NOT NULL ,
    ID_PREGUNTA                 NUMBER NOT NULL ,
    CORREO_PREGUNTA             VARCHAR2 (256 CHAR) NOT NULL ,
    CORREO_RESPONDE             VARCHAR2 (256 CHAR) NOT NULL ,
    ID_MASCOTA                  NUMBER NOT NULL ,
    CONT_RESPUESTA              VARCHAR2 (2000 CHAR) NOT NULL ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE) ,
    ID_FORMULARIO               NUMBER NOT NULL
  ) ;
ALTER TABLE PETSAVIORS.RESPUESTAS_USER ADD CONSTRAINT RESPUESTAS_USER_PK PRIMARY KEY ( ID_RESPUESTA ) ;

--Tabla DEVOLUCIONES. Almacena los datos de cuando se realiza una devolución. Almacena el usuario, rescatista, motivo y mascota.
CREATE TABLE PETSAVIORS.DEVOLUCIONES
  (
    ID_DEVOLUCION               NUMBER NOT NULL ,
    USUARIO_DEVUELVE            VARCHAR2 (256 CHAR) NOT NULL ,
    USUARIO_RESCATISTA          VARCHAR2 (256 CHAR) NOT NULL ,
    MOTIVO                      VARCHAR2 (500 CHAR) NOT NULL ,
    ID_MASCOTA                  NUMBER NOT NULL ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
ALTER TABLE PETSAVIORS.DEVOLUCIONES ADD CONSTRAINT DEVOLUCIONES_PK PRIMARY KEY ( ID_DEVOLUCION ) ;

--Tabla TIPO_DE_ANIMAL. Almacena los tipos de animal existentes en la base de datos. Guarda el nombre del tipo de animal.
CREATE TABLE PETSAVIORS.TIPO_DE_ANIMAL
  (
    NOMBRE_TIPO                 VARCHAR2 (50 BYTE) NOT NULL ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE)
  ) ;
CREATE UNIQUE INDEX PETSAVIORS.TIPO_DE_ANIMAL_PK ON PETSAVIORS.TIPO_DE_ANIMAL
  (
    NOMBRE_TIPO ASC
  )
  ;
  ALTER TABLE PETSAVIORS.TIPO_DE_ANIMAL ADD CONSTRAINT TIPO_DE_ANIMAL_PK PRIMARY KEY ( NOMBRE_TIPO ) ;

--Tabla USUARIOS. Almacena los datos de los usuarios registrados en el sistema. Guarda el correo, nombre, apellidos, contraseña, teléfono, identificadores booleanos,
--notas y su foto respectivamente.
CREATE TABLE PETSAVIORS.USUARIOS
  (
    CORREOUSUARIO               VARCHAR2 (256 CHAR) NOT NULL ,
    NOMBRE                      VARCHAR2 (35 CHAR) NOT NULL ,
    P_APELLIDO                  VARCHAR2 (35 CHAR) NOT NULL ,
    S_APELLIDO                  VARCHAR2 (35 CHAR) NOT NULL ,
    CONTRASENIA                 VARCHAR2 (256 CHAR) NOT NULL ,
    TELEFONO                    NUMBER NOT NULL ,
    ES_RESCATISTA               NUMBER (1) DEFAULT 0 NOT NULL ,
    ES_ADOPTANTE                NUMBER (1) DEFAULT 0 NOT NULL ,
    ES_ADMINISTRADOR            NUMBER (1) DEFAULT 0 NOT NULL ,
    ESTA_LISTANEGRA             NUMBER (1) DEFAULT 0 NOT NULL ,
    NOTAS                       VARCHAR2 (100 CHAR) ,
    FOTO                        VARCHAR2 (250 CHAR) ,
    SUMA_CALIFICACIONES         NUMBER DEFAULT 1 NOT NULL ,
    CANT_CALIFICACIONES         NUMBER DEFAULT 1 NOT NULL ,
    PROM_CALIFICACIONES         NUMBER AS ( "SUMA_CALIFICACIONES"/"CANT_CALIFICACIONES" ) VIRTUAL ,
    FECHA_CREACION              DATE ,
    ULTIMA_MODIFICACION         DATE ,
    USUARIO_CREACION            VARCHAR2 (30 BYTE) ,
    USUARIO_ULTIMA_MODIFICACION VARCHAR2 (30 BYTE) ) ;
CREATE UNIQUE INDEX PETSAVIORS.USUARIOS_PK ON PETSAVIORS.USUARIOS
  (
    CORREOUSUARIO ASC
  )
  ;
  ALTER TABLE PETSAVIORS.USUARIOS ADD CONSTRAINT USUARIOS_PK PRIMARY KEY ( CORREOUSUARIO ) ;

--Tabla ALL_CALIFICACIONES. Almacena las calificaciones generadas por los usuarios. Almacena calificante, calificador, calificacion y motivo..
CREATE TABLE ALL_CALIFICACIONES 
(
  CALIFICANTE VARCHAR2(50 BYTE) DEFAULT NULL NOT NULL 
, ID_CALIFICACION NUMBER NOT NULL 
, CALIFICADOR VARCHAR2(50 BYTE) DEFAULT NULL NOT NULL 
, CALIFICACION VARCHAR2(50 BYTE) DEFAULT NULL NOT NULL 
, MOTIVO VARCHAR2(100 BYTE) DEFAULT NULL 
, FECHA_CREACION DATE 
, ULTIMA_MODIFICACION DATE 
, USUARIO_CREACION VARCHAR2(30 BYTE) 
, USUARIO_ULTIMA_MODIFICACION VARCHAR2(30 BYTE) 
, CONSTRAINT ALL_CALIFICACIONES_PK PRIMARY KEY (ID_CALIFICACION)
);

ALTER TABLE ALL_CALIFICACIONES
ADD CONSTRAINT ALL_CALIFICACIONES_FK1 FOREIGN KEY
(CALIFICANTE)
REFERENCES USUARIOS
(CORREOUSUARIO)
ENABLE;

ALTER TABLE ALL_CALIFICACIONES
ADD CONSTRAINT ALL_CALIFICACIONES_FK2 FOREIGN KEY
(CALIFICADOR)
REFERENCES USUARIOS
(CORREOUSUARIO)
ENABLE;

--Creación de llaves foráneas para las relaciones entre todas las tablas de la base de datos.
ALTER TABLE PETSAVIORS.ADOPCIONES ADD CONSTRAINT ADOPCIONES_MASCOTAS_FK FOREIGN KEY ( ID_MASCOTA ) REFERENCES PETSAVIORS.MASCOTAS ( ID_MASCOTA ) ;

ALTER TABLE PETSAVIORS.ADOPCIONES ADD CONSTRAINT CORREO_ADOPT_FK FOREIGN KEY ( CORREO_ADOPTANTE ) REFERENCES PETSAVIORS.USUARIOS ( CORREOUSUARIO ) ;

ALTER TABLE PETSAVIORS.NOTIFICACIONES ADD CONSTRAINT DESTINATARIO_ES_USUARIO_FK FOREIGN KEY ( DESTINATARIO ) REFERENCES PETSAVIORS.USUARIOS ( CORREOUSUARIO ) ;

ALTER TABLE PETSAVIORS.FORM_TIENE_PREGUNTAS ADD CONSTRAINT FK_ID_FORMULARIO FOREIGN KEY ( ID_FORMUARIO ) REFERENCES PETSAVIORS.FORMULARIO ( ID_FORMULARIO ) ;

ALTER TABLE PETSAVIORS.FORM_TIENE_PREGUNTAS ADD CONSTRAINT FK_ID_PREGUNTA FOREIGN KEY ( ID_PREGUNTAS ) REFERENCES PETSAVIORS.PREGUNTAS ( ID_PREGUNTAS ) ;

ALTER TABLE PETSAVIORS.MASCOTAS ADD CONSTRAINT FK_MASCOTAS_ESTADO_DE_SALUD FOREIGN KEY ( ID_SALUD ) REFERENCES PETSAVIORS.ESTADO_DE_SALUD ( ID_SALUD ) ;

ALTER TABLE PETSAVIORS.MASCOTAS ADD CONSTRAINT MASCOTAS_USUARIOS_FK FOREIGN KEY ( USUARIO_ASOCIADO ) REFERENCES PETSAVIORS.USUARIOS ( CORREOUSUARIO ) ;

ALTER TABLE PETSAVIORS.ANIMAL_TIENE_RAZA ADD CONSTRAINT FK_NOMBRE_RAZA FOREIGN KEY ( NOMBRE_RAZA ) REFERENCES PETSAVIORS.RAZA ( NOMBRE_RAZA ) ;

ALTER TABLE PETSAVIORS.ANIMAL_TIENE_RAZA ADD CONSTRAINT FK_NOMBRE_TIPO FOREIGN KEY ( NOMBRE_TIPO ) REFERENCES PETSAVIORS.TIPO_DE_ANIMAL ( NOMBRE_TIPO ) ;

ALTER TABLE PETSAVIORS.MASCOTAS ADD CONSTRAINT MASCOTAS_RAZA_FK FOREIGN KEY ( RAZA_MASCOTA ) REFERENCES PETSAVIORS.RAZA ( NOMBRE_RAZA ) ;

ALTER TABLE PETSAVIORS.MASCOTAS ADD CONSTRAINT MASCOTAS_TIPO_DE_ANIMAL_FK FOREIGN KEY ( TIPO_MASCOTA ) REFERENCES PETSAVIORS.TIPO_DE_ANIMAL ( NOMBRE_TIPO ) ;

ALTER TABLE PETSAVIORS.NOTIFICACIONES ADD CONSTRAINT NOTIFICACIONES_FORMULARIO_FK FOREIGN KEY ( ID_FORMULARIO ) REFERENCES PETSAVIORS.FORMULARIO ( ID_FORMULARIO ) ;

ALTER TABLE PETSAVIORS.NOTIFICACIONES ADD CONSTRAINT REMITENTE_ES_USUARIO_FK FOREIGN KEY ( REMITENTE ) REFERENCES PETSAVIORS.USUARIOS ( CORREOUSUARIO ) ;

ALTER TABLE PETSAVIORS.ADOPCIONES ADD CONSTRAINT DUENO_PREVIO_FK FOREIGN KEY ( DUENO_PREVIO ) REFERENCES PETSAVIORS.USUARIOS ( CORREOUSUARIO ) ;

ALTER TABLE PETSAVIORS.RESPUESTAS ADD CONSTRAINT RESPUESTAS_FORMULARIO_FK FOREIGN KEY ( ID_FORMULARIO ) REFERENCES PETSAVIORS.FORMULARIO ( ID_FORMULARIO ) ;

ALTER TABLE PETSAVIORS.RESPUESTAS ADD CONSTRAINT RESPUESTAS_PREGUNTAS_FK FOREIGN KEY ( ID_PREGUNTAS ) REFERENCES PETSAVIORS.PREGUNTAS ( ID_PREGUNTAS ) ;

ALTER TABLE PETSAVIORS.RESPUESTAS_USER ADD CONSTRAINT FORMULARIO_FK FOREIGN KEY ( ID_FORMULARIO ) REFERENCES PETSAVIORS.FORMULARIO ( ID_FORMULARIO ) ;
ALTER TABLE PETSAVIORS.RESPUESTAS_USER ADD CONSTRAINT MASCOTA_FK FOREIGN KEY ( ID_MASCOTA ) REFERENCES PETSAVIORS.MASCOTAS ( ID_MASCOTA ) ;
ALTER TABLE PETSAVIORS.RESPUESTAS_USER ADD CONSTRAINT PREGUNTA_FK FOREIGN KEY ( ID_PREGUNTA ) REFERENCES PETSAVIORS.PREGUNTAS ( ID_PREGUNTAS ) ;
ALTER TABLE PETSAVIORS.RESPUESTAS_USER ADD CONSTRAINT USUARIOR_FK FOREIGN KEY ( CORREO_RESPONDE ) REFERENCES PETSAVIORS.USUARIOS ( CORREOUSUARIO ) ;
ALTER TABLE PETSAVIORS.RESPUESTAS_USER ADD CONSTRAINT USUARIO_FK FOREIGN KEY ( CORREO_PREGUNTA ) REFERENCES PETSAVIORS.USUARIOS ( CORREOUSUARIO ) ;
ALTER TABLE PETSAVIORS.NOTIFICACIONES ADD CONSTRAINT MASCOTAS_FK FOREIGN KEY ( ID_MASCOTA ) REFERENCES PETSAVIORS.MASCOTAS ( ID_MASCOTA ) ;

ALTER TABLE PETSAVIORS.DEVOLUCIONES ADD CONSTRAINT DEVUELVE_FK FOREIGN KEY ( USUARIO_DEVUELVE ) REFERENCES PETSAVIORS.USUARIOS ( CORREOUSUARIO ) ;
ALTER TABLE PETSAVIORS.DEVOLUCIONES ADD CONSTRAINT MASCOTADEV_FK FOREIGN KEY ( ID_MASCOTA ) REFERENCES PETSAVIORS.MASCOTAS ( ID_MASCOTA ) ;
ALTER TABLE PETSAVIORS.DEVOLUCIONES ADD CONSTRAINT RESCATA_FK FOREIGN KEY ( USUARIO_RESCATISTA ) REFERENCES PETSAVIORS.USUARIOS ( CORREOUSUARIO ) ;

