import React, { Component, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import api from '../../services/api';

var page = '1';

export class Index extends Component {

  state = {
    tvshows: [],
  };
  componentDidMount() {
    api.get('/tvshows', {params: {page}})
    .then(response => {
      this.setState( { tvshows: response.data } )
    });    
  }

  render() {
    return (
      <div>
         <div className="row">
        <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-header bg-white">
              <h4 className="card-title">Últimos programas registrados</h4>              
              </div>
              <ul>
              </ul>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Nome </th>
                        <th> Emissora </th>
                        <th> Data e horário de transmissão </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.tvshows && this.state.tvshows.map(tvshow => 
                      <tr key={tvshow._id}>      
                        <td> {tvshow.name} </td>
                        <td> {tvshow.broadcaster} </td>
                        <td> {tvshow.date} - {tvshow.hour} </td>         
                        <td> <a className="btn btn-primary text-white"> Visualizar avaliações</a></td>           
                      </tr>
                        )}
                  </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
