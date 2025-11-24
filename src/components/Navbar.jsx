import { Link } from 'react-router-dom';
import logo from './Mill Pond Research Logo - Horizontal - 100.png';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Millpond Research" style={{ height: '40px', width: 'auto' }} />
                </Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/solutions" className="navbar-link">
                            Solutions
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/resources" className="navbar-link">
                            Resources
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/company" className="navbar-link">
                            Company
                        </Link>
                    </li>
                </ul>
                <div>
                    <button className="button-primary">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

