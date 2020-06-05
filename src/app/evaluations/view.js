import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

const evaluation_id = '5ed41f24010e54bf0d25b168';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWM4MDFlYjZiMWQyNjI1MGNjMzA2MDQiLCJpYXQiOjE1OTAxNjU5OTUsImV4cCI6MTU5Mjc1Nzk5NX0.5osVYSOqGRvY-5HKRl78loGkWDdncNuQ6nMWi9V4Gs4';

/* parâmetros da API */
const instance = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 1000,
  headers: {'Authorization': 'Bearer '+token}
});

export class view extends Component {
    /* Inicia a construção dos estados, funções de alteração de campos */ 
     /* define o estado inicial para usuários */

  state = {
    tvshows: [],
    tvShowInfo: [], 
    average: [],
    values: []
  };
  /* cria o componentDidMount para adicionar os usuários da API ao estado dos usuários */
  componentDidMount() {
    instance.get('/evaluations/' + evaluation_id + '/list')
    .then(response => {
      this.setState( { tvshows: response.data } )
      this.setState( { values: response.data.values } )
      console.log(response.data.values);

            // console.log(response.data);
    });   
    instance.get('/evaluations/' + evaluation_id + '/average')
    .then(response => {
      this.setState( { average: response.data } )
           //console.log(response.data);
    });  
    instance.get('/tvshows/' + evaluation_id)
    .then(response => {
      this.setState( { tvShowInfo: response.data } )
            //console.log(response.data.name);
    });     
  }nfo
  render() {
    return (
      <div>
         <div className="row">
        <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-header bg-white">
              <h4 className="card-title">{ this.state.tvShowInfo.name }</h4>
              </div>
              <div className="card-body">
                <div class="row">
    <div class="col-4">
    <iframe width='500px' height='294px' src='https://player.vimeo.com/video/421192194?'></iframe> <br></br>
    Exibido na emissora { this.state.tvShowInfo.broadcaster }, em { this.state.tvShowInfo.date } às { this.state.tvShowInfo.hour }
    </div>
    <div class="col-4">
<h5>Avaliação geral</h5>
<p>Baseando em {this.state.average.total} avaliações registradas no aplicativo</p>
<a class="badge badge-primary text-white">{this.state.average.average}/<strong>5</strong></a>
    </div>
    <div class="col-12">
    <div className="card">
              <div className="card-body">
                <h4 className="card-title">Avaliações</h4>
                {this.state.tvshows && this.state.tvshows.map(tvshow => 
                <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                   <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Qualidade </th>
                        <th> Satisfação </th>
                        <th> Avaliação técnica </th>
                        <th> Média geral do usuário </th>
                        <th> Comentário positivo </th>
                        <th> Comentário negativo </th>

                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.tvshows && this.state.tvshows.map(tvshow => 
                      <tr>      
                        <td> {tvshow.name} </td>
                        <td> {tvshow.broadcaster} </td>
                        <td> {tvshow.date} - {tvshow.hour} </td>         
                        <td> <a className="btn btn-primary text-white"> Visualizar avaliações</a></td>           
                      </tr>
                        )}
                  </tbody>
                  </table>
            
</div>
                )}
                  </div>
                  </div>
    </div>

    <div class="col-12">
    <div className="card">
              <div className="card-body">
                <h4 className="card-title">Comentários</h4>
                {this.state.tvshows && this.state.tvshows.map(tvshow => 
                <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                   <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Autor </th>
                        <th> Comentário </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.tvshows && this.state.tvshows.map(tvshow => 
                      <tr>      
                        <td> {tvshow.name} </td>
                        <td> {tvshow.broadcaster} </td>       
                      </tr>
                        )}
                  </tbody>
                  </table>
            
</div>
                )}
                  </div>
                  </div>
    </div>

    </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default view
