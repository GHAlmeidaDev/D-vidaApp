import React from 'react';
import { Button, Form, FormGroup, Label, Input, Alert, Col, Row } from 'reactstrap';
import axios from "axios";

class EditDivida extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      idUsuario: '',
      motivo: '',
      valor: '',
      users: [],
      dividas: [],
      updateText: '',
    }
    this.updateChange = this.updateChange.bind(this);
  }
  

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit = event =>{
    event.preventDefault();
    const url ='https://provadev.xlab.digital/api/v1/divida/?uuid=f03c8b8f-c7e1-407f-9d9b-85422ba45452'

    const data = {idUsuario:this.state.idUsuario, motivo:this.state.motivo, valor:this.state.valor }

    fetch(url, { method:'PUT', // or ‘POST’
      body: JSON.stringify(data), //‎ dados podem ser‎ `string` or {object}!
      headers:{ 'Content-Type': 'application/json' } })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('Dívida Cadastrada', response) );
         
        
        this.props.toggle()
          

}
  
submitFormEdit = e => {

    const url ='https://provadev.xlab.digital/api/v1/divida/?uuid=f03c8b8f-c7e1-407f-9d9b-85422ba45452'
    const data = {idUsuario:this.state.idUsuario, motivo:this.state.motivo, valor:this.state.valor }

    fetch(url, { method: '‘PUT’', // or ‘PUT’
      body: JSON.stringify(data), //‎ dados podem ser‎ `string` or {object}!
      headers:{ 'Content-Type': 'application/json' } })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('Dívida Atualizada', response) );      
        this.props.toggle()
}
     
  render() {
    
    return (
        <Row>
        <Col
            style={{paddingBottom:"2rem"}}
        >
            
    
        </Col>
        </Row>
       );
  }
}

export default EditDivida