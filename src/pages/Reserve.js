import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HamburgerMenu from '../components/hamburgerMenu';

const Reserve = () => {
  const service = useSelector((store) => store.services);
  const services = [
    { id: 1, title: 'Yoga' },
    { id: 2, title: 'weght lifting' },
  ];
  const user = useSelector((store) => store.user);
  console.log(service);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    service_id: service.id,
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
    if (user.length === 0) {
      navigate('/login');
    } else {
      const userId = user.id;
      const currentValue = {
        ...value,
        user_id: userId,
      };
      fetch('http://127.0.0.1:8080/api/v1/reservations', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: currentValue,
      }).then((response) => {
        console.log(response);
      }).catch((error) => console.log(error));
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
            defaultValue={service.length === 0 ? 'default' : service.id}
            className="m-2 p-2 w-100"
            onChange={updateValue}
            id="service_id"
            required
          >
            <option value="default" disabled hidden>
              Choose Services
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>{ service.title }</option>
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
