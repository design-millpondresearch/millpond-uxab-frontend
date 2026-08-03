import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/millpond-research-logo-square.svg';
import './Navbar.css';

/**
 * Primary site navigation for Mill Pond Research.
 *
 * Xilos-only navigation. No Products dropdown, no WorkBench links.
 * "Get Started" CTA funnels to xilos.ai/login.
 */
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Millpond Research" style={{ height: '70px', width: 'auto' }} />
                </Link>

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
                    <li className="navbar-item">
                        <Link to="/solutions/xilos" className="navbar-link">
                            Xilos
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
                    <li className="navbar-item">
                        <Link to="/partners" className="navbar-link">
                            Partners
                        </Link>
                    </li>
                </ul>
                <div className="navbar-cta">
                    <a href="https://xilos.ai/login" className="button-primary">
                        Get Started
                    </a>
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
                            <Link to="/solutions/xilos" className="mobile-menu-link" onClick={closeMobileMenu}>
                                Xilos
                            </Link>
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
                        <li className="mobile-menu-item">
                            <Link to="/partners" className="mobile-menu-link" onClick={closeMobileMenu}>
                                Partners
                            </Link>
                        </li>
                        <li className="mobile-menu-item">
                            <Link to="/pricing" className="mobile-menu-link" onClick={closeMobileMenu}>
                                Pricing
                            </Link>
                        </li>
                        <li className="mobile-menu-item mobile-cta-item">
                            <a
                                href="https://xilos.ai/login"
                                className="button-primary mobile-cta-button"
                                onClick={closeMobileMenu}
                            >
                                Get Started
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
