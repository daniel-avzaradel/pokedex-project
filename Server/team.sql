create table team (
	id serial primary key,
	name varchar(255) not null,
	trainer varchar(255) not null,
	age int not null,
	gender varchar(255)
)

create table pokemon (
	id int,
	name varchar(255) not null,
	team_id int,
	
	CONSTRAINT fk_team foreign key(team_id) references team(id) on delete cascade
)

insert into team (name, trainer, age, gender)
values ('Developers Institute', 'Daniel', '16', 'boy')

insert into pokemon (id, name, team_id)
values ('150', 'mewtwo', '1'), ('149', 'dragonite', '1'), ('130', 'gyarados', '1'), 
('145', 'zapdos', '1'), ('59', 'arcanine', '1'), ('3', 'venusaur', '1')

update pokemon set id = (pokemon.id - 1)

select * from team inner join pokemon on team.id = pokemon.team_id