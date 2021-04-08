import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from "axios";

class FormEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      idUsuario: '',
      motivo: '',
      valor: '',
      users: [],
    }
  
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

 


  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.result){
      const { motivo, valor } = this.props.result
      this.setState({ motivo, valor })
    }
  }
  
  render() {
   
    
    return (
      <Form onSubmit={this.att}>
       

        <FormGroup>
          <Label style={{fontFamily:"Roboto Mono", paddingTop:"1rem"}} for="motivo">Motivo</Label>
          <Input style={{fontFamily:"Roboto Mono"}} placeholder={"Ex: Aluguel"} type="text" name="motivo" id="motivo" onChange={this.onChange} value={this.state.motivo}  />
        </FormGroup>
        <FormGroup>
          <Label style={{fontFamily:"Roboto Mono", paddingTop:"0.5rem"}}  for="valor">Valor</Label>
          <Input style={{fontFamily:"Roboto Mono"}}  placeholder={"Ex: R$300,00"} type="number" name="valor" id="valor" onChange={this.onChange} value={this.state.valor}  />
        </FormGroup>
        
<Button  disabled={ !this.state.motivo ||  !this.state.valor }>Salvar</Button>
      </Form>
    );
  }
}

export default FormEdit