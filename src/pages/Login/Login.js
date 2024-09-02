import logo from '../../assets/img/logo_login.png';
import React, { useState } from 'react';
import '../../assets/css/Login/Login.css';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div class="container-login">
      <div class="container">
        <div>
          {/* Logo no centro */}
          <div class="mb-4">
            <img src={logo} alt="Logo" class="img-fluid" />
          </div>
          {/* Formulário de login no canto esquerdo */}
          <div class="form-login">
            <form>
              <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" placeholder="Usuário" />
                <label htmlFor="floatingInput">Usuário</label>
              </div>
              <div class="form-floating">
                <input type={passwordVisible ? '' : 'password'} class="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={togglePasswordVisibility} />
                <label class="form-check-label" for="flexSwitchCheckDefault">Visualizar senha.</label>
              </div>
              <button type="submit" class="btn btn-danger">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;