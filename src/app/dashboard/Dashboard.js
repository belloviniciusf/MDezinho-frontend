import React, { Component } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { ProgressBar, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import api from '../../services/api';

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

/* parametros para paginação */
var page = '1';

/* Efetua busca dos dados com a paginação */


export class Dashboard extends Component {
  state = {
    data: {},             
  };
  componentDidMount() {
    api.get('/evaluations/dashboard')
    .then(response => {
      this.setState( { data: response.data})      
    });    
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-receipt text-warning icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Avaliações recebidas</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">{this.state.data.totalEvaluations}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-poll-box text-success icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Programas cadastrados</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">{this.state.data.totalTvShows}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
   
        </div>
        <div className="row">
       <div className="col-xl-6 col-lg-6 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Avaliações</h4>
                <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                  <h3>Últimas avaliações no aplicativo </h3>
                </div>
                {
      (this.state.data.lastEvaluations || []).map(lastEvaluation => 
                <div key={lastEvaluation._id} className="event border-bottom py-3">
                  <p className="mb-2 font-weight-medium">{lastEvaluation.tvShowId.name} por {lastEvaluation.userId.name} </p>
                  {      lastEvaluation.values.map(value => 

                  <div key={value.label} className="d-flex align-items-center">
                  <small className="text-muted ml-2">{value.label}: {value.value.toFixed(1)}.  </small>
                  </div>
                  )}

                  </div>
      )}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-sm-12 grid-margin stretch-card">
            <div className="row flex-grow">
              <div className="col-xl-12 col-lg-6 col-sm-6 grid-margin-0 grid-margin-xl stretch-card">
                <div className="card card-revenue">
                  <div className="card-body">
                    <div className="d-flex w-100 h-100 justify-content-between align-items-center">
                      <div className="mr-auto">
                        <p className="highlight-text text-white"> {this.state.data.totalAnswers} respostas no total </p>                        
                      </div>
                      <div className="ml-auto mt-2 mt-xl-0">
                        <Sparklines data={[4,3,10,9,4,3,8,6,7,8]} style={{ width: "110px", height:"70px" }}>
                          <SparklinesBars barWidth = {4} style={{ fill: "#fff" }} />
                        </Sparklines>
                      </div>
                    </div>
                  </div>
                </div>
              </div>            
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Últimos usuários registrados</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Linguagem </th>
                        <th> Nome </th>
                        <th> Tipo </th>
                        <th> Email </th>
                      </tr>
                    </thead>
                    <tbody>
                    {
      (this.state.data.lastUsers || []).map(lastUser => 
                      <tr key={lastUser._id}>
                        <td className="font-weight-medium"> {lastUser.language } </td>
                        <td> {lastUser.name} </td>
                        <td>
                        {lastUser.type} 
                        </td>
                        <td>  {lastUser.email} </td>
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
    );
  }
}
const ListItem = (props) => {
  return (
      <li className={(props.isCompleted ? 'completed' : null)}>
          <div className="form-check form-check-success m-0 align-items-start">
              <label htmlFor="" className="form-check-label font-weight-medium"> 
                  <input className="checkbox" type="checkbox" 
                      checked={props.isCompleted} 
                      onChange={props.changed} 
                      /> {props.children} <i className="input-helper"></i>
              </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
      </li>
  )
};
export default Dashboard;