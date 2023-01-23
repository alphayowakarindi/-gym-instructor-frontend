import React from 'react';
import HamburgerMenu from '../components/hamburgerMenu';

const Reserve = () => (
  <>
    <HamburgerMenu />
    <div className="container d-flex my-5">
      <div className="hero-message d-flex align-items-center me-5 h3">
        You are about to reserve this service.
      </div>
      <form action="/action_page.php" className="d-flex flex-column align-items-center">
        <p className="h3 text-bold pb-2">Reservation Form</p>
        <input type="text" id="user" name="user" value="" className="form-control p-2 m-2" required hidden />
        <input type="text" id="service_id" name="service_id" value="" className="form-control p-2 m-2" required hidden />
        <select className="m-2 p-2 w-100" id="exampleFormControlSelect1" required>
          <option value="" disabled selected hidden>
            Select a service
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <input type="text" id="start-date" name="city" value="" placeholder="Your City" className="form-control p-2 m-2" required />
        <input type="date" id="start-date" name="start-date" value="" placeholder="Your Start Date" className="form-control p-2 m-2" required />
        <input type="submit" value="Reserve" className="form-control m-2 btn btn-secondary" />
      </form>

    </div>

  </>

);

export default Reserve;
