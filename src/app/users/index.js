import React, { Component, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import api from '../../services/api';
import {toast} from 'react-toastify';

/* parametros para paginação */
var page = '1';

export class Index extends Component {
  /* define o estado inicial para usuários */
  state = {
    usuarios: [],
  };
  /* cria o componentDidMount para adicionar os usuários da API ao estado dos usuários */
  componentDidMount() {
    api.get('/users', {params: {
      page
    } })
    .then(response => {
      this.setState( { usuarios: response.data.docs } )    });    
  }

  async blockUser(item){
    try {
      const {data} = await api.put(`/users/${item._id}`, {blocked: !item.blocked});          

      toast.success(`Usuário ${data.blocked? 'bloqueado': 'desbloqueado'}  com sucesso`);               
      
      this.setState(state => {
        return state.usuarios.map((u) => {
          if(u._id === data._id) {
            u.blocked = data.blocked;
          }
        })
      })
    } catch(err) {      
      toast.error('Ops! Houve um erro ao tentar bloquear o usuário, tente novamente.');
    }    
  }

  render() {
    return (
      <div>
         <div className="row">
        <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-header bg-white">
              <h4 className="card-title">Últimos usuários registrados</h4>
              <NavLink className={'btn btn-success text-white pull-right'} to={'/usuarios/novo/'}>
                  Adicionar um novo usuário
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
                        <th> Tipo </th>
                        <th> Email </th>
                        <th> Status </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{
      (this.state.usuarios || []).map(user => 
    <tr key={user._id}>
      
                        <td> {user.name} </td>
                        <td> {user.type} </td>
                        <td> {user.email} </td>
                        <td> {user.blocked? 'Bloqueado': 'Ativo'}</td>
                        <td> <a className={`btn ${user.blocked? 'btn-primary': 'btn-danger'} text-white`} href="#" 
                        onClick={() => { if (window.confirm(`Você tem certeza que quer ${user.blocked? 'desbloquear': 'bloquear'} esse usuário?`)) this.blockUser(user) } }> 
                        {user.blocked? 'Desbloquear': 'Bloquear'}</a></td>           
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
