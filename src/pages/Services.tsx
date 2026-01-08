import React from 'react';
import { FaLeaf, FaSnowflake, FaHome, FaRoad, FaSeedling, FaWater } from 'react-icons/fa';

const Services: React.FC = () => {
  const Icon = (props: { icon: any, className?: string }) => {
    const { icon: Component, ...rest } = props;
    return <Component {...rest} />;
  };

  const services = [
    {
      title: "Landscape Design",
      description: "Custom design solutions including 3D rendering, plant selection, and architectural planning for your outdoor spaces.",
      icon: FaSeedling
    },
    {
      title: "Lawn Maintenance",
      description: "Weekly mowing, edging, fertilization, and weed control to keep your lawn in peak condition year-round.",
      icon: FaLeaf
    },
    {
      title: "Power Washing",
      description: "Professional grade cleaning for sidings, roofs, driveways, decks, and patios using safe, effective pressure levels.",
      icon: FaWater
    },
    {
      title: "Hardscaping",
      description: "Installation of retaining walls, paver patios, walkways, and outdoor kitchens built to last a lifetime.",
      icon: FaRoad
    },
    {
      title: "Property Cleanup",
      description: "Seasonal leaf removal, gutter cleaning, and brush clearing to keep your property tidy and safe.",
      icon: FaHome
    },
    {
      title: "Snow Removal",
      description: "Commercial and residential snow plowing, salting, and sidewalk clearing during the harsh winter months.",
      icon: FaSnowflake
    }
  ];

  return (
    <div>
      <section className="bg-primary-green text-white py-5">
        <div className="container py-4 text-center">
          <h1 className="display-4">Our Services</h1>
          <p className="lead opacity-75">Comprehensive solutions for a beautiful, clean property.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm p-4 text-center service-card">
                  <div className="text-accent fs-1 mb-3"><Icon icon={service.icon} /></div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-muted">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-6 mb-4">The Power Washing Advantage</h2>
              <p>Regular power washing doesn't just make your home look better—it protects your investment. Our team uses specialized nozzles and detergents to:</p>
              <ul className="list-unstyled">
                <li className="mb-2"><Icon icon={FaLeaf} className="text-accent me-2" /> Remove harmful mold, mildew, and algae</li>
                <li className="mb-2"><Icon icon={FaLeaf} className="text-accent me-2" /> Extend the life of your siding and paint</li>
                <li className="mb-2"><Icon icon={FaLeaf} className="text-accent me-2" /> Improve overall property value and curb appeal</li>
                <li className="mb-2"><Icon icon={FaLeaf} className="text-accent me-2" /> Create a safer, non-slip environment for walkways</li>
              </ul>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1000" 
                alt="Power washing in action" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
