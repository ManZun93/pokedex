import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const PokemonCard = ({url}) => {

const [pokemon, setPokemon] = useState({});
useEffect (() => {
  axios.get(url)
  .then((res) => setPokemon(res.data))
},[])




console.log(pokemon)

  return (
    
    <div className='card' >
      <Link to= {`/pokedex/${pokemon.id}`}>


        <div className='face front'>
          <h1 className='pokemon-name'>{pokemon.name}</h1>
          <img src={pokemon.sprites?.other.home.front_default} alt=""  className='card-image'/>

        </div> 



        <div className='face back'>
          <h1 className='pokemon-name'>{pokemon.name}</h1>
       
          <div className='types-card'>
       
              <p>Types: {" "}</p>
              <p >({pokemon.types?.[0]?.type.name})</p>
              <p>{pokemon.types?.[1]?.type.name}</p>
          </div>
          <div className='stats-card'>
            <div className='stats'>
                <p>{pokemon.stats?.[0]?.stat.name}: {pokemon.stats?.[0].base_stat}</p>
                <p>{pokemon.stats?.[1]?.stat.name}: {pokemon.stats?.[1].base_stat}</p>
                <p>{pokemon.stats?.[2]?.stat.name}: {pokemon.stats?.[2].base_stat}</p>
                <p>{pokemon.stats?.[5]?.stat.name}: {pokemon.stats?.[5].base_stat}</p>
            </div>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt=""  className='card-image'/>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard; 