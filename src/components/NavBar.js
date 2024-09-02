
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
                <a href="#">
                    <img src={logonav} alt="Logo" class="d-inline-block align-text-top" />
                </a>
                {/*</div>*/}
                <ul class="navbar-nav ms-auto d-flex flex-row">
                    <li class="nav-item">
                        <a
                            className={`nav-link ${activeLink === 'BANCAS' ? 'active' : ''}`}
                            href="#bancas"
                            onClick={() => handleLinkClick('BANCAS')}
                        >
                            BANCAS
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            className={`nav-link ${activeLink === 'TCCS' ? 'active' : ''}`}
                            href="#tccs"
                            onClick={() => handleLinkClick('TCCS')}
                        >
                            TCCS
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            className={`nav-link ${activeLink === 'SALAS' ? 'active' : ''}`}
                            href="#salas"
                            onClick={() => handleLinkClick('SALAS')}
                        >
                            SALAS
                        </a>
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
                            <button type="button" class="btn btn-danger">Danger</button>
                            <button type="button" class="btn btn-danger">Danger</button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;