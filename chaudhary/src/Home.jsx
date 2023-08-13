import React from 'react';
import web from "../src/images/arya.jpeg";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-lg-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                Grow your business with <strong className="brand-name">Aryan Chaudhary</strong>
              </h1>
              <h3 className="my-3">
                We are a team of talented developers creating stunning websites
              </h3>
              <div className="mt-3">
                <NavLink to="/Form" className="btn-get-started">
                  Test Me
                </NavLink>
              </div>
              <h1 className="my-3">
                Let's build your business together and enjoy some coffee.
              </h1>
              <div className="mt-3">
              <NavLink to="https://turquoise-jolie-38.tiiny.site" className="btn-get-started">
      My Resume
    </NavLink>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={web} className="img-fluid animated" alt="home img" style={{ width: '60%', height: 'auto' }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
  
}

export default Home