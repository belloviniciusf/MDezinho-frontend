import React, { Component, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import api from '../../services/api';

/* parametros para paginação */
var page = '1';


export class Index extends Component {
  /* define o estado inicial para usuários */

  state = {
    tvshows: [],
  };
  /* cria o componentDidMount para adicionar os usuários da API ao estado dos usuários */
  componentDidMount() {
    api.get('/tvshows', {params: {page}})
    .then(response => {
      this.setState( { tvshows: response.data } )
            // console.log(response.data.docs);
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
              <NavLink className={'btn btn-success text-white pull-right'} to={'/tvshows/novo/'}>
                  Adicionar um novo programa
              </NavLink>
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
