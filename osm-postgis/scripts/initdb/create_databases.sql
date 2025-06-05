-- create_databases.sql
CREATE DATABASE mlflow;
CREATE DATABASE osm;
\connect osm;
CREATE EXTENSION postgis;
CREATE EXTENSION hstore;