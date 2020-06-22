import React, { Component } from 'react'
import api from '../../services/api';
import {toast} from 'react-toastify';

export class view extends Component {    
  state = {
    comments: [],
    evaluations: [],
    tvshows: [],
    tvShow: this.props.location.state.tvShow, 
    average: [],
    values: [],
  };
  componentDidMount() {
    api.get('/evaluations/' + this.state.tvShow._id + '/list')
    .then(response => {      
      this.setState( { evaluations: response.data } )
    });   
    api.get('/evaluations/' + this.state.tvShow._id + '/average')
    .then(response => {
      this.setState( { average: response.data } )           
    });      

    api.get(`/evaluations/${this.state.tvShow._id}/comments`)
      .then(response => {
        this.setState({ comments: response.data})
      })
  }

  async handleClick(item){
    try {
      const {data: evaluation } = await api.put(`/evaluations/${item._id}`, { active: !item.active });

      toast.success('Avaliação atualizada com sucesso!');

      this.setState(state => {
        return state.evaluations.map((u) => {          
          if(u._id === evaluation._id) {            
            u.active = evaluation.active;
          }
        })
      })
    } catch(err) {
      toast.error('Ops! Ocorre um erro ao atualizar a avaliação');
    }
  }

  render() {
    return (
      <div>
         <div className="row">
        <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-header bg-white">
              <h4 className="card-title">{ this.state.tvShow.name }</h4>
              </div>
              <div className="card-body">
                <div className="row">
              <div className="col-4">                
              <h4>Avaliação geral</h4>
              {this.state.evaluations.length > 0? 
              <p>Média geral {this.state.average.average} baseando-se em {this.state.average.total} avaliações.</p>: <p>Ainda não tivemos resposta para este programa</p>   }
              
              </div>
              <div className="col-12"  style={{paddingTop: "30px", paddingBottom: "30px"}}>
              <div className="card">
              <div className="card-body">
                <h4 className="card-title">Avaliações</h4>
                <div className="shedule-list d-xl-flex align-items-center justify-content-between mb-3">
                   <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Usuário</th>
                        <th> Notas </th>                       
                        <th> Comentário positivo </th>
                        <th> Comentário negativo </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      this.state.evaluations && this.state.evaluations.map(evaluation => 
                      <tr key={evaluation._id}>        
                        <td>{evaluation.userId.name}</td>
                        <td>
                        {evaluation.values && evaluation.values.map(value => 
                          <p key={value.value}>{value.label}: {value.value.toFixed(2)}</p>
                        )}
                        </td>                                                                        
                        <td><label style={{whiteSpace: 'normal'}}>{evaluation.positiveComment}</label></td>
                        <td><label style={{whiteSpace: 'normal'}}>{evaluation.negativeComment}</label></td>

                         <td>
                            <a className={`btn ${evaluation.active? 'btn-danger': 'btn-primary'}  text-white`} href="#" onClick={() => {this.handleClick(evaluation)}}>
                            {evaluation.active? 'Bloquear': 'Desbloquear' }
                            </a>
                          </td>           
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
             </div>
            </div>
          </div>
        </div>      
    )
  }
}

export default view
