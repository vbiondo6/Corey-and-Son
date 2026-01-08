import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-dark text-white py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-black text-uppercase">Who We Are</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4 fw-black text-uppercase">Just A Father And Son Earning A Living</h2>
              <p className="lead fw-bold">
                Corey & Son isn't some big corporation with a marketing department. It's just us.
              </p>
              <p>
                I started this business because I like working outside and I take pride in a job well done. When my son got old enough to push a mower, I put him to work. Now, we run this thing together.
              </p>
              <p>
                We believe in the old school way of doing things. A handshake means something. If we say we'll be there on Tuesday, we'll be there on Tuesday. We work hard, we charge fair prices, and we treat your property like it's our own.
              </p>
              <p>
                We're hustlers. We start early and we finish late. We aren't afraid of a little sweat or dirt. If you want a crew that's going to show up looking like a catalogue model, call the other guys. If you want a crew that's going to bust their hump to make your yard look great, call us.
              </p>
              
              <hr className="my-5" />

              <div className="row text-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="p-4 border border-2 border-dark bg-light">
                    <h1 className="fw-black display-4 mb-0 text-success">15+</h1>
                    <p className="fw-bold text-uppercase mb-0">Years Hustling</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-4 border border-2 border-dark bg-light">
                    <h1 className="fw-black display-4 mb-0 text-success">100%</h1>
                    <p className="fw-bold text-uppercase mb-0">Reliable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;