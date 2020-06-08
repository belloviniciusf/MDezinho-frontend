import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { signOut } from "../../store/modules/auth/actions";
import { Link } from 'react-router-dom';


export default function Navbar () {
  const dispatch = useDispatch();

  function toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  function exit(){
    dispatch(signOut());
  }

  function Username() {
    const profile = useSelector(state => state.user.profile)
    return     <span className="profile-text">{profile.name}</span>
  }
  
  

  return (
    <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
      <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt =>evt.preventDefault()}><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a>
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
          <i className="mdi mdi-menu"></i>
        </button>
        <ul className="navbar-nav navbar-nav-left header-links">
          <li className="nav-item d-none d-md-flex">
            <a href="!#" onClick={evt =>evt.preventDefault()} className="nav-link">Baixar .APK <span className="badge badge-primary ml-1">novo</span>
            </a>
          </li>
          <li className="nav-item active d-none d-xl-flex">
            <a href="!#" onClick={evt =>evt.preventDefault()} className="nav-link">
              <i className="mdi mdi-elevation-rise"></i>
              <Link to="/" className="nav-link">Dashboard</Link>
              </a>
          </li>
          <li className="nav-item d-none d-lg-flex">
            <a href="/tvshows/index" onClick={evt =>evt.preventDefault()} className="nav-link">
              <i className="mdi mdi-bookmark-plus-outline"></i><Link to="/tvshows/index" className="nav-link">Programas</Link></a>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right ml-lg-auto">
        <li className="nav-item  nav-profile border-0">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                <Username/>
              </Dropdown.Toggle>
              <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={exit}>
                  Sair
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleOffcanvas}>
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
};