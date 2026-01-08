import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaAward, FaCalendarCheck } from 'react-icons/fa';
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
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="display-4 text-white mb-3">Professional Landscaping & Power Washing You Can Rely On</h1>
              <p className="lead text-white mb-4 opacity-90">
                Corey & Son provides expert property maintenance for residential and commercial clients. Family-owned, fully equipped, and committed to quality.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary btn-lg">Get A Free Estimate</Link>
                <Link to="/services" className="btn btn-outline-light btn-lg">View Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative">
                <img 
                  src={homeIntro}
                  alt="Quality Landscaping" 
                  className="img-fluid rounded shadow-lg"
                />
                <div className="bg-primary text-white p-3 position-absolute bottom-0 start-0 m-3 rounded shadow">
                  <h4 className="mb-0 fw-bold text-white">15+ Years</h4>
                  <p className="mb-0 small">Serving the Community</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h6 className="text-accent fw-bold text-uppercase mb-2">About Corey & Son</h6>
              <h2 className="display-5 mb-4">Quality Workmanship from Local Experts</h2>
              <p className="lead mb-4 text-muted">
                We bridge the gap between small local crews and big corporate franchises.
              </p>
              <p className="mb-4">
                As a family-owned and operated business, we take personal pride in every lawn we mow and every property we wash. We combine professional-grade equipment with the kind of attention to detail you only get from people who truly care about their reputation.
              </p>
              <div className="row g-4 mb-5">
                <div className="col-md-6 d-flex">
                  <Icon icon={FaCheckCircle} className="text-accent me-3 mt-1 fs-5" />
                  <div>
                    <h5 className="mb-1">Guaranteed Quality</h5>
                    <p className="small text-muted mb-0">We don't leave until the job is done right.</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <Icon icon={FaCalendarCheck} className="text-accent me-3 mt-1 fs-5" />
                  <div>
                    <h5 className="mb-1">Reliable Scheduling</h5>
                    <p className="small text-muted mb-0">When we say we'll be there, we'll be there.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline-primary px-4">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Our Core Services</h2>
            <div className="mx-auto bg-primary mb-4" style={{height: '3px', width: '60px'}}></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-4 shadow-sm border-0">
                <h3 className="h4 mb-3">Lawn Maintenance</h3>
                <p className="text-muted">Weekly and bi-weekly mowing, edging, and professional trimming to keep your property looking its best.</p>
                <Link to="/services" className="mt-auto text-accent text-decoration-none fw-bold">Service Details &rarr;</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4 shadow-sm border-0">
                <h3 className="h4 mb-3">Power Washing</h3>
                <p className="text-muted">Restore your home's appearance with professional-grade cleaning for siding, driveways, and decks.</p>
                <Link to="/services" className="mt-auto text-accent text-decoration-none fw-bold">Service Details &rarr;</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4 shadow-sm border-0">
                <h3 className="h4 mb-3">Seasonal Cleanup</h3>
                <p className="text-muted">Comprehensive spring and fall cleanup services including leaf removal, gutter cleaning, and more.</p>
                <Link to="/services" className="mt-auto text-accent text-decoration-none fw-bold">Service Details &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
