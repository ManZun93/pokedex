import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

const userName = useSelector(state  => state.name)
const [pokemons, setPokemons] = useState([]);
const [pokemonName, setPokemonName]= useState("")
const [types, setTypes] = useState([])

const navigate =  useNavigate()

useEffect(()=> {
  axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
   .then((res) => setPokemons(res.data.results));

  axios.get(`https://pokeapi.co/api/v2/type/`)
    .then((res) => setTypes(res.data.results))



},[])

const searchPokemon = () => {
  navigate(`/pokedex/${pokemonName.toLowerCase()}`)
}

const filterType = (e)=>{
    const url = e.target.value;
    axios.get(url)
    .then((res) => setPokemons(res.data.pokemon))
    
  }

// pagination
  const [charactersPerPage, SetcharactersPerPage] = useState(12);
  const [currentPage, SetCurrentPage] = useState (1)
  const totalPokemons = pokemons.length;
  
  const lastIndex =  currentPage * charactersPerPage
  const firstIndex =  lastIndex - charactersPerPage

  const pageNumbers = []
 
  for(let i = 1; i <=  Math.ceil(totalPokemons / charactersPerPage); i++){
    pageNumbers.push(i)
  }

  const OnPreviusPage = () => {
    SetCurrentPage(currentPage - 1)
  }

  const OnNextPage = () => {
    SetCurrentPage(currentPage + 1)
  }

  const onClickPage = (pageClicked) => {
    SetCurrentPage(pageClicked)
  }


  return (
    <div className='pokedex-container'>
      <div className='header-container'>
        <div className='welcome-message'>
          <h1>welcome  <br /> {userName} !</h1>
          <h3> Search and choose your favorite pokemons</h3>
        </div>
        <div className='search-section'>
            <input 
              className='pokemon-writed'
              type="text" 
              placeholder='search pokemon by name'
              value={pokemonName}
              onChange = {(e) => setPokemonName(e.target.value)}
            />
            <button className='search-button' onClick={searchPokemon}>Search</button>
         </div>
         <div className='type-selector'>
          <h3>Search your pokemon by type</h3>
         <select 
            className='select-button'
            onChange={filterType} name="" id="">
            {types.map((type)=> (
            <option 
                value={type.url} 
                key={type.url} 
              >
              {type.name}

            </option>
           ))}
         </select>
         </div>
      </div>

      <ul className='pokemon-list'>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
            <PokemonCard url = {pokemon.url ? pokemon.url : pokemon.pokemon.url}/> 
          </li>
        )).slice(firstIndex, lastIndex)}
      </ul>
      
    {/* pagination */}
    <nav 
      className="pagination is-centered" 
      role="navigation" 
      aria-label="pagination">
      
    <div className='page-buttons'>
      <button className={`pagination-button1 page-button ${currentPage === 1 ? 'is-disabled' : "" }`} onClick={OnPreviusPage}> 
          <i className="fa-solid fa-angle-left">{" "}</i> 
      </button>
      <button className={`pagination-button2 page-button ${currentPage >= pageNumbers.length ? 'is-disabled' : ""}`} onClick={OnNextPage}>
        <i className="fa-solid fa-angle-right">{" "}</i> 
      </button>
    </div>


     <ul className="pagination-list">

      {pageNumbers.map(noPage=> (
          <li 
            className='number-page' 
            onClick = {() =>  onClickPage(noPage)} 
            key ={noPage}>
            <a className= {`pagination-link ${noPage === currentPage ? " is-current" : ""}`}
               onClick = {() =>  onClickPage(noPage)}
            >
              {noPage}
            </a>
        </li>
      ))
      }

    </ul>
  </nav>  


    </div>
  );
};

export default Pokedex;