import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Myteams from './components/Myteams';
import Pokedex from './components/Pokedex';
import NotFound from './components/NotFound';
import Home from './components/Home';
import PokemonStats from './components/PokemonStats';
import Signup from './components/Signup'
import { getAllPokemon, getPokemon } from './services/pokemon'

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'

  
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(url);
      await loadingPokemon(response.results)
    }
    fetchData();
  }, [])

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      }))
      setPokemonData(_pokemonData)
    }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pokedex'>
            <Pokedex pokemon={pokemonData} />
          </Route>
          <Route path='/myteams' component={() => <Myteams pokemon={pokemonData} />} />
          <Route path='/signup' component={() => <Signup pokemon={pokemonData} />} />
          <Route path='/pokedex/:id' component={() => <PokemonStats pokemon={pokemonData} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;