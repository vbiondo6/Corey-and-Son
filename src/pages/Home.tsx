import React from 'react';
import { Link } from 'react-router-dom';
import { FaTree, FaWater, FaCheckCircle } from 'react-icons/fa';
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
        <div className="container hero-content">
          <h1 className="display-3 text-white mb-4">Crafting Your Dream <br/><span className="text-accent">Outdoor Oasis</span></h1>
          <p className="lead text-white mb-5 mx-auto" style={{maxWidth: '700px'}}>
            Premium Landscaping and Power Washing services for homeowners who value excellence, precision, and natural beauty.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/services" className="btn btn-primary btn-lg px-5">Our Services</Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg px-5">Free Estimate</Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src={homeIntro}
                alt="Landscaping work" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h5 className="text-accent text-uppercase fw-bold mb-3">Welcome to Corey & Son</h5>
              <h2 className="display-5 mb-4">Restoring Beauty to Every Property</h2>
              <p className="lead mb-4">
                With years of experience, we bring a unique blend of horticultural expertise and professional power washing techniques to transform your property.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-md-6 d-flex align-items-center">
                  <Icon icon={FaCheckCircle} className="text-accent me-2 fs-4" />
                  <span className="fw-semibold">Expert Landscape Design</span>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <Icon icon={FaCheckCircle} className="text-accent me-2 fs-4" />
                  <span className="fw-semibold">Professional Power Washing</span>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <Icon icon={FaCheckCircle} className="text-accent me-2 fs-4" />
                  <span className="fw-semibold">Premium Maintenance</span>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <Icon icon={FaCheckCircle} className="text-accent me-2 fs-4" />
                  <span className="fw-semibold">Quality Guaranteed</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline-primary px-4">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Services */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="text-accent text-uppercase fw-bold mb-2">Our Expertise</h5>
            <h2 className="display-5">Services We Provide</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 service-card shadow-sm p-4">
                <div className="text-accent mb-4 fs-1"><Icon icon={FaTree} /></div>
                <h3>Landscaping</h3>
                <p>From seasonal flower planting to complete garden overhauls, we create sustainable and stunning landscapes.</p>
                <Link to="/services" className="mt-auto text-primary text-decoration-none fw-bold">Read More &rarr;</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 service-card shadow-sm p-4">
                <div className="text-accent mb-4 fs-1"><Icon icon={FaWater} /></div>
                <h3>Power Washing</h3>
                <p>Blast away dirt, mold, and grime from your siding, driveway, and deck to restore your home's curb appeal.</p>
                <Link to="/services" className="mt-auto text-primary text-decoration-none fw-bold">Read More &rarr;</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 service-card shadow-sm p-4">
                <div className="text-accent mb-4 fs-1"><Icon icon={FaCheckCircle} /></div>
                <h3>Lawn Care</h3>
                <p>Keep your lawn lush, green, and healthy with our comprehensive fertilization and maintenance programs.</p>
                <Link to="/services" className="mt-auto text-primary text-decoration-none fw-bold">Read More &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-white text-center">
        <div className="container">
          <h2 className="display-5 mb-4">Ready to Transform Your Property?</h2>
          <p className="lead mb-5 opacity-75 mx-auto" style={{maxWidth: '700px'}}>
            Contact us today for a free, no-obligation estimate on your next landscaping or power washing project.
          </p>
          <Link to="/contact" className="btn btn-accent-gold btn-lg px-5 text-white" style={{backgroundColor: 'var(--accent-gold)'}}>Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
