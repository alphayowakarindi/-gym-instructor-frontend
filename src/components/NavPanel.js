import { Link } from 'react-router-dom';

const NavPannel = () => (
  <header className="App-header">
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/services">
        Services
      </Link>
      <Link to="/reserve">
        Reserve
      </Link>

      <Link to="/reservations">
        My Reservations
      </Link>
      <Link to="/services/create">
        Add Service
      </Link>
      <Link to="/delete-service">
        Delete Service
      </Link>
      <Link to="/register">
        Register
      </Link>
      {' '}
      <Link to="/login">
        Login
      </Link>
    </nav>
  </header>
);

export default NavPannel;
