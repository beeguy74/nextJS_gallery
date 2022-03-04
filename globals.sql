--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE next_gallery;
ALTER ROLE next_gallery WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:r0y+8ZU9Tln80E7a860VpA==$PooWiOe++i2gYisDyqVLSKSodrWIUS9QUmgR4nhp0XQ=:sBmiH6wfxmBvWict1EbrPtoX1uvW+ZbXX30f6i1C7bo=';
CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:y1GllXjYtfety345ZcAB8g==$BjuYYeAuCdZ6KTKnNGqW+TAN1N0VA0jgFjS5i8ZG1yA=:DfSqgkcBCW5KNm0smHyTLCAAtj8CezN0LaZfiFQ6hnE=';






--
-- PostgreSQL database cluster dump complete
--

