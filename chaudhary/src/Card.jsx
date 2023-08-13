import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = (props) => {
  return (
    <>
    <div className="col-md-4 col-10 mx-auto">
    <div className="card">
  <img src={props.image} className="card-img-top" alt={props.image}/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.disc}.</p>
    <NavLink to={props.link} className="btn-get-started">
            {props.linkText} Click Me
          </NavLink>
  </div>
</div>
</div>
    
    
    </>
  )
}

export default Card