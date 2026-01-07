import { Link } from 'react-router-dom';
import logo from '../assets/millpond-research-logo-square.svg';
import facebook from '../assets/logos-footer/Facebook.svg';
import instagram from '../assets/logos-footer/Instagram.svg';
import github from '../assets/logos-footer/Github.svg';
import youtube from '../assets/logos-footer/Youtube.svg';
import linkedin from '../assets/logos-footer/Linkedin.svg';
import './Footer.css';

/**
 * Footer component preserving the original design while introducing
 * responsive tweaks for smaller screens. The layout and styling are
 * controlled primarily through `Footer.css`, which now includes media
 * queries to adjust padding, gaps, and element sizes on mobile. A new
 * `footer-socials` class is added to the social links container to
 * facilitate responsive spacing via CSS. The logo image is also given
 * a class (`footer-logo-img`) so its size can be adjusted responsively.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col items-center gap-6">
        <Link to="/" className="footer-logo">
          <img
            src={logo}
            alt="Millpond Research"
            className="footer-logo-img"
          />
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

        <div className="footer-socials">
          <a
            href="https://www.facebook.com/p/Mill-Pond-Research-61554640073099/"
            className="navbar-logo-social-media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="Millpond Research Facebook"
              style={{ height: '24px', width: 'auto' }}
            />
          </a>
          <a
            href="https://www.instagram.com/millpondresearch/"
            className="navbar-logo-social-media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="Millpond Research Instagram"
              style={{ height: '24px', width: 'auto' }}
            />
          </a>
          <a
            href="https://github.com/Mill-Pond-Research"
            className="navbar-logo-social-media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="Millpond Research GitHub"
              style={{ height: '24px', width: 'auto' }}
            />
          </a>
          <a
            href="https://www.youtube.com/@millpondresearch"
            className="navbar-logo-social-media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youtube}
              alt="Millpond Research YouTube"
              style={{ height: '24px', width: 'auto' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/mill-pond-research"
            className="navbar-logo-social-media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="Millpond Research LinkedIn"
              style={{ height: '24px', width: 'auto' }}
            />
          </a>
        </div>

        <p className="footer-rights">© 2026 Mill Pond Research, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;