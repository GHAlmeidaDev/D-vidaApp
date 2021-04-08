import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from "axios";

class AddDivida extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      idUsuario: '',
      motivo: '',
      valor: '',
      users: [],
      dividas: [],
    }
  
  }
  
  
  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }


//FUNÇÃO METHOD POST
  handleSubmit = event =>{
    event.preventDefault();
    const APP_UUID  = process.env.REACT_APP_UUID;
    const url =`https://provadev.xlab.digital/api/v1/divida/?uuid=${APP_UUID}`

    const data = {idUsuario:this.state.idUsuario, motivo:this.state.motivo, valor:this.state.valor }

    fetch(url, { method: 'POST', // or ‘PUT’
      body: JSON.stringify(data), //‎ dados podem ser‎ `string` or {object}!
      headers:{ 'Content-Type': 'application/json' } })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => window.location.reload(response) );

        this.props.toggle()
        

}
  


  componentDidMount(){
    // if item exists, populate the state with proper data
  
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res);
      this.setState({
        users: res.data
        
      });
    });
    
  }
  
  
  render() {
   
    
    return (
      <Form  onSubmit={this.handleSubmit}>
       <h1 style={{fontFamily:"Roboto Mono"}}>Cadastro de dívidas</h1>
        <p style={{paddingTop: "0.5rem", fontFamily:"Roboto Mono"}}>Cliente</p>

        <select style={{fontFamily:"Roboto Mono"}} type="number" name="idUsuario" id="idUsuario" onChange={this.onChange} value={this.state.idUsuario} className="custom-select" >
        <option disabled={true} value="">Ex: José</option>
        {this.state.users.map((user, i) => {
          return (
            <option style={{fontFamily:"Roboto Mono"}} key={i} value={user.id}>
              {" "}
              {user.name}
            </option>
          );
        })}
      </select>

        <FormGroup>
          <Label style={{fontFamily:"Roboto Mono", paddingTop:"1rem"}} for="motivo">Motivo</Label>
          <Input style={{fontFamily:"Roboto Mono"}} placeholder={"Ex: Aluguel"} type="text" name="motivo" id="motivo" onChange={this.onChange} value={this.state.motivo}  />
        </FormGroup>
        <FormGroup>
          <Label style={{fontFamily:"Roboto Mono", paddingTop:"0.5rem"}}  for="valor">Valor</Label>
          <Input style={{fontFamily:"Roboto Mono"}}  placeholder={"Ex: R$300,00"} type="number" name="valor" id="valor" onChange={this.onChange} value={this.state.valor}  />
        </FormGroup>
        
<Button  disabled={!this.state.idUsuario || !this.state.motivo ||  !this.state.valor} style={{fontFamily:"Roboto Mono"}}>Cadastrar</Button>
      </Form>
    );
  }
}

export default AddDivida