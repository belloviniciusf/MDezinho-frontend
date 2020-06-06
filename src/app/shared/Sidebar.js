import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src="https://i.imgur.com/CdUxhRt.png" alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src="https://i.imgur.com/CdUxhRt.png" alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                      <img src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/45640731_2036335239991684_4521550468953931776_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeFW5e9ppgaptp7n3PEvCTbbMtnGabp3aQEy2cZpundpASrKhWLmCeybjFxEw5OpIwFMwwwHxii6QnrIftnF44-a&_nc_oc=AQkBTWAq58Wq9XMGAGSDKauG-0Zun6gLDcJJDnIxt8lnfbi7fjCerPBw0kA2JaKFggE&_nc_ht=scontent-gig2-1.xx&oh=9a3493a63facfe4a9b8d4633d35dc1e4&oe=5EE02A75" alt="profile" />
                    </div>
                    <div className="text-left ml-3">
                      <p className="profile-name">Vinicius F. Belló</p>
                      <small className="designation text-muted text-small">Administrador</small>
                      <span className="status-indicator online"></span>
                    </div>
                  </div>
                </Dropdown.Toggle>                
              </Dropdown>
            </div>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Visão geral</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/tvshows/index') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/tvshows/index">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Programas</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/evaluations/index') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/evaluations/index">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">Avaliações</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/usuarios') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/usuarios/todos">
              <i className="mdi mdi-account menu-icon"></i>
              <span className="menu-title">Usuários</span>
            </Link>
          </li>          
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return window.location.pathname.startsWith(path);    
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default Sidebar;