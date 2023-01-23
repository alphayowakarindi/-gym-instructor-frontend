import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import AddService from './pages/AddService';
import DeleteService from './pages/DeleteService';
import Home from './pages/Home';
import './App.css';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';
import Services from './pages/Services';
import NavPannel from './components/navbar/NavPanel';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const mainPartialScreen = useSelector((store) => store.classStatus.mainPartialScreen);

  return (
    <div className="App d-flex">
      {/* header */}
      <NavPannel />
      {/* routes */}
      <div className={`main ${mainPartialScreen ? 'main-partial-screen' : ''}`}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/services/create" element={<AddService />} />
          <Route path="/delete-service" element={<DeleteService />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
