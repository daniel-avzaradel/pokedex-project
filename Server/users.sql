CREATE extension pgcrypto;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

insert into users (email, password) 
values ('daniel.avzaradel@gmail.com', crypt('123', gen_salt('bf')))

select * from users