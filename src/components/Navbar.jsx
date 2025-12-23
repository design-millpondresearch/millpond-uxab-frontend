import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Mill Pond Research Logo - Horizontal - 100.png';
import './Navbar.css';

const Navbar = () => {
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMobileSolutions = () => {
        setIsMobileSolutionsOpen(!isMobileSolutionsOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileSolutionsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Millpond Research" style={{ height: '40px', width: 'auto' }} />
                </Link>
                
                {/* Hamburger menu button */}
                <button 
                    className="navbar-hamburger"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                </button>

                {/* Desktop menu */}
                <ul className="navbar-menu">
                    <li 
                        className="navbar-item dropdown-container"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                        <p className="navbar-link">
                            Solutions
                        </p>
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
                <div className="navbar-cta">
                    <Link to="/contactus" className="button-primary">Get Started</Link>
                </div>

                {/* Mobile menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-menu-list">
                        <li className="mobile-menu-item">
                            <Link to="/" className="mobile-menu-link" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="mobile-menu-item">
                            <button 
                                className="mobile-menu-link"
                                onClick={toggleMobileSolutions}
                            >
                                Solutions
                                <span className={`mobile-arrow ${isMobileSolutionsOpen ? 'open' : ''}`}>▼</span>
                            </button>
                            {isMobileSolutionsOpen && (
                                <ul className="mobile-dropdown">
                                    <li>
                                        <Link to="/solutions/workbench" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                                            Build AI solutions without technical overhead.
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/solutions/xilos" className="mobile-dropdown-link" onClick={closeMobileMenu}>
                                            Secure your AI interactions in real-time.
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="mobile-menu-item">
                            <Link to="/resources" className="mobile-menu-link" onClick={closeMobileMenu}>
                                Resources
                            </Link>
                        </li>
                        <li className="mobile-menu-item">
                            <Link to="/company" className="mobile-menu-link" onClick={closeMobileMenu}>
                                Company
                            </Link>
                        </li>
                        <li className="mobile-menu-item mobile-cta-item">
                            <Link to="/contactus" className="button-primary mobile-cta-button" onClick={closeMobileMenu}>
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

