import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Mill Pond Research Logo - Horizontal - 100.png';
import './Navbar.css';

const Navbar = () => {
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Millpond Research" style={{ height: '40px', width: 'auto' }} />
                </Link>
                <ul className="navbar-menu">
                    <li 
                        className="navbar-item dropdown-container"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                        <Link to="/solutions" className="navbar-link">
                            Solutions
                        </Link>
                        {isSolutionsOpen && (
                            <>
                                <div className="dropdown-bridge"></div>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/solutions/workbench" className="dropdown-link">
                                            Build AI solutions without technical overhead.
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/solutions/xilos" className="dropdown-link">
                                            Secure your AI interactions in real-time.
                                        </Link>
                                    </li>
                                </ul>
                            </>
                        )}
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
                    <Link to="/contactus" className="button-primary">Get Started</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

