import React, { Component } from 'react'
import api from '../../services/api';

export class Index extends Component {

  state = {
    tvshows: [],
    evaluations: [],
  };
  
  componentDidMount() {
    api.get('/evaluations/dashboard')
    .then(response => {
            this.setState( { evaluations: response.data } )           
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
