import React from "react";
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import './Navigation.css'
import {  FaShoppingCart,FaUser} from "react-icons/fa";

function Navigation() {

  const navigate  = useNavigate();

  function handleSubmit (){
      navigate("/")
  }

  return (
    <div className="navigation">
          <nav className="navbar navbar-expand navbar-dark header">
              <div className="c1 container ">
                    <NavLink className="navbar-brand logo" to="/home">
                      Food Management System
                    </NavLink>
                <div>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                          <NavLink className="nav-link" to="/home">
                            Home
                            <span className="sr-only">(current)</span>
                          </NavLink>
                    </li>
                  
                    <li className="nav-item">
                          <NavLink className="nav-link" to="/products">
                            Menu
                          </NavLink>
                    </li>
                    <li className="nav-item">
                          <NavLink className="nav-link" to="/about">
                            Bill
                          </NavLink>
                    </li>
                    <li className="nav-item logo">
                          <NavLink className="nav-link" to="/cart">
                          <FaShoppingCart/>
                          </NavLink>
                    </li>
                    <li className="nav-item">
                          <NavLink className="nav-link" to="/admin">
                          Admin
                          </NavLink>
                    </li>
                    <li className="nav-item">
                        <button className="nav-logout nav-link" onClick={handleSubmit}>
                        Logout
                        </button>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>
    </div>
  );
}

export default Navigation;