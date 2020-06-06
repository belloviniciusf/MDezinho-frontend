import React, { Component, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

/* parametros para paginação */
var page = '1';
//achar um método de adicionar o token em Localstore/Session
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWM4MDFlYjZiMWQyNjI1MGNjMzA2MDQiLCJpYXQiOjE1OTAxNjU5OTUsImV4cCI6MTU5Mjc1Nzk5NX0.5osVYSOqGRvY-5HKRl78loGkWDdncNuQ6nMWi9V4Gs4';

/* parâmetros da API */
const instance = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 1000,
  headers: {'Authorization': 'Bearer '+token}
});

/* Efetua busca dos dados com a paginação */


export class Index extends Component {
  /* define o estado inicial para usuários */

  state = {
    tvshows: [],
    evaluations: [],
  };
  /* cria o componentDidMount para adicionar os usuários da API ao estado dos usuários */
  componentDidMount() {
    instance.get('/evaluations/dashboard')
    .then(response => {
            this.setState( { evaluations: response.data } )
            console.log(response.data);
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
              </div>
              <ul>
              </ul>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Usuário </th>
                        <th> Programa </th>
                        <th> Nota </th>
                      </tr>
                    </thead>
                    <tbody>
                      
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
