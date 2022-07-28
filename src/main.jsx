import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Cadastro} from './pages/Cadastro'
import {Calculadora} from './pages/Calculadora'
import {Develop} from './pages/Develop'
import {Equipe} from './pages/Equipe'
import {Infos} from './pages/Infos'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render( 
  <BrowserRouter>             
    <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
        <Route path='/calculadora' element={<Calculadora/>}></Route>
        <Route path='/develop' element={<Develop/>}></Route>
        <Route path='/equipe' element={<Equipe/>}></Route>
        <Route path='/infos' element={<Infos/>}></Route>            
    </Routes>
  </BrowserRouter> 
  
)
