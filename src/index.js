import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Login from './pages/Login/Login.js';
import CadastroAluno from './pages/CadastroAluno/CadastroAluno.js';
//import NavBar from './components/NavBar.js'

const router = createBrowserRouter([
  {path:"/", element:<Login/>},
  {path:"/CadastroAluno", element:<CadastroAluno/>},
  //{path:"/nav", element:<NavBar />}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
