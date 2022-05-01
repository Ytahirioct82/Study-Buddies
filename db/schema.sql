DROP DATABASE IF EXISTS study_bud;
CREATE DATABASE study_bud;

\c study_bud;

DROP TABLE IF EXISTS study_groups;

CREATE TABLE study_groups (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    main_focus TEXT NOT NULL,
    formed DATE NOT NULL,
    contact TEXT NOT NULL
);

DROP TABLE IF EXISTS events;

CREATE TABLE events (
id SERIAL PRIMARY KEY, 
name TEXT NOT NULL,
virtual_meeting_link TEXT NOT NULL,
study_group_id INT NOT NULL,
start_time TIMESTAMP NOT NULL,
end_time TIMESTAMP NOT NULL,
number_of_attendees INT,
cancelled BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
id SERIAL PRIMARY KEY, 
first_name VARCHAR NOT NULL,
last_name VARCHAR NOT NULL,
active BOOLEAN DEFAULT true,
constraint unique_name_user_name unique (first_name, last_name)
)