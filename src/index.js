import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Login from './pages/Login/Login.js';
import Dashb_Bancas from './pages/DashBoard/DashBancas.js';
import Dashb_Tcc from './pages/DashBoard/DashTcc.js';
import Dashb_Salas from './pages/DashBoard/DashSalas.js';
import CadastroAluno from './pages/CadastroAluno/CadastroAluno.js';
import CadastroTcc from './pages/CadastroTcc/CadastroTcc.js'
import CadastroSala from './pages/CadastroSala/CadastroSala.js';
import Cadastro_Usuario from './pages/CadastroUsuario/CadastroUsuario.js'


const router = createBrowserRouter([
  {path:"/", element:<Login/>},
  {path:"/dash-bancas", element:<Dashb_Bancas />},
  {path:"/dash-tcc", element:<Dashb_Tcc />},
  {path:"/dash-salas", element:<Dashb_Salas />},
  {path:"/cadastroaluno", element:<CadastroAluno/>},
  {path:"/cadastrotcc", element:<CadastroTcc/>},
  {path:"/cadastrosala", element:<CadastroSala/>},
  {path:"/caduser", element:<Cadastro_Usuario/>},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
