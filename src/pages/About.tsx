import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-primary-green text-white py-5">
        <div className="container py-4 text-center">
          <h1 className="display-4">About Corey & Son</h1>
          <p className="lead opacity-75">A legacy of quality and care in every project.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="mb-4">Our Story</h2>
              <p>
                Founded on the principles of hard work and integrity, Corey & Son Landscaping and Power Washing began as a small family operation with a single lawnmower and a passion for the outdoors.
              </p>
              <p>
                Today, we have grown into a premier full-service property maintenance company, serving residential and commercial clients across the region. Despite our growth, we remain committed to the personal touch that only a family-owned business can provide.
              </p>
              <div className="row mt-4">
                <div className="col-6">
                  <h3 className="text-accent h1 mb-0">15+</h3>
                  <p className="text-muted fw-bold">Years Experience</p>
                </div>
                <div className="col-6">
                  <h3 className="text-accent h1 mb-0">500+</h3>
                  <p className="text-muted fw-bold">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1599423300746-b62533397202?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5">Why Choose Us?</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="bg-white p-4 h-100 rounded shadow-sm">
                <h4 className="mb-3">Attention to Detail</h4>
                <p className="text-muted">We don't just cut grass; we manicured lawns. We don't just wash walls; we restore surfaces. Every detail matters.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-white p-4 h-100 rounded shadow-sm">
                <h4 className="mb-3">Professional Grade</h4>
                <p className="text-muted">We use only the highest quality equipment and eco-friendly products to ensure the best results and the safety of your property.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-white p-4 h-100 rounded shadow-sm">
                <h4 className="mb-3">Reliable Service</h4>
                <p className="text-muted">When we say we'll be there, we'll be there. Our team is punctual, professional, and respectful of your time and space.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
