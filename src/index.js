import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import DashbBancas from './pages/DashBoard/DashBancas.js';
import DashbTcc from './pages/DashBoard/DashTcc.js';
import DashbSalas from './pages/DashBoard/DashSalas.js';
import CadastroAluno from './pages/CadastroAluno/CadastroAluno.js';
import CadastroTcc from './pages/CadastroTcc/CadastroTcc.js'
import CadastroSala from './pages/CadastroSala/CadastroSala.js';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario.js'


const router = createBrowserRouter([
  {path:"/", element:<Home/>},
  {path:"/login", element:<Login/>},
  {path:"/dashBancas", element:<DashbBancas />},
  {path:"/dashTcc", element:<DashbTcc />},
  {path:"/dashSalas", element:<DashbSalas />},
  {path:"/cadastroaluno", element:<CadastroAluno/>},
  {path:"/cadastrotcc", element:<CadastroTcc/>},
  {path:"/cadastrosala", element:<CadastroSala/>},
  {path:"/caduser", element:<CadastroUsuario/>},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
