DROP table IF EXISTS CANCIONES;

CREATE TABLE CANCIONES(
	id serial primary key,
	titulo varchar(50) not null,
	artista varchar(50) not null,
	tono varchar(10) not null
);

INSERT INTO CANCIONES (titulo,artista,tono) VALUES
('A dios le pido', 'Juanes', 'Em'),
('ciega sorda muda','shakira','Gm');

select * from canciones;