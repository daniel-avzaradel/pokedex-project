import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Pokedex = ({pokemon}) => {
    const [search, setSearch] = useState('')

    return(
        <>
        <div className="search">
            <input type="text" placeholder="Search" onChange={(event) => {setSearch(event.target.value)}} /><i className="fas fa-search"></i>
        </div>
        <div className="grid-container">
        {
            pokemon.filter((item, i) => {
                if(search === '') {
                    return (
                        <>
                            <Pokemon key={i} pokemon={item} />
                        </>
                    )
                } else if (item.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return (
                        <>
                            <Pokemon key={i} pokemon={item} />
                        </>
                    )
                }
            })
            .map((item, i) => {
                return (
                    <>
                    <Link to={'/pokedex/'+item.id}>
                        <Pokemon key={i} pokemon={item} />
                    </Link>
                    </>
                )
            })
        }
        </div>
        </>
    )
}
        

const Pokemon = (item) => {
    return(
        <div className="card">
            <div className="card-img">
            <img src={item.pokemon.sprites.front_default} alt={item.pokemon.name} />
            </div>
            <div className="title">
            {item.pokemon.name.toUpperCase()}
            </div>
            <div className="number">
            #{item.pokemon.id}
            </div>
            <br/>
            <div className="types">
            {
                item.pokemon.types.map((type, i) => {
                    return(
                        <div className="type" style={{ backgroundColor: TYPE_COLORS[type.type.name]}} key={i}>
                            {type.type.name}
                        </div>
                    )
                })
            }
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


export default Pokedex;