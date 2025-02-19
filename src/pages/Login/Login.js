import logo from '../../assets/img/logo_login.png';
import LoginService from "./LoginService";
import React, { useState } from 'react';
import '../../assets/css/Login/Login.css';
import { useNavigate } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    LoginService.login(
      username,
      password,
      () => {
        setError("");
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar para outra página:
        // Exemplo com React Router: navigate('/dashboard');
        navigate("/dashBancas");
      },
      (errorMsg) => {
        setError(errorMsg);
      }
    );
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container-login">
      <div className="container">
        <div>
          {/* Logo no centro */}
          <div className="mb-4 text-center">
            <img src={logo} alt="Logo" className="img-fluid" />
          </div>
          {/* Formulário de login */}
          <div className="form-login">
            <form onSubmit={handleLogin}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="floatingInput">Usuário</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={passwordVisible}
                  onChange={togglePasswordVisibility}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Visualizar senha
                </label>
              </div>
              {error && <p className="error text-danger">{error}</p>}
              <button type="submit" className="btn btn-danger w-100">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
