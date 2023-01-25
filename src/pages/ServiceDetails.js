import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FaAngleDoubleRight, FaAngleLeft } from 'react-icons/fa';
import image from './images/yoga.jpg';
import HamburgerMenu from '../components/hamburgerMenu';
import icon from './images/icon.png';

function ServiceDetails() {
  return (
    <>
      <HamburgerMenu />
      <div className="container service-details align-items-center justify-content-center p-5">
        <div className="raw d-flex py-5">
          <div className="col-lg-6 col-sm-3 d-flex flex-column justify-content-between">
            <div className="images-display">
              <img src={image} alt="wel" className="img-thumbnail" />
            </div>
            <div>
              <button type="button" className="explore-btn">
                <FaAngleLeft size={25} className="text-white" />
                See More
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-sm-3">
            <form className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <span className="h3">Yoga</span>
              </div>
              <div className="d-flex justify-content-between bg-light p-2 my-1">
                <span>Class Time</span>
                <span>5:00pm</span>
              </div>
              <div className="d-flex justify-content-between p-2 my-1">
                <span>Amount Payable</span>
                <span>$500</span>
              </div>
              <div className="d-flex justify-content-between border bg-gray-100 px-2 py-2">
                <span>Stay Duration</span>
                <span>3 Months</span>
              </div>
              <div className="d-flex align-items-end flex-column">
                <span className="p-3">
                  Discover more
                  {' '}
                  <FaAngleDoubleRight />
                </span>
                <div className="spining-img">
                  <img src={icon} alt="spinning" className="img-thumbnail" />
                </div>
                <Link to="/reserve">
                  <button
                    type="button"
                    className="reserve"
                  >
                    <AiOutlineSchedule size={25} className="text-white" />
                    <span className="mx-1 text-white">Reserve Service</span>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetails;
