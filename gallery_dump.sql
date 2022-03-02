--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sizes; Type: TABLE; Schema: public; Owner: next_gallery
--

CREATE TABLE public.sizes (
    id integer NOT NULL,
    size_name character varying(128),
    width integer,
    height integer
);


ALTER TABLE public.sizes OWNER TO next_gallery;

--
-- Name: sizes_id_seq; Type: SEQUENCE; Schema: public; Owner: next_gallery
--

CREATE SEQUENCE public.sizes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sizes_id_seq OWNER TO next_gallery;

--
-- Name: sizes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: next_gallery
--

ALTER SEQUENCE public.sizes_id_seq OWNED BY public.sizes.id;


--
-- Name: sizes id; Type: DEFAULT; Schema: public; Owner: next_gallery
--

ALTER TABLE ONLY public.sizes ALTER COLUMN id SET DEFAULT nextval('public.sizes_id_seq'::regclass);


--
-- Data for Name: sizes; Type: TABLE DATA; Schema: public; Owner: next_gallery
--

COPY public.sizes (id, size_name, width, height) FROM stdin;
1	big	800	600
2	med	640	480
3	min	320	240
4	mic	150	150
\.


--
-- Name: sizes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: next_gallery
--

SELECT pg_catalog.setval('public.sizes_id_seq', 5, true);


--
-- Name: sizes sizes_pkey; Type: CONSTRAINT; Schema: public; Owner: next_gallery
--

ALTER TABLE ONLY public.sizes
    ADD CONSTRAINT sizes_pkey PRIMARY KEY (id);


--
-- Name: sizes sizes_size_name_key; Type: CONSTRAINT; Schema: public; Owner: next_gallery
--

ALTER TABLE ONLY public.sizes
    ADD CONSTRAINT sizes_size_name_key UNIQUE (size_name);


--
-- PostgreSQL database dump complete
--

