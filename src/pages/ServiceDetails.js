import React from 'react';
import { Link } from 'react-router-dom';
import image from './images/yoga.jpg';

function ServiceDetails() {
  return (
    <div className="container d-flex justify-content-between ">
      <div className="image-container">
        <img src={image} alt="wel" />
      </div>

      <div className="service-info ms-5">
        <div className="fd-flex justify-content-between px-2 py-2 gap-3 bg-light">
          <span>Name</span>
          <span>Yoga</span>
        </div>
        <div className="d-flex justify-content-between border bg-gray-100 px-2 py-2">
          <span>Category</span>
          <span>Yoga</span>
        </div>
        <div className="d-flex justify-content-between border px-2 py-2">
          <span>Price</span>
          <span>$500</span>
        </div>
        <div className="d-flex justify-content-between border bg-gray-100 px-2 py-2">
          <span>Duration</span>
          <span>3 Months</span>
        </div>
        <Link to="/reserve">
          <button
            type="button"
            className=""
          >
            Reserve
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetails;
