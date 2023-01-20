import './pages.css';
import image from './images/yoga.jpg';
import SociaMedia from './SociaMedia';
import HamburgerMenu from '../components/hamburgerMenu';

const Services = () => (
  <>
    <HamburgerMenu />

    <div className="services d-flex justify-content-center align-items-center flex-column">

      <p className="fw-bold h3">Most In Demand Services</p>
      <p className="h6 fst-italic">Attain fitness with us</p>

      <div className="service mt-5 d-flex text-center align-items-center">
        <buton type="button" className=" prev-btn btn btn-secondary me-5">Next</buton>

        <div className="card mx-3" style={{ width: '18rem' }}>
          <img src={image} alt="yogo images" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Yoga</h5>
            <p className="card-text">Yoga is a practice that connects the body, breath, and mind. It uses physical postures, breathing exercises, and meditation to improve overall health</p>
            <div>
              {' '}
              <SociaMedia />
            </div>
          </div>
        </div>
        <div className="card mx-3" style={{ width: '18rem' }}>
          <img src={image} alt="yogo images" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Yoga</h5>
            <p className="card-text">Yoga is a practice that connects the body, breath, and mind. It uses physical postures, breathing exercises, and meditation to improve overall health</p>
            <div>
              {' '}
              <SociaMedia />
            </div>
          </div>
        </div>
        <div className="card mx-3" style={{ width: '18rem' }}>
          <img src={image} alt="yogo images" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Yoga</h5>
            <p className="card-text">Yoga is a practice that connects the body, breath, and mind. It uses physical postures, breathing exercises, and meditation to improve overall health</p>
            <div>
              {' '}
              <SociaMedia />
            </div>
          </div>
        </div>
        <buton type="button" className=" next-btn ms-5">Next</buton>
      </div>

    </div>
  </>
);

export default Services;
