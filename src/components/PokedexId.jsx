import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexId = () => {

  const[character, setCharacter] =  useState([]);

  const {id}  = useParams()
  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => setCharacter(res.data))
  },[id])
console.log(character)
  return (
    <div className='id-container'>
      <header className='header-id'>
        <h1>Your Pokemon is here!</h1>
      </header>

      <div className='info-container'>
        <div className='character-name'>
          <div className='name-id'>
            <p>id: {character.id}</p>
            <h2>{character.name}</h2>
            
          </div>
          <img src={character.sprites?.other["official-artwork"].front_default} alt="" />
          
         
            <p className='weight-height'>{character.weight} <br /> weight </p> 
            <p className='weight-height'>{character.height} <br /> height</p>
          
        </div>

       

        <div className='type-abilities'>

          <div className='types-container atributes'>
            <div className='underlines'>
              <div className='underline'></div>
              <div className='underline'></div>
              <p className='atribute-title'>type</p>
            </div>

              <ul className='atributes-list '>
              
             {character.types?.map((type) =>(
              <li className='atribute-element'
                  key={type.type.url}>
                 {type.type.name}
              </li>
              ))}
            </ul>  
          </div>
          <div className='abilities atributes'>
          <div className='underlines'>
              <div className='underline'></div>
              <div className='underline'></div>
              <p className='atribute-title'>abilities</p>
            </div>
          
            <ul className='atributes-list '>
              {character.abilities?.map((ability) =>(
                <li className='atribute-element'
                  key={ability.ability?.url}>
                  {ability.ability?.name}
                </li>
              ))}
           </ul>
          </div>
        </div>

        <aside className='moves-aside'>
          <p>Movements</p>
          <ul className='moves-list'>
            {character.moves?.map((move) =>(
              <li key={move.move.url}>
             
                {move.move.name}
              </li>
           ))}
          </ul>
        </aside>
      </div>

    </div>
  );
};

export default PokedexId;