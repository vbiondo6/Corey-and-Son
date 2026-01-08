import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckSquare, FaTools, FaTruck } from 'react-icons/fa';
import heroBg from '../assets/hero-bg.jpg';
import homeIntro from '../assets/home-intro.jpg';

const Home: React.FC = () => {
  const Icon = (props: { icon: any, className?: string }) => {
    const { icon: Component, ...rest } = props;
    return <Component {...rest} />;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{backgroundImage: `url(${heroBg})`}}>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-start">
          <h1 className="display-2 text-white mb-3 text-uppercase fw-black">WE SHOW UP.<br/>WE WORK HARD.</h1>
          <p className="lead text-white mb-4 fw-bold" style={{maxWidth: '600px', fontSize: '1.25rem'}}>
            No fluff, no nonsense. Just reliable landscaping and power washing for folks who want the job done right.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <Link to="/contact" className="btn btn-outline-gold btn-lg px-5 py-3 rounded-0">Get A Free Quote</Link>
            <Link to="/services" className="btn btn-primary btn-lg px-5 py-3 rounded-0">See Our Services</Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div style={{border: '4px solid #000'}}>
                <img 
                  src={homeIntro}
                  alt="Landscaping work" 
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h5 className="text-danger fw-bold text-uppercase mb-2">Local & Reliable</h5>
              <h2 className="display-5 mb-4 fw-black">COREY & SON.</h2>
              <p className="lead mb-4 fw-bold">
                We ain't a big franchise. We're your neighbors.
              </p>
              <p className="mb-4">
                Me and my boy have been cutting grass and washing driveways in this town for years. We don't need fancy uniforms to prove we know what we're doing. We show up on time, we do the work, and we charge a fair price. That's it.
              </p>
              <div className="row g-3 mb-4">
                <div className="col-12 d-flex align-items-center">
                  <Icon icon={FaCheckSquare} className="text-success me-3 fs-3" />
                  <span className="fw-bold fs-5">Fair Prices, No Hidden Fees</span>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <Icon icon={FaTruck} className="text-success me-3 fs-3" />
                  <span className="fw-bold fs-5">We Actually Show Up</span>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <Icon icon={FaTools} className="text-success me-3 fs-3" />
                  <span className="fw-bold fs-5">We Use Good Equipment</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-dark btn-lg rounded-0 px-4">Meet The Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="section-padding" style={{backgroundColor: '#e9ecef'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-black">WHAT WE DO</h2>
            <p className="lead">We keep it simple. If it's outside and needs cleaning or cutting, call us.</p>
          </div>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="bg-white p-5 h-100 border border-dark">
                <h3 className="mb-3">GRASS CUTTING</h3>
                <p>We mow, we trim, we blow off the driveway. We don't leave a mess. Weekly or bi-weekly service available.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-dark text-white p-5 h-100 border border-dark">
                <h3 className="text-white mb-3">POWER WASHING</h3>
                <p>Got a dirty driveway? Green siding? We'll blast it clean. We've got the heavy-duty stuff to get the grime off.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-5 h-100 border border-dark">
                <h3 className="mb-3">YARD CLEANUP</h3>
                <p>Leaves everywhere? Brush piling up? We'll come haul it away so you don't have to break your back.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="/contact" className="btn btn-warning btn-lg fw-bold rounded-0 px-5">CALL US NOW</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;