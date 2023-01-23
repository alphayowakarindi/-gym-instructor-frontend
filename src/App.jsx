import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidenav from './component/sidenav/sidenav';
import Services from './component/pages/Services';
import Reservations from './component/pages/Reservations';
import Reserve from './component/pages/Reserve';
import CreateService from './component/pages/CreateService';
import DeleteService from './component/pages/DeleteService';
import Login from './component/pages/Login';
import Signup from './component/pages/Signup';
import ServiceDetails from './component/pages/ServiceDetails';

const App = () => (
  <Router>
    <div className="min-h-screen w-full flex bg-gray-200">
      <Sidenav />
      <Routes>
        <Route>
          <Route path="/" element={<Services />} />
          <Route path="/my-reservations" element={<Reservations />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/create-service" element={<CreateService />} />
          <Route path="/delete-service" element={<DeleteService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details/:id" element={<ServiceDetails />} />
        </Route>
      </Routes>
    </div>
  </Router>
);

export default App;
