import './pages.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../redux/reducers/services';
import SociaMedia from './SociaMedia';
import HamburgerMenu from '../components/hamburgerMenu';

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
  }, []);
  const services = useSelector((store) => store.services);

  return (
    <>
      <HamburgerMenu />

      <div className="services d-flex justify-content-center align-items-center flex-column">

        <p className="fw-bold h3">Most In Demand Services</p>
        <p className="h6 fst-italic">Attain fitness with us</p>

        <div className="service mt-5 d-flex text-center align-items-center">
          <buton type="button" className=" prev-btn btn btn-secondary me-5">Next</buton>
          {services.map((service) => (
            <div className="card mx-3" style={{ width: '18rem' }} key={service.id}>
              <img src={service.image.url} alt="yogo images" />
              <div className="card-body">
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <div>
                  {' '}
                  <SociaMedia />
                </div>
              </div>
            </div>
          ))}
          <buton type="button" className=" next-btn ms-5">Next</buton>
        </div>

      </div>
    </>
  );
};

export default Services;
