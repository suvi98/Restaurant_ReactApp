import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from './Navbar/Navigation'



const Home=()=> {
  return (

    <>
    
    <Navigation/>
    <div style={{
    margin: "3px 125px 0px 127px"}}>
    <img src="https://graphicsfamily.com/wp-content/uploads/2020/10/Restaurant-logo-design-free-template-scaled.jpg"
    height={500} width={1009} />
    </div>
    </>
  );
}

export default Home;