import { Link } from 'react-router-dom';
import { IoLogoTwitter } from 'react-icons/io';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { FaLinkedinIn, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import './Navbar.css';

import image from './gym.jpg';

const NavPannel = () => (
  <header className="App-header bg-light p-3 d-flex justify-content-between flex-column">
    <div className="logo"><img src={image} alt="yogo images" /></div>
    <ul className="d-flex flex-column navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link fw-bold h3 ps-2" activeStyle={{ backgroundColor: 'orang' }}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/services" className="nav-link fw-bold h3 ps-2">Services</Link>
      </li>
      <li className="nav-item">
        <Link to="/reserve" className="nav-link fw-bold h3 ps-2"> Reserve </Link>
      </li>
      <li className="nav-item">
        <Link to="/reservations" className="nav-link fw-bold h3 ps-2">My Reservations </Link>
      </li>
      <li className="nav-item">
        <Link to="/services/create" className="nav-link fw-bold h3 ps-2"> Add Service </Link>
      </li>
      <li className="nav-item">
        <Link to="/delete-service" className="nav-link fw-bold h3 ps-2"> Delete Service </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link fw-bold h3 ps-2"> Register </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link fw-bold h3 ps-2">Login</Link>
      </li>
    </ul>
    <div className="footer">
      <ul className="social-icons m-0">
        <li className="social-link"><IoLogoTwitter /></li>
        <li className="social-link"><FaLinkedinIn /></li>
        <li className="social-link"><TiSocialGooglePlus /></li>
        <li className="social-link"><FaFacebookF /></li>
        <li className="social-link"><FaPinterestP /></li>
      </ul>
      <p className="h6">Copyright @2023</p>
    </div>
  </header>
);

export default NavPannel;
