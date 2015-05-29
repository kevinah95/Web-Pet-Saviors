CREATE TABLESPACE PetSaviors_data
       DATAFILE 'C:\Program Files\Oracle\oradata\dbprueba\PetSaviors_data01.dbf'
       SIZE 10M
       REUSE
       AUTOEXTEND ON
       NEXT 512
       MAXSIZE 200M;
---
---PE: INDEX
---
CREATE TABLESPACE PetSaviors_ind
       DATAFILE 'C:\Program Files\Oracle\oradata\dbprueba\PetSaviors_ind01.dbf'
       SIZE 10M
       REUSE
       AUTOEXTEND ON
       NEXT 512
       MAXSIZE 200M;
       
---creacion de otros tablespaces---