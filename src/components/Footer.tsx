import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const Icon = (props: { icon: any, className?: string }) => {
    const { icon: Component, ...rest } = props;
    return <Component {...rest} />;
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h4 className="fw-black text-uppercase text-white mb-4">Corey & Son</h4>
            <p className="opacity-75">
              We show up, we work hard, and we get the job done. Local father and son team you can count on.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-warning fs-4"><Icon icon={FaFacebook} /></a>
              <a href="#" className="text-warning fs-4"><Icon icon={FaInstagram} /></a>
            </div>
          </div>
          <div className="col-lg-2">
            <h5 className="fw-bold text-uppercase text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none opacity-75">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none opacity-75">About Us</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none opacity-75">Services</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none opacity-75">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold text-uppercase text-white mb-4">Our Services</h5>
            <ul className="list-unstyled opacity-75">
              <li>Lawn Mowing</li>
              <li>Power Washing</li>
              <li>Yard Cleanup</li>
              <li>Snow Plowing</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold text-uppercase text-white mb-4">Contact</h5>
            <ul className="list-unstyled opacity-75">
              <li className="mb-2"><Icon icon={FaPhone} className="me-2 text-warning" /> (555) 123-4567</li>
              <li className="mb-2"><Icon icon={FaEnvelope} className="me-2 text-warning" /> info@coreyandson.com</li>
              <li className="mb-2"><Icon icon={FaMapMarkerAlt} className="me-2 text-warning" /> Green Valley Area</li>
            </ul>
          </div>
        </div>
        <hr className="my-4 opacity-25" />
        <div className="text-center opacity-50 small">
          <p>&copy; {new Date().getFullYear()} Corey & Son Landscaping and Power Washing.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;