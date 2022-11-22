import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';

const InputName = () => {

  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enterName = () => {
    dispatch(changeName(userName))
    navigate("/pokedex")

  }

  return (
    <div className='login-container'>

      <h1 className='text-intro'>HI POKE-TRAINER!</h1>
      <img src="https://animaniacos.com/images/gifs/animales/personaj/pokemon/poka0107.gif" alt="" className='animation'/>

      <input type="text"
      className='input-name'
      onChange={e => setUserName(e.target.value)} 
      value= {userName}
      placeholder= "Give me your name to begin"
      />
      <button className='login-button' onClick={enterName}>GO</button>
    
      
    </div>
  );
};

export default InputName;