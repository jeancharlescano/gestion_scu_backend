------------------------------------------------------------
--        Script Postgre 
------------------------------------------------------------



------------------------------------------------------------
-- Table: utilisateur
------------------------------------------------------------
CREATE TABLE public.utilisateur(
	id             SERIAL NOT NULL ,
	nom            VARCHAR (50) NOT NULL ,
	prenom         VARCHAR (50) NOT NULL ,
	pseudo         VARCHAR (50) NOT NULL ,
	mot_de_passe   VARCHAR (255) NOT NULL ,
	telephone      VARCHAR (10) NOT NULL ,
	grade          VARCHAR (50) NOT NULL ,
	specialite     VARCHAR (50) NOT NULL ,
	is_admin       BOOL  NOT NULL  ,
	CONSTRAINT utilisateur_PK PRIMARY KEY (id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: individu
------------------------------------------------------------
CREATE TABLE public.individu(
	id               SERIAL NOT NULL ,
	nom              VARCHAR (50)  ,
	prenom           VARCHAR (50)  ,
	pseudo           VARCHAR (50)  ,
	lieu             VARCHAR (255)  ,
	action           VARCHAR (255)  ,
	telephone        VARCHAR (10)  ,
	id_utilisateur   INT  NOT NULL  ,
	CONSTRAINT individu_PK PRIMARY KEY (id)

	,CONSTRAINT individu_utilisateur_FK FOREIGN KEY (id_utilisateur) REFERENCES public.utilisateur(id)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: commentaire
------------------------------------------------------------
CREATE TABLE public.commentaire(
	id               SERIAL NOT NULL ,
	commentaire      VARCHAR (255) NOT NULL ,
	date             DATE  NOT NULL ,
	id_utilisateur   INT  NOT NULL ,
	id_individu      INT  NOT NULL  ,
	CONSTRAINT commentaire_PK PRIMARY KEY (id)

	,CONSTRAINT commentaire_utilisateur_FK FOREIGN KEY (id_utilisateur) REFERENCES public.utilisateur(id)
	,CONSTRAINT commentaire_individu0_FK FOREIGN KEY (id_individu) REFERENCES public.individu(id)
)WITHOUT OIDS;



