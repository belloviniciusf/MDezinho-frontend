import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

export class add extends Component {
    
    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserType = this.onChangeUserType.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserPassword2 = this.onChangeUserPassword2.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            type: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeUserType(e) {
        this.setState({ type: e.target.value })
    } 
    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangeUserPassword2(e) {
        this.setState({ password2: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            name: this.state.name,
            type: this.state.type,
            password: this.state.password,
            email: this.state.email

        };
        axios.post('http://localhost:3333/users', userObject)
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
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Usuário adicionado com sucesso'
                  });
                  this.props.history.push("/usuarios/index");
                  this.setState({name: '', password: '',  type: '',  email: '', password: '', password2: ''})

                  console.log(res.data)
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
              <h4 className="card-title">Adicionando um novo usuário</h4>
              </div>
              <div className="card-body">
              <form className="forms-sample" onSubmit={this.onSubmit}>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Nome</label>
                    <Form.Control type="text" id="name" name="name" placeholder="Nome do usuário" size="lg" value={this.state.name} onChange={this.onChangeUserName} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <Form.Control type="email" className="form-control" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeUserEmail} />
                  </Form.Group>
                  <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Tipo de usuário</label>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="type" id="ouvinte"  value="ouvinte" onChange={this.onChangeUserType} defaultChecked /> Ouvinte 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div> 
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="type" id="surdo" value="surdo" onChange={this.onChangeUserType} /> Surdo 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="type" id="da" value="da" onChange={this.onChangeUserType} /> Deficiente Auditivo 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputConfirmPassword1">Insira uma senha</label>
                    <Form.Control type="password" className="form-control" name="password" id="senha" value={this.state.password} onChange={this.onChangeUserPassword} placeholder="Insira uma senha" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputConfirmPassword1">Confirme a senha</label>
                    <Form.Control type="password" className="form-control" name="password2" id="confirmacao_senha" value={this.state.password2} onChange={this.onChangeUserPassword2} placeholder="Confirme a senha" />
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
