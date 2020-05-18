import React, { Component } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { ProgressBar, Dropdown } from 'react-bootstrap';

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Dashboard extends Component {
  areaOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        gridLines: {
          color: "#F2F6F9"
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 20,
          stepSize: 5,
        }
      }],
      xAxes: [{
        gridLines: {
          color: "#F2F6F9"
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 2
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    stepsize: 1
  };
  usersDoughnutChartData = {
    datasets: [{
      data: [80, 34, 100],
      backgroundColor: [
        "#19d895",
        "#2196f3",
        "#dde4eb"
      ],
      borderColor: [
        "#19d895",
        "#2196f3",
        "#dde4eb"
      ],
    }],
    labels: [
      'Request',
      'Email',
    ]
};

usersDoughnutChartOptions = {
  cutoutPercentage: 70,
  animationEasing: "easeOutBounce",
  animateRotate: true,
  animateScale: false,
  responsive: true,
  maintainAspectRatio: true,
  showScale: true,
  legend: {
    display: false
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  }
};

amountDueBarData = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
  datasets: [{
    label: 'Profit',
    data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
    backgroundColor: [
      '#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3',
    ],
    borderColor: [
      '#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3',
    ],
    borderWidth: 2,
    fill: true
  }]
};

amountDueBarOptions = {
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },

  scales: {
    responsive: true,
    maintainAspectRatio: true,
    yAxes: [{
      display: false,
      gridLines: {
        color: 'rgba(0, 0, 0, 0.03)',
      }
    }],
    xAxes: [{
      display: false,
      barPercentage: 0.4,
      gridLines: {
        display: false,
      }
    }]
  },
  legend: {
    display: false
  }
};
toggleProBanner() {
  document.querySelector('.proBanner').classList.toggle("hide");
}
  
  render () {
    return (
      <div>
        <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>O que você está achando dessa versão? Esperamos seu feedback!</p>
              <a href="https://github.com/BootstrapDash/StarAdmin-Free-React-Admin-Template" target="_blank" rel="noopener noreferrer" className="btn ml-auto download-button">Enviar um feedback</a>
              <i className="mdi mdi-close bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
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
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
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
       <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
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
          <div className="col-xl-4 col-lg-12 col-sm-12 grid-margin stretch-card">
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
                        <th> Sobrenome </th>
                        <th> Genero </th>
                        <th> Email </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-medium"> 1 </td>
                        <td> Herman Beck </td>
                        <td>
                          Silva
                        </td>
                        <td> $ 77.99 </td>
                        <td className="text-danger"> 53.64% <i className="mdi mdi-arrow-down"></i>
                        </td>
                        <td> May 15, 2015 </td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 2 </td>
                        <td> Messsy Adam </td>
                        <td>
                          Silva
                        </td>
                        <td> $245.30 </td>
                        <td className="text-success"> 24.56% <i className="mdi mdi-arrow-up"></i>
                        </td>
                        <td> July 1, 2015 </td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 3 </td>
                        <td> John Richards </td>
                        <td>
                          Silva
                        </td>
                        <td> $138.00 </td>
                        <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i>
                        </td>
                        <td> Apr 12, 2015 </td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 4 </td>
                        <td> Peter Meggik </td>
                        <td>
                          Silva
                        </td>
                        <td> $ 77.99 </td>
                        <td className="text-danger"> 53.45% <i className="mdi mdi-arrow-down"></i>
                        </td>
                        <td> May 15, 2015 </td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 5 </td>
                        <td> Edward </td>
                        <td>
                          Silva
                        </td>
                        <td> $ 160.25 </td>
                        <td className="text-success"> 18.32% <i className="mdi mdi-arrow-up"></i>
                        </td>
                        <td> May 03, 2015 </td>
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