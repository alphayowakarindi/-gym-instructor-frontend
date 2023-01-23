import { NavLink } from 'react-router-dom';
import { IoLogoTwitter } from 'react-icons/io';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { FaLinkedinIn, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './Navbar.css';
import image from './gym.jpg';

const NavPannel = () => {
  const navActive = useSelector((store) => store.classStatus.navActive);

  return (
    <header className={`App-header d-flex flex-column ${navActive ? 'nav-active' : ''}`}>
      <div className="logo mb-5 text-center"><img src={image} alt="yogo images" /></div>
      <ul className="d-flex flex-column navbar-nav ps-3">
        <li className="nav-item">
          <NavLink end to="/" className="nav-link h3 px-2" activeStyle={{ backgroundColor: 'orang' }}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink end to="/services" className="nav-link h3 px-2">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink end to="/reserve" className="nav-link h3 px-2"> Reserve </NavLink>
        </li>
        <li className="nav-item">
          <NavLink end to="/reservations" className="nav-link h3 px-2">My Reservations </NavLink>
        </li>
        <li className="nav-item">
          <NavLink end to="/services/create" className="nav-link h3 px-2"> Add Service </NavLink>
        </li>
        <li className="nav-item">
          <NavLink end to="/delete-service" className="nav-link h3 px-2"> Delete Service </NavLink>
        </li>
        <li className="nav-item">
          <NavLink end to="/register" className="nav-link h3 px-2"> Register </NavLink>
        </li>
        <li className="nav-item">
          <NavLink end to="/login" className="nav-link h3 px-2">Login</NavLink>
        </li>
      </ul>
      <div className="footer ps-4">
        <ul className="social-icons m-0">
          <li className="social-link"><IoLogoTwitter /></li>
          <li className="social-link"><FaLinkedinIn /></li>
          <li className="social-link"><TiSocialGooglePlus /></li>
          <li className="social-link"><FaFacebookF /></li>
          <li className="social-link"><FaPinterestP /></li>
        </ul>
        <span className="copyright">Copyright &#169;2023</span>
      </div>
    </header>
  );
};

export default NavPannel;
