import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Cadastro} from './pages/Cadastro'
import {Calculadora} from './pages/Calculadora'
import {Sobre} from './pages/Sobre'
import {Equipe} from './pages/Equipe'
import {Infos} from './pages/Infos'
import {Perfil} from './pages/perfil'
import {NewSenha} from './pages/new-senha'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render( 
  <BrowserRouter>             
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
        <Route path='/calculo' element={<Calculadora/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/equipe' element={<Equipe/>}></Route>
        <Route path='/informacoes' element={<Infos/>}></Route>
        <Route path='/redefinir-senha' element={<NewSenha/>}></Route>
        <Route path='/perfil' element={<Perfil/>}></Route>            
    </Routes>
  </BrowserRouter> 
  
)
