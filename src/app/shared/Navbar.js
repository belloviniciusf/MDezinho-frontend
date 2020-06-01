import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from "react-redux";

import { signOut } from "../../store/modules/auth/actions";

export default function Navbar () {
  const dispatch = useDispatch();

  function toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  function exit(){
    dispatch(signOut());
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
              <i className="mdi mdi-elevation-rise"></i>Visualizar resumo</a>
          </li>
          <li className="nav-item d-none d-lg-flex">
            <a href="!#" onClick={evt =>evt.preventDefault()} className="nav-link">
              <i className="mdi mdi-bookmark-plus-outline"></i>Avaliações</a>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right ml-lg-auto">
        <li className="nav-item  nav-profile border-0">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                <span className="profile-text">Vincius F. Belló</span>
                <img className="img-xs rounded-circle" src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/45640731_2036335239991684_4521550468953931776_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeFW5e9ppgaptp7n3PEvCTbbMtnGabp3aQEy2cZpundpASrKhWLmCeybjFxEw5OpIwFMwwwHxii6QnrIftnF44-a&_nc_oc=AQkBTWAq58Wq9XMGAGSDKauG-0Zun6gLDcJJDnIxt8lnfbi7fjCerPBw0kA2JaKFggE&_nc_ht=scontent-gig2-1.xx&oh=9a3493a63facfe4a9b8d4633d35dc1e4&oe=5EE02A75" alt="Profile" />
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