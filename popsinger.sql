DROP DATABASE IF EXISTS popsingers;

CREATE DATABASE popsingers;

DROP TABLE IF EXISTS singers;
DROP TABLE IF EXISTS songs;

CREATE TABLE singers (
    singer_id serial PRIMARY KEY,
    singer_name varchar(50) NOT NULL 
);

CREATE TABLE songs (
    songs_id serial PRIMARY KEY,
    song_name varchar(50) NOT NULL,
    singer_id integer REFERENCES singers
    ON DELETE CASCADE
);


