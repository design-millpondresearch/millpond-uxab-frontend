import { Link } from 'react-router-dom';
import logo from '../assets/Mill Pond Research Logo - Horizontal - 100.png';
import facebook from '../assets/logos-footer/Facebook.svg';
import instagram from '../assets/logos-footer/Instagram.svg';
import github from '../assets/logos-footer/Github.svg';
import youtube from '../assets/logos-footer/Youtube.svg';
import linkedin from '../assets/logos-footer/Linkedin.svg';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container flex flex-col items-center gap-6">
            <Link to="/" className="footer-logo">
                <img src={logo} alt="Millpond Research" style={{ height: '80px', width: 'auto', marginBottom: '48px'}} />
            </Link>

            <ul className="footer-menu">
                    <li className="footer-item">
                        <Link to="/Company" className="footer-link">
                            About
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/Resources" className="footer-link">
                            Resources
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/solutions/workbench" className="footer-link">
                            WorkBench
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/solutions/xilos" className="footer-link">
                            Xilos
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/contactus" className="footer-link">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div style={{ display:'flex', marginBottom: '36px', gap:'50px'}}>
                    <Link to="https://www.facebook.com/p/Mill-Pond-Research-61554640073099/" className="navbar-logo-social-media">
                        <img src={facebook} alt="Millpond Reseach Facebook" style={{ height: '24px', width: 'auto'}} />
                    </Link>
                    <Link to="https://www.instagram.com/millpondresearch/" className="navbar-logo-social-media">
                        <img src={instagram} alt="Millpond Reseach Instagram" style={{ height: '24px', width: 'auto'}} />
                    </Link>
                    <Link to="https://github.com/Mill-Pond-Research/captains-log" className="navbar-logo-social-media">
                        <img src={github} alt="Millpond Reseach Github" style={{ height: '24px', width: 'auto'}} />
                    </Link>
                    <Link to="https://www.youtube.com/@millpondresearch" className="navbar-logo-social-media">
                        <img src={youtube} alt="Millpond Reseach Youtube" style={{ height: '24px', width: 'auto'}} />
                    </Link>
                    <Link to="https://www.linkedin.com/company/mill-pond-research" className="navbar-logo-social-media">
                        <img src={linkedin} alt="Millpond Reseach Linkedin" style={{ height: '24px', width: 'auto'}} />
                    </Link>
                </div>


                <p className="footer-rights">
                    © 2025 Mill Pond Research, Inc. All rights reserved.
                </p>


        </div>

    </footer>
  );
};


export default Footer;

