import React from 'react';
import web from "../src/images/arya.jpeg";
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                <h1>
                 <strong className="brand-name">  [Aryan Chaudhary]</strong>
                </h1>
                <br/>
                <br/>
                <p className="mv-3">
                  <h1>Hello, I'm [Aryan Chaudhary],</h1>
                a passionate and dedicated web developer with a strong foundation in C++, object-oriented programming (OOP), and essential data structures and algorithms (DSA). My journey in the world of coding started with a deep curiosity for technology and a desire to create impactful digital experiences.

As a C++ enthusiast,  I firmly believe in the power of object-oriented programming, leveraging its principles to create modular, scalable, and maintainable solutions. My proficiency in OOP has equipped me with the ability to design and implement robust software architectures that stand the test of time.

In addition to mastering C++ and OOP, I've delved into the realm of data structures and algorithms, understanding their pivotal role in optimizing code performance and solving complex problems. With a solid grasp of fundamental DSA concepts, I am driven to create algorithmic solutions that enhance the efficiency and functionality of web applications.

As a web developer, I'm not only immersed in lines of code but also passionate about crafting visually appealing and user-friendly interfaces. My goal is to blend my technical expertise with creative design to build captivating websites that seamlessly integrate functionality and aesthetics.

. My dedication to continuous learning drives me to stay up-to-date with the latest technologies and best practices, ensuring that my work remains cutting-edge and impactful.
I am excited about the opportunity to contribute my skills and passion to innovative projects and make a meaningful impact in the world of web development. Whether it's crafting elegant code, designing captivating interfaces, or solving intricate problems, I'm ready to turn ideas into reality.

Thank you for visiting my portfolio. Let's connect and embark on a journey to create remarkable digital experiences together.
                </p>
                <div className="mt-3">
                  <NavLink to="/Form" className="btn-get-started">
                    Get Started
                  </NavLink>
              </div>
              </div>
              <div className="col-lg-6 order-2 order-lg-1 header-img">
                <img src={web} className="img-fluid animated" alt="About img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  
  </>
  )
}

export default About