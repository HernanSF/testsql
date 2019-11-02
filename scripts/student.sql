-- Table: public.student

-- DROP TABLE public.student;

CREATE TABLE public.student
(
    dni integer NOT NULL,
    firstname text COLLATE pg_catalog."default" NOT NULL,
    lastname text COLLATE pg_catalog."default" NOT NULL,
    age integer NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE public.student
    OWNER to postgres;