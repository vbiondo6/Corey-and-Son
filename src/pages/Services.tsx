import React from 'react';
import { FaLeaf, FaSnowflake, FaHome, FaRoad, FaSeedling, FaWater } from 'react-icons/fa';

const Services: React.FC = () => {
  const Icon = (props: { icon: any, className?: string }) => {
    const { icon: Component, ...rest } = props;
    return <Component {...rest} />;
  };

  const services = [
    {
      title: "Lawn Maintenance",
      description: "Consistent, professional care including precision mowing, edging, and debris removal for a healthy, manicured lawn.",
      icon: FaLeaf
    },
    {
      title: "Power Washing",
      description: "High-pressure restoration for siding, driveways, patios, and decks using specialized cleaning solutions.",
      icon: FaWater
    },
    {
      title: "Property Cleanup",
      description: "Comprehensive spring and fall cleanup services, including leaf removal and garden bed preparation.",
      icon: FaHome
    },
    {
      title: "Mulching & Planting",
      description: "Enhance your curb appeal with fresh mulch delivery and installation, along with seasonal plant selection.",
      icon: FaSeedling
    },
    {
      title: "Light Hardscaping",
      description: "Repair and installation of stone walkways, paver patios, and garden retaining walls.",
      icon: FaRoad
    },
    {
      title: "Snow Management",
      description: "Reliable residential and commercial snow plowing and salting services to keep your property safe.",
      icon: FaSnowflake
    }
  ];

  return (
    <div>
      <section className="bg-primary text-white py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white mb-0">Our Services</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 p-4 border-0 shadow-sm bg-light">
                  <div className="text-accent fs-1 mb-3"><Icon icon={service.icon} /></div>
                  <h3 className="h4 mb-3 fw-bold">{service.title}</h3>
                  <p className="text-muted small">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">Ready for a Free Estimate?</h2>
              <p className="lead text-muted mb-4">
                We provide honest, upfront pricing with no hidden fees. Contact us today to schedule a walkthrough of your property.
              </p>
              <a href="/contact" className="btn btn-primary btn-lg">Contact Us Today</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
