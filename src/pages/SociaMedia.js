import React from 'react';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const SociaMedia = () => (
  <ul className="social-icons m-0 d-flex justify-content-center">
    <li className="social-link"><FaFacebookF /></li>
    <li className="social-link"><IoLogoTwitter /></li>
    <li className="social-link"><FaPinterestP /></li>
  </ul>

);

export default SociaMedia;
