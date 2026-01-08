import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact: React.FC = () => {
  const Icon = (props: { icon: any, className?: string }) => {
    const { icon: Component, ...rest } = props;
    return <Component {...rest} />;
  };

  return (
    <div>
      <section className="bg-primary-green text-white py-5">
        <div className="container py-4 text-center">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead opacity-75">We're here to help you with your next project.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2 className="mb-4">Get In Touch</h2>
              <p className="mb-5">Fill out the form below or contact us directly. Our team will get back to you within 24 hours to discuss your project and provide a free estimate.</p>
              
              <div className="d-flex mb-4">
                <div className="text-accent fs-3 me-3"><Icon icon={FaPhone} /></div>
                <div>
                  <h5 className="mb-1">Call Us</h5>
                  <p className="text-muted">(555) 123-4567</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="text-accent fs-3 me-3"><Icon icon={FaEnvelope} /></div>
                <div>
                  <h5 className="mb-1">Email Us</h5>
                  <p className="text-muted">info@coreyandson.com</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="text-accent fs-3 me-3"><Icon icon={FaMapMarkerAlt} /></div>
                <div>
                  <h5 className="mb-1">Our Location</h5>
                  <p className="text-muted">123 Landscape Way, Green Valley, ST 12345</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="text-accent fs-3 me-3"><Icon icon={FaClock} /></div>
                <div>
                  <h5 className="mb-1">Business Hours</h5>
                  <p className="text-muted mb-0">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card border-0 shadow-lg p-4 p-md-5">
                <h3 className="mb-4">Request a Free Estimate</h3>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control bg-light border-0 py-3" placeholder="John Doe" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control bg-light border-0 py-3" placeholder="john@example.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-control bg-light border-0 py-3" placeholder="(555) 000-0000" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Service Needed</label>
                      <select className="form-select bg-light border-0 py-3">
                        <option>Landscaping</option>
                        <option>Power Washing</option>
                        <option>Lawn Maintenance</option>
                        <option>Hardscaping</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Project Details</label>
                      <textarea className="form-control bg-light border-0 py-3" rows={4} placeholder="Tell us about your project..."></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="button" className="btn btn-primary btn-lg w-100 py-3">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
