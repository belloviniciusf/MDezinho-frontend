import React, { Component } from 'react'
import api from '../../services/api';

var page = '1';

export class Index extends Component {
  state = {
    comments: [],
  };
  componentDidMount() {
    api.get('/comments', {params: {
      page
    } })
    .then(response => {
      this.setState( { comments: response.data } )    });    
  }

  render() {
    return (
      <div>
         <div className="row">
        <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-header bg-white">
              <h4 className="card-title">Comentários</h4>              
              </div>
              <ul>
              </ul>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Usuário </th>
                        <th> Comentário </th>                                               
                      </tr>
                    </thead>
                    <tbody>{
      (this.state.comments || []).map(comment => 
    <tr key={comment._id}>
      
                        <td> {comment.userId.name} </td>
                        <td> {comment.text} </td>                                                
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
