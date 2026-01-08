import React from 'react';
import { FaLeaf, FaSnowflake, FaHome, FaRoad, FaSeedling, FaWater } from 'react-icons/fa';

const Services: React.FC = () => {
  const Icon = (props: { icon: any, className?: string }) => {
    const { icon: Component, ...rest } = props;
    return <Component {...rest} />;
  };

  const services = [
    {
      title: "LAWN MOWING",
      description: "We cut it, trim it, and blow it off. Simple as that. We'll keep your grass looking sharp all season.",
      icon: FaLeaf
    },
    {
      title: "POWER WASHING",
      description: "Driveways, sidewalks, siding, decks. If it's got dirt on it, we can wash it off.",
      icon: FaWater
    },
    {
      title: "YARD CLEANUP",
      description: "Got a mess of leaves or brush? We'll come haul it away and get your yard back in shape.",
      icon: FaHome
    },
    {
      title: "MULCH & PLANTING",
      description: "Need some fresh mulch or a few bushes planted? We can handle that too. Nothing too fancy.",
      icon: FaSeedling
    },
    {
      title: "SMALL HARDSCAPES",
      description: "We can fix up a walkway or lay down some pavers. Solid work that lasts.",
      icon: FaRoad
    },
    {
      title: "SNOW PLOWING",
      description: "When it snows, we plow. Driveways and sidewalks. We'll get you out.",
      icon: FaSnowflake
    }
  ];

  return (
    <div>
      <section className="bg-dark text-white py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-black text-uppercase text-white">What We Do</h1>
          <p className="lead">We work hard so you don't have to.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 service-card p-4 text-center bg-light">
                  <div className="text-success fs-1 mb-3"><Icon icon={service.icon} /></div>
                  <h3 className="mb-3 fw-black">{service.title}</h3>
                  <p className="text-muted fw-bold">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{backgroundColor: '#ffc107'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center text-dark">
              <h2 className="display-5 fw-black mb-4 text-uppercase">Need Something Else?</h2>
              <p className="lead fw-bold mb-4">
                If you need something done outside and you don't see it listed, just ask. If we can do it, we will. If we can't, we'll tell you straight up.
              </p>
              <a href="/contact" className="btn btn-dark btn-lg rounded-0 px-5 fw-bold">GIVE US A CALL</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;