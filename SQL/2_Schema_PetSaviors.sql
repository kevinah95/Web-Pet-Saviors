--Conectado desde System

CREATE USER PetSaviors
       IDENTIFIED BY PetSaviors
       DEFAULT TABLESPACE PetSaviors_data
       QUOTA 10M ON PetSaviors_data
       TEMPORARY TABLESPACE temp
       QUOTA 5M ON system ;
       --PROFILE aap_user
       --PASWORD EXPIRE
---------------------------------------------------------
/*create ROLE PetSaviors
 IDENTIFIED BY PetSaviors;*/
---------------------------------------------------------
GRANT CONNECT TO PetSaviors;
---------------------------------------------------------
--GRANT EXECUTE on shema.procedure TO username;
---------------------------------------------------------
grant create public synonym to PetSaviors;
---------------------------------------------------------
grant create session to PetSaviors;
grant create table to PetSaviors; 
grant create trigger to PetSaviors;