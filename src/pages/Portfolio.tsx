import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Elegant Estate Garden",
      category: "Landscaping",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Driveway Restoration",
      category: "Power Washing",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Modern Paver Patio",
      category: "Hardscaping",
      image: "https://images.unsplash.com/photo-1590059392234-a31189d533b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Commercial Lawn Overhaul",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pool Area Cleaning",
      category: "Power Washing",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Zen Garden Installation",
      category: "Landscaping",
      image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div>
      <section className="bg-primary-green text-white py-5">
        <div className="container py-4 text-center">
          <h1 className="display-4">Our Portfolio</h1>
          <p className="lead opacity-75">Take a look at some of our recent transformations.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="portfolio-item position-relative overflow-hidden rounded shadow-sm">
                  <img src={project.image} alt={project.title} className="img-fluid w-100" style={{height: '300px', objectFit: 'cover'}} />
                  <div className="portfolio-overlay p-4 d-flex flex-column justify-content-end" style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to top, rgba(26, 60, 52, 0.9), transparent)',
                    color: 'white',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}>
                    <span className="text-accent small fw-bold text-uppercase">{project.category}</span>
                    <h4 className="mb-0">{project.title}</h4>
                  </div>
                </div>
                <style>{`
                  .portfolio-item:hover .portfolio-overlay {
                    opacity: 1 !important;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
