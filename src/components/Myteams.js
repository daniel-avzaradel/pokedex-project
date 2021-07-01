import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Myteams.css";
import boy from "../img/boy.png";
import girl from "../img/girl.png";
import pokeball from "../img/pokeball-small.png";

const Myteams = ({ pokemon }) => {
  const [create, setCreate] = useState(false);
  const [team, setTeam] = useState('');
  const [trainer, setTrainer] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [one, setOne] = useState(1)
  const [two, setTwo] = useState(1)
  const [three, setThree] = useState(1)
  const [four, setFour] = useState(1)
  const [five, setFive] = useState(1)
  const [six, setSix] = useState(1)
  const [list, setList] = useState([one, two, three, four, five, six])
  const [teams, setTeams] = useState([[team, trainer, age, gender]]);


  if (create) {
    return (
      <div className="new-team-form">
        <h2>CREATE A NEW TEAM</h2>
        <form action="">
          <label htmlFor="team-name">Team Name: </label>
          <input
            type="text"
            id="team-name"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            required
          />

          <label htmlFor="trainer-name">Trainer Name: </label>
          <input
            type="text"
            id="trainer-name"
            value={trainer}
            onChange={(e) => setTrainer(e.target.value)}
            required
          />

          <label htmlFor="trainer-age">Age: </label>
          <input
            type="number"
            id="trainer-age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <br />

          <p>Are you a boy or a girl?</p>

          <div onChange={(e) => setGender(e.target['id'])}>
            <div className="radio">
              <label htmlFor="boy">Boy</label>
              <input
                type="radio"
                name="gender"
                id="boy"
              />
            </div>

            <div className="radio">
              <label htmlFor="girl">Girl</label>
              <input
                type="radio"
                name="gender"
                id="girl"
              />
            </div>
          </div>

          <br />

          <p>Select your team:</p>
          <br />
          <div className="list">
              
            <div>
              <p>Pokemon #1</p>
              <select name="one" id="one" onChange={(e) => {
                    setOne(e.target.value)}}>

                {pokemon.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </select>
            </div>

            <div>
              <p>Pokemon #2</p>
              <select name="two" id="two" onChange={(e) => {
                    setTwo(e.target.value)}}>

                {pokemon.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </select>
            </div>

            <div>
              <p>Pokemon #3</p>
              <select name="three" id="three" onChange={(e) => {
                    setThree(e.target.value)}}>

                {pokemon.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </select>
            </div>

            <div>
              <p>Pokemon #4</p>
              <select name="four" id="four" onChange={(e) => {
                    setFour(e.target.value)}}>

                {pokemon.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </select>
            </div>

            <div>
              <p>Pokemon #5</p>
              <select name="five" id="five" onChange={(e) => {
                    setFive(e.target.value)}}>

                {pokemon.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </select>
            </div>

            <div>
              <p>Pokemon #6</p>
              <select name="six" id="six" onChange={(e) => {
                    setSix(e.target.value)}}>

                {pokemon.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </select>
            </div>

          </div>

          <br />
          <button
            type="Submit"
            className="btn"
            onClick={(e) => {
              e.preventDefault();

              setTeams([...teams, [team, trainer, age, gender]]);
              setList([one, two, three, four, five, six]);
              setCreate(false);
            }}
          >
            Create
          </button>
          <br />
        </form>
        <br />
        <button className="btn" onClick={() => setCreate(false)}>
          Go Back
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="team-page">
          <h1>MY TEAMS</h1>
          <br />
          <button className="btn" onClick={() => setCreate(true)}>
            Create a new team
          </button>
          <br />
          <div className="teams">

            <TeamDaniel
                    pokemon={pokemon}
                    team='Developers Institute'
                    trainer='Daniel'
                    age='14'
                    gender='boy'
                    key='daniel'
                  />

            {teams.length > 0 ? (
              teams.map((item, i) => {
                if(i === 0) {
                  return <></>
                } else {
                  return (
                    <Team
                      pokemon={pokemon}
                      team={item[0]}
                      trainer={item[1]}
                      age={item[2]}
                      gender={item[3]}
                      list={list}
                      key={i}
                    />
                  );
                }
              })
            ) : (
              <></>
            )}

          </div>
        </div>
      </>
    );
  }
};

const TeamDaniel = ({ pokemon, team, trainer, age, gender }) => {

  const [pokemonteams, setPokemonteams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => {
        setPokemonteams(data);
      });
  }, []);

  return (
    <div className="team">
      <div className="trainer">
        <div className="trainer-stats">
          <h3>
            Team: <span>{team}</span>
          </h3>
          <p>
            Trainer: <span>{trainer}</span>
          </p>
          <p>
            Age: <span>{age}</span>
          </p>
          <p>
            Gender: <span>{gender}</span>
          </p>
          <div className="pokeball-list">
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
          </div>
        </div>
        <div className="trainer-img">
          {gender === "boy" ? (
            <img src={boy} alt="" />
          ) : (
            <img src={girl} alt="" />
          )}
        </div>
      </div>
      <div className="pokemon-list">
        {pokemonteams.map((team) => {
          return <PokemonTeam pokemon={pokemon} team={team} key={team.id} />;
        })}

      </div>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

const Team = ({ pokemon, team, trainer, age, gender, list }) => {

  return (
    <div className="team">
      <div className="trainer">
        <div className="trainer-stats">
          <h3>
            Team: <span>{team}</span>
          </h3>
          <p>
            Trainer: <span>{trainer}</span>
          </p>
          <p>
            Age: <span>{age}</span>
          </p>
          <p>
            Gender: <span>{gender}</span>
          </p>
          <div className="pokeball-list">
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
            <img src={pokeball} alt="pokeball small" style={{width: '20px', height: '20px'}} />
          </div>
        </div>
        <div className="trainer-img">
          {gender === "boy" ? (
            <img src={boy} alt="" />
          ) : (
            <img src={girl} alt="" />
          )}
        </div>
      </div>
      <div className="pokemon-list">
        {list.map((item, i) => {
          return <PokemonTeamCustom pokemon={pokemon} team={item} key={i} />;
        })}

      </div>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

const PokemonTeamCustom = ({ pokemon, team }) => {

  return (
    <div>
      <Link to={"/pokedex/" + (team)}>
        <div className="pokemon-li">
          <div className="sprite">
            <div className="pokeball">
              <img src={pokemon[team-1].sprites.front_default} alt="" />
            </div>
          </div>
          <div className="pokemon-li-stats">
            <p>{pokemon[team-1].name.toUpperCase()}</p>
            <div className="hp" style={{ backgroundColor: "#333" }}>
              <p style={{ color: "gold", fontWeight: "bold" }}>HP: </p>
              <div className="hp-bar"></div>
            </div>
            <p
              style={{
                textAlign: "right",
                marginRight: "10px",
                color: "white",
              }}
            >
              {pokemon[team-1].stats[0].base_stat} /{" "}
              {pokemon[team-1].stats[0].base_stat}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const PokemonTeam = ({ pokemon, team }) => {
  //   const random = Math.floor(Math.random() * 151);

  return (
    <div>
      <Link to={"/pokedex/" + (team.id + 1)}>
        <div className="pokemon-li">
          <div className="sprite">
            <div className="pokeball">
              <img src={pokemon[team.id].sprites.front_default} alt="" />
            </div>
          </div>
          <div className="pokemon-li-stats">
            <p>{pokemon[team.id].name.toUpperCase()}</p>
            <div className="hp" style={{ backgroundColor: "#333" }}>
              <p style={{ color: "gold", fontWeight: "bold" }}>HP: </p>
              <div className="hp-bar"></div>
            </div>
            <p
              style={{
                textAlign: "right",
                marginRight: "10px",
                color: "white",
              }}
            >
              {pokemon[team.id].stats[0].base_stat} /{" "}
              {pokemon[team.id].stats[0].base_stat}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Myteams;
