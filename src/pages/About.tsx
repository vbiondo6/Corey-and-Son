import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-primary text-white py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white mb-0">Our Story</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2 className="mb-4">Professional Service, Family Values</h2>
              <p className="lead text-muted mb-4">
                Corey & Son Landscaping and Power Washing is a family-owned and operated company built on the foundation of hard work and integrity.
              </p>
              <p>
                What started as a small local route has grown into a full-service property maintenance company. Throughout our growth, we have never lost sight of the "personal touch" that our clients have come to expect. We understand that your home is your biggest investment, and we treat it with the respect it deserves.
              </p>
              <p>
                When you hire Corey & Son, you aren't just another stop on a corporate route. You're a neighbor. We pride ourselves on clear communication, arriving on schedule, and delivering results that exceed expectations.
              </p>
              
              <div className="row mt-5 g-4">
                <div className="col-sm-6">
                  <div className="p-4 bg-light rounded shadow-sm border-start border-primary border-4">
                    <h5 className="fw-bold mb-2">Our Mission</h5>
                    <p className="small text-muted mb-0">To provide reliable, high-quality property maintenance that homeowners can depend on year after year.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-4 bg-light rounded shadow-sm border-start border-primary border-4">
                    <h5 className="fw-bold mb-2">Our Promise</h5>
                    <p className="small text-muted mb-0">Fair pricing, professional-grade equipment, and a commitment to getting the job done right the first time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="p-5 bg-light rounded shadow-sm">
                <h3 className="h4 mb-4">Why Choose Us?</h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                    <span className="bg-primary text-white rounded-circle me-3 d-inline-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', fontSize: '12px'}}>✓</span>
                    <span className="fw-bold">Experienced Father-Son Team</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <span className="bg-primary text-white rounded-circle me-3 d-inline-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', fontSize: '12px'}}>✓</span>
                    <span className="fw-bold">Fully Licensed & Insured</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <span className="bg-primary text-white rounded-circle me-3 d-inline-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', fontSize: '12px'}}>✓</span>
                    <span className="fw-bold">Professional-Grade Equipment</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <span className="bg-primary text-white rounded-circle me-3 d-inline-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', fontSize: '12px'}}>✓</span>
                    <span className="fw-bold">Consistent, Reliable Service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
