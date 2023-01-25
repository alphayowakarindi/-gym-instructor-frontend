import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HamburgerMenu from '../components/hamburgerMenu';
import { createReserve } from '../redux/reducers/reservation';

const Reserve = () => {
  
  const user = { id: 1, username: 'Gordon' };
  const services = [
    { id: 1, name: 'yogo' },
    { id: 2, name: 'kumfu' },
    { id: 3, name: 'karate' },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    service_id: services[0].id,
    city: '',
    start_date: '',
  });

  const updateValue = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
    console.log(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
    } else {
      const userId = user.id;
      const currentValue = {
        ...value,
        user_id: userId,
      };
      dispatch(createReserve(currentValue).then((payload) => {
        if (payload.status) {
          document.querySelector('#create-form').reset();
          document.querySelector('.message-info').textContent = 'The Service has been reserved!';
        } else {
          document.querySelector('.message-info').textContent = 'This service is already reserved!';
        }
      }));
    }
  };

  return (
    <>
      <HamburgerMenu />
      <div className="container d-flex my-5">
        <div className="hero-message d-flex align-items-center me-5 h3">
          You are about to reserve this service.
        </div>
        <form onSubmit={submitHandler} className="d-flex flex-column align-items-center" id="create-form">
          <p className="h3 text-bold pb-2">Reservation Form</p>
          <p className="message-info" />
          <select
            defaultValue={services.length === 0 ? 'default' : services[0].id}
            className="m-2 p-2 w-100"
            onChange={updateValue}
            id="service_id"
            required
          >
            <option value="default" disabled hidden>
              Choose Services
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>{ service.name }</option>
            ))}
          </select>
          <input type="text" id="city" name="city" placeholder="Your City" className="form-control p-2 m-2" required onChange={updateValue} />
          <input type="text" id="start_date" name="date" placeholder="Your Start Date" className="form-control p-2 m-2" required onChange={updateValue} />
          <input type="submit" value="Reserve" className="form-control m-2 btn btn-secondary" />
        </form>

      </div>

    </>

  );
};
export default Reserve;
