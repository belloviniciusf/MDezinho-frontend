import React, { Component } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { ProgressBar, Dropdown } from 'react-bootstrap';

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Dashboard extends Component {

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
                    <p className="mb-0 text-right text-dark">Respostas recebidas</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">3455</h3>
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
                    <p className="mb-0 text-right text-dark">Filmes, Séries e outros conteúdos adicionados</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">5693</h3>
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
                <h4 className="card-title">Filmes</h4>
                <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                  <h3>Melhores filmes com base nas avaliações </h3>
                  <small>Baseando em 21 avaliações</small>
                </div>
                <div className="event border-bottom py-3">
                  <p className="mb-2 font-weight-medium">Cidade de Deus</p>
                  <div className="d-flex align-items-center">
                    <div className="badge badge-warning"><i className="mdi mdi-star"></i> 3.7/<strong>5</strong></div>
                    <small className="text-muted ml-2">Nas favelas do Rio de Janeiro dos anos 1970, dois rapazes seguem caminhos diferentes. Buscapé é um fotógrafo que registra o cotidiano violento do lugar, e Zé Pequeno é um ambicioso traficante que usa as fotos de Buscapé para provar como é durão.</small>
                  </div>
                </div>
                <div className="event py-3 border-bottom">
                  <p className="mb-2 font-weight-medium">Sociedade dos Poetas Mortos</p>
                  <div className="d-flex  align-items-center">
                  <div className="badge badge-warning"><i className="mdi mdi-star"></i> 3.4/<strong>5</strong></div>
                    <small className="text-muted ml-2">O novo professor de Inglês John Keating é introduzido a uma escola preparatória de meninos que é conhecida por suas antigas tradições e alto padrão. Ele usa métodos pouco ortodoxos para atingir seus alunos, que enfrentam enormes pressões de seus pais e da escola. </small>
                  </div>
                </div>
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
                        <p className="highlight-text text-white"> 17 novas avaliações </p>
                        <p className="text-white"> nesta semana </p>
                        <div className="badge badge-pill"><i className="mdi mdi-plus"></i>  18% </div>
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
              <div className="col-xl-12 col-lg-6 col-sm-6 stretch-card">
                <div className="card card-revenue-table mt-4 mt-sm-0 mt-xl-4">
                  <div className="card-body">
                    <div className="revenue-item d-flex">
                      <div className="revenue-desc">
                        <h6>Média de avaliação</h6>
                        <p className="font-weight-light">Média aritmética de todas as avaliações</p>
                      </div>
                      <div className="revenue-amount">
                        <p className="text-secondary"> 3.9 / 5 </p>
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
                        <th> # </th>
                        <th> Nome </th>
                        <th> Tipo </th>
                        <th> Email </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-medium"> 1 </td>
                        <td> Vinicius Belló </td>
                        <td>
                          Ouvinte
                        </td>
                        <td> vinicius.bello@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 2 </td>
                        <td> Maycon Felipe Mota </td>
                        <td>
                          Surdo
                        </td>
                        <td> maycon.mota@agenciainove.com </td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 3 </td>
                        <td> Ricardo Silva </td>
                        <td>
                          DA
                        </td>
                        <td> ricardo.silva@gmail.com </td>
                      </tr>
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