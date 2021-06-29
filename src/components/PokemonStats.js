import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import { getPokemon } from '../services/pokemon'
import './styles/PokemonStats.css';

const PokemonStats = (props) => {

    const {id} = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/`
    const [poke, setPoke] = useState([]);

    async function fetchData() {
        let response = await getPokemon(url);
        setPoke(response)
        return response;
        // await loadingPokemon(response.results)
    }

    if(!props.pokemon) {
        fetchData()
    }

    useEffect(() => {
        fetchData();
      }, [])

    

    const pokemon = props.pokemon.filter(item => {
        if(item.id == id) {
            return item
        }
    })
    let total = 0;
    
    return(
        <div className="box">

            <div className="poke-card">
                <header style={{backgroundColor: TYPE_COLORS[pokemon[0].types[0].type.name]}}>
                <img src={pokemon[0].sprites.other.dream_world.front_default} alt="" style={{maxHeight: 'auto', maxWidth: '20%', float: 'left'}} />
                <div className="data">
                    <h3>Pokemon Data</h3>
                    <hr />
                    <p><strong>Name: </strong> <span>{pokemon[0].name.toUpperCase()}</span></p>
                    <hr />
                    <p><strong>Pokedex Entry: </strong> <span>#{pokemon[0].id}</span></p>
                    <hr />
                    <div className="types">
                    <p><strong>Type: </strong></p>
                    {
                        pokemon[0].types.map((type, i) => {
                            return(
                                <div className="type" style={{ backgroundColor: TYPE_COLORS[type.type.name]}} key={i}>
                                    {type.type.name}
                                </div>
                            )
                        })
                    }
                    </div>
                    <hr />
                    <p><strong>Height: </strong> <span>{(pokemon[0].height / 10).toFixed(1)}m</span></p>
                    <hr />
                    <p><strong>Weight: </strong> <span>{(pokemon[0].weight / 10).toFixed(1)}Kg</span></p>
                    <hr />
                    <Link to='/pokedex' >
                        <button style={{padding: '2px 8px', cursor: 'pointer'}}>Go Back to the Pokedex</button>
                    </Link>
                </div>
                </header>

                <div className="stats">
                    <div className="base-stats">
                        <h3>Pokemon Base Stats</h3>
                            <hr />
                            {
                                pokemon[0].stats.map(item => {
                                    total = total + item.base_stat;
                                    let progressColor = '';
                                    let progress = (item) => {
                                        
                                        if(item.base_stat < 60) {
                                            return progressColor = 'orangered'
                                        } else if (item.base_stat >= 60 && item.base_stat < 90) {
                                            return progressColor = 'gold'
                                        } else if (item.base_stat >= 90 && item.base_stat < 120) {
                                            return progressColor = 'yellowgreen'
                                        } else if (item.base_stat >= 120 && item.base_stat < 150) {
                                            return progressColor = 'mediumseagreen'
                                        } else if (item.base_stat >= 150 && item.base_stat) {
                                            return progressColor = 'darkturquoise'
                                        }
                                        
                                    console.log(progressColor);
                                    }
                                    return(
                                        <div className="stat">
                                            {item.stat.name}: 
                                            <span> {item.base_stat}                                            
                                                <div className="bar" style={{
                                                        width: item.base_stat * 5,
                                                        backgroundColor: progress(item)
                                                    }}>
                                                </div> 
                                            </span>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        <strong>Total: {total}</strong><span></span>
                        </div>
                    </div>
            </div>         
        </div>
    )
}

const TYPE_COLORS = {
    bug: '#C3D21F',
    dark: '#8A6653',
    dragon: '#8A76FF',
    electric: '#FEE744',
    fairy: '#FBAEFF',
    fighting: '#A45544',
    fire: '#FA5543',
    flying: '#79A4FF',
    ghost: '#7874D4',
    grass: '#8DD851',
    ground: '#ECCE5B',
    ice: '#96F1FF',
    normal: '#BAB9AD',
    poison: '#A85CA0',
    psychic: '#F965B2',
    rock: '#CEBD72',
    steel: '#C2C0D8',
    water: '#56AEFF',
}

export default PokemonStats;