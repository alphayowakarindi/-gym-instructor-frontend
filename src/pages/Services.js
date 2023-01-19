import './pages.css';
import image from './images/yoga.jpg';
import SociaMedia from './SociaMedia';

const Services = () => (
  <div className="services ps-3 d-flex justify-content-center align-items-center flex-column">
    <p className="fw-bold h3">Most In Demand Services</p>
    <p className="h6 fst-italic">Attain fitness with us</p>

    <div className="service mt-5 d-flex text-center">
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
    </div>

  </div>
);

export default Services;
