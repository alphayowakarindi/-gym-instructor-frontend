import { Routes, Route } from 'react-router-dom';
import AddService from './pages/AddService';
import DeleteService from './pages/DeleteService';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';
import Services from './pages/Services';
import NavPannel from './components/NavPanel';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      {/* header */}
      <NavPannel />
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/services/create" element={<AddService />} />
        <Route path="/delete-service" element={<DeleteService />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
