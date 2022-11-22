import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "./normalize.css"

import { HashRouter, Route, Routes } from 'react-router-dom'
import InputName from './components/InputName'
import Pokedex from "./components/Pokedex"
import PokedexId from "./components/PokedexId"
import ProtectedRoutes from './components/ProtectedRoutes'
import {Link} from 'react-router-dom'


function App() {
 

 



  return (
    <HashRouter>

      

      <Routes >
        <Route path= '/' element={<InputName/>} />

        <Route element = {<ProtectedRoutes/>}>
          <Route path= '/pokedex' element={<Pokedex />} /> 
           
          <Route path= '/pokedex/:id/' element={<PokedexId/>} /> 
        </Route>

      </Routes>
      <footer> hecho en academlo con ❤  <br /> by manuel lufan</footer>
    </HashRouter>
  )
}

export default App
