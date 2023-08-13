import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Form from './Form';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
      <Route  exact path="/" Component={Home} />
      <Route  exact path="/About" Component={About} />
      <Route  exact path="/Contact" Component={Contact} />
      <Route  exact path="/Service" Component={Service} />
      <Route  exact path="/Form" Component={Form} />
     
      </Routes>
    </>
  );
};

export default App;

