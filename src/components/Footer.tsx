import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const Icon = (props: { icon: any, className?: string }) => {
    const { icon: Component, ...rest } = props;
    return <Component {...rest} />;
  };

  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h4 className="text-white mb-4">Corey & Son</h4>
            <p className="text-light opacity-75">
              Providing premium landscaping and power washing services to the community. 
              We take pride in our work and treat every project as if it were our own.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-accent fs-4"><Icon icon={FaFacebook} /></a>
              <a href="#" className="text-accent fs-4"><Icon icon={FaInstagram} /></a>
            </div>
          </div>
          <div className="col-lg-2">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none opacity-75 hover-opacity-100">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none opacity-75">About Us</Link></li>
              <li><Link to="/services" className="text-light text-decoration-none opacity-75">Services</Link></li>
              <li><Link to="/portfolio" className="text-light text-decoration-none opacity-75">Portfolio</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none opacity-75">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="text-white mb-4">Services</h5>
            <ul className="list-unstyled text-light opacity-75">
              <li>Landscaping Design</li>
              <li>Lawn Maintenance</li>
              <li>Hardscaping</li>
              <li>Power Washing</li>
              <li>Irrigation Systems</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="text-white mb-4">Contact Info</h5>
            <ul className="list-unstyled text-light opacity-75">
              <li className="mb-2"><Icon icon={FaPhone} className="me-2 text-accent" /> (555) 123-4567</li>
              <li className="mb-2"><Icon icon={FaEnvelope} className="me-2 text-accent" /> info@coreyandson.com</li>
              <li className="mb-2"><Icon icon={FaMapMarkerAlt} className="me-2 text-accent" /> 123 Landscape Way, Green Valley</li>
            </ul>
          </div>
        </div>
        <hr className="my-4 bg-light opacity-25" />
        <div className="row">
          <div className="col-md-12 text-center text-light opacity-50 small">
            <p>&copy; {new Date().getFullYear()} Corey & Son Landscaping and Power Washing. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
