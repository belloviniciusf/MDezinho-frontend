import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                  Change Password 
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="btn btn-success btn-block">Novo programa <i className="mdi mdi-plus"></i></button>
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
          <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/form-elements/basic-elements">
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
          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">Gerenciamento</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/user-pages/blank-page">Blank Page</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1">Login</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1">Register</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/user-pages/error-404">404</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/user-pages/error-500">500</Link></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
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

export default withRouter(Sidebar);