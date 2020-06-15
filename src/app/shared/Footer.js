import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">2020 ® APP-EAL ®</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Desenvolvido por <i className="mdi mdi-heart text-info"></i> Belló Software Development Agency</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;