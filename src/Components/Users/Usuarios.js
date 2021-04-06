import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from "axios";

class Usuarios extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idUsuario: '',
            id: '',
            result: [],
            motivo: '',
            valor : '',
          }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({id: event.target.value});
    }
      
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.id);
        event.preventDefault();
      }

    componentDidMount(){

    
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res);
      this.setState({
        users: res.data
        
      });
    });
        const divida = '?uuid=f03c8b8f-c7e1-407f-9d9b-85422ba45452'
        axios.get(`https://provadev.xlab.digital/api/v1/divida/${divida}`)
        .then(res => {
            console.log(res);
            this.setState({
                result: res.data.result,             
            });
            console.log(res)
          })
          .catch(error => {
              console.log(error)
          })
      }

      render() {
        const { idUsuario } = this.state;
         return(
           
            <Form onSubmit={this.handleSubmit}>
       
        <p 
          style=
          {{
            paddingTop: "0.5rem", 
            fontFamily:"Roboto Mono"
          }}>
            Clientes
        </p>

        <select 
          style={{fontFamily:"Roboto Mono"}} 
          type="number" name="id" id="id" 
          onChange={this.handleChange} 
          value={this.state.id} 
          className="custom-select" 
        >
        
        {this.state.users && this.state.users.map((users, id) => {
          return (
            <option 
              style={{fontFamily:"Roboto Mono"}} 
              key={id} 
              value={users.id}
            >
              {" "}
              {users.name}

            </option>     
          );
        })}
      </select>
      <div 
        style={{paddingTop: '1rem'}}>
        <Button 
        style={{fontFamily:"Roboto Mono"}}>
          Buscar
        </Button>
      </div>

      {this.state.id}
      </Form>
         )
       }
    }
export default Usuarios