import React, { useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../store/slice/cartSlice';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout  } = useAuth0();
  const dispatch = useDispatch(); 

  const { cart, totalQuantity } = useSelector((state) => {return state.allcart});
  
  useEffect(() => {
    console.log('Navbar===cart------total');
    dispatch(getCartTotal());
  },[cart]);

/*    categories && categories.length > 0 ? categories.map((category, index) => {
    console.log(category);
      }) : console.log('no category found')  */

  return (
    <div className='container-fluid bgcolor1'>
        <div className='row'>
            {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* Container wrapper */}
  <div className="container-fluid">
    {/* Toggle button */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* Navbar brand */}
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      {/* Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to={"/"} ><a className="nav-link" href="#">Home</a> </Link>
          
        </li>
 {/*        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li> */}
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}

    {/* Right elements */}
    <div className="d-flex align-items-center">
      {/* Icon */}
      <a className="text-reset me-3" href="#">      
        <Link to={"/cart"} ><i className="fas fa-shopping-cart"></i>({totalQuantity}) </Link>
      </a>

      {/* Notifications */}
      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      {/* Avatar */}
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>         
          <a className="dropdown-item" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} href="#">Settings</a>
          </li>
        </ul>
      </div>
    </div>
    {/* Right elements */}
  </div>
  {/* Container wrapper */}
</nav>
{/* Navbar End */}

        </div>
       
    </div>
  )
}

export default Navbar