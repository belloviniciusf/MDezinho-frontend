import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

export class add extends Component {
    /* Inicia a construção dos estados, funções de alteração de campos */ 
    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeBroadcaster = this.onChangeBroadcaster.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            date: '',
            time: '',
            broadcaster: '',
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeDate(e) {
        this.setState({ date: e.target.value })
    } 
    onChangeTime(e) {
        this.setState({ time: e.target.value })
    }
    onChangeBroadcaster(e) {
        this.setState({ broadcaster: e.target.value })
    }

   /* função para envio ao clicar em Enviar */
   
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            broadcaster: this.state.broadcaster
        };
        
        //achar um método de adicionar o token em Localstore/Session
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWMyYTg1ODQ5Y2I2ZDcxNDliNzk3YWQiLCJpYXQiOjE1ODk4MTUzODQsImV4cCI6MTU5MjQwNzM4NH0.rDHWILSrZOzMemL8Klw9V1WpZYJq_r53clM4IXuEZ10';
        const instance = axios.create({
          baseURL: 'http://localhost:3333',
          timeout: 1000,
          headers: {'Authorization': 'Bearer '+token}
        });
        /* envia o POST */

        instance.post('/tvshows/', userObject)
            .then((res) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    onOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                                    /* Em  caso de sucesso */

                  Toast.fire({
                    icon: 'success',
                    title: 'Programa adicionado com sucesso'
                  });
                  this.props.history.push("/tvshows/todos");
                  this.setState({name: '', date: '',  time: '',  broadcaster: ''})

                  /* Em  caso de erro */

            }).catch((error) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    onOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                Toast.fire({
                    icon: 'error',
                    title: 'Ocorreu um erro, tente novamente'
                  });
                console.log(error)
            });

    }

  render() {
    return (
      <div>
         <div className="row">
        <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-header bg-white">
              <h4 className="card-title">Adicionando um novo programa de TV</h4>
              </div>
              <div className="card-body">
              <form className="forms-sample" onSubmit={this.onSubmit}>
                  <Form.Group>
                    <label htmlFor="name">Nome</label>
                    <Form.Control type="text" id="name" name="name" placeholder="Nome do programa" size="lg" value={this.state.name} onChange={this.onChangeUserName} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="broadcaster">Emissora</label>
                    <Form.Control type="text" className="form-control" name="broadcaster" id="broadcaster" placeholder="Emissora" value={this.state.broadcaster} onChange={this.onChangeBroadcaster} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="date">Data</label>
                    <Form.Control type="date" className="form-control" name="date" id="date" placeholder="Emissora" value={this.state.date} onChange={this.onChangeDate} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="time">Horário</label>
                    <Form.Control type="time" className="form-control" name="time" id="time" placeholder="Horário" value={this.state.time} onChange={this.onChangeTime} />
                  </Form.Group>

        
                  <button type="submit" className="pull-center btn btn-primary mr-2">Salvar</button>
                  <NavLink className={'btn btn-secondary'} to={'/usuarios/todos'}>
                  Cancelar
              </NavLink>           
                   </form>
            
             </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default add
