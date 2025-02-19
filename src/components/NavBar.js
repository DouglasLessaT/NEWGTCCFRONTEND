
import { Link } from 'react-router-dom';
import logonav from '../../src/assets/img/Logo_nav.png';
import '../../src/assets/css/NavBar/NavBar.css'
import React, { useState } from 'react';

function NavBar() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <nav class="navbar fixed-top">
            <div class="container-fluid">
                {/*<div class="navbar-brand">*/}
                <Link to="/dashBancas">
                    <img src={logonav} alt="Logo" className="d-inline-block align-text-top" />
                </Link>
                {/*</div>*/}
                <ul class="navbar-nav ms-auto d-flex flex-row">
                    <li class="nav-item">
                        <Link
                            className={`nav-link ${activeLink === 'BANCAS' ? 'active' : ''}`}
                            to="/dashBancas"
                            onClick={() => handleLinkClick('BANCAS')}
                        >
                            BANCAS
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            className={`nav-link ${activeLink === 'TCCS' ? 'active' : ''}`}
                            to="/dashTcc"
                            onClick={() => handleLinkClick('TCCS')}
                        >
                            TCCS
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            className={`nav-link ${activeLink === 'SALAS' ? 'active' : ''}`}
                            to="/dashSalas"
                            onClick={() => handleLinkClick('SALAS')}
                        >
                            SALAS
                        </Link>
                    </li>
                </ul>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div class="offcanvas-header">
                        <h4 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h4>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="teste justify-content-end flex-grow-1 d-flex">
                        <button class="btn btn-danger" type="button">
                                <Link
                                    to="/cadastroaluno"
                                    >
                                    Cadastro Aluno
                                </Link>
                            </button>
                            <button type="button" class="btn btn-danger">
                                <Link
                                    to="/cadastrotcc"
                                    >
                                    Cadastro Tcc
                                </Link>
                            </button>
                            <button type="button" class="btn btn-danger">
                                <Link
                                    to="/cadastrosala"
                                    >
                                    Cadastro Sala
                                </Link>
                            </button>
                            <button type="button" class="btn btn-danger">
                                <Link
                                    to="/caduser"
                                    >
                                    Cadastro Usuário
                                </Link>
                            </button>
                            <button type="button" class="btn btn-danger">
                                <Link
                                    to="/"
                                    >
                                    Sair
                                </Link>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;