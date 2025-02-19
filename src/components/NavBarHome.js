
import { Link } from 'react-router-dom';
import logonav from '../../src/assets/img/Logo_nav.png';
import '../../src/assets/css/NavBar/NavBar.css'

function NavBar() {

    return (
        <nav class="navbar fixed-top">
            <div class="container-fluid">
                {/*<div class="navbar-brand">*/}
                <Link to="/">
                    <img src={logonav} alt="Logo" className="d-inline-block align-text-top" />
                </Link>
                {/*</div>*/}
                <button class="btn btn-danger" type="button">
                    <Link to="/login">
                        Login
                    </Link>
                    </button>
            </div>
        </nav>
    );
}

export default NavBar;