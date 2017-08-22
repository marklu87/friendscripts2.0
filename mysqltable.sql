-- Creates the "Users" database --
CREATE DATABASE Users_db;


use Users_db;
	create table users (

  UNIQUE_ID INTEGER(1) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "username" which cannot contain null --
  USER_NAME VARCHAR(30) NOT NULL,
  -- Makes a sting column called "Email" --
  EMAIL VARCHAR(45),

  PRIMARY KEY (UNIQUE_ID)
);




-- Creates the "Users" database --

CREATE DATABASE Stories_db;


use Stories_db;
-- Creates the table "Stories" within animals_db --
CREATE TABLE stories (
  UNIQUE_STORIES_ID INTEGER(1) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  STORY_TITLE VARCHAR(30) NOT NULL,
  -- Makes a sting column called "pet_name" --
  AUTHOR_ID VARCHAR(30),

  PRIMARY KEY (UNIQUE_STORIES_ID)
);



-- Creates the "Users" database --
CREATE DATABASE Sentences_db;

use Sentences_db;
	create table sentence (
    -- Makes a int column called "unique_sentence_id" which cannot contain null --
  UNIQUE_SENTENCE_ID INTEGER (1) AUTO_INCREMENT NOT NULL,
	-- Makes a sting column called "sentence_string" --
  SENTENCE_STRING VARCHAR(150) NOT NULL,
  -- Makes a int column called "story_id" --
  STORY_ID INTEGER (1),
  -- Makes a boolean column called "story_prompt" --
  STORY_PROMPT BOOLEAN NOT NULL,
  -- makes a string column called "author_id_of_sentence" --
  AUTHOR_ID_OF_SENTENCE VARCHAR (30),
  -- makes primary key as "unique_sentence_id" --
  PRIMARY KEY (UNIQUE_SENTENCE_ID)

);
