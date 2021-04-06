import React from 'react';
import { Button, Form, FormGroup, Label, Col, Container, Table } from 'reactstrap';
import FormAddEdit from '../FormEdit/FormEdit';
import axios from "axios";

class Dividas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idUsuario: '',
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
           

        <Container 
          style={{fontFamily:"Roboto Mono"}} 
          type="number" name="id" id="id" 
          onChange={this.handleChange} 
          value={this.state.id}  
        >
        
        {this.state.result && this.state.result.map((users, id) => {
          return (
            <Table>
            <tr key={users.id}>
              <th style={{width:"30%", textAlign:'start'}} scope="row">{users.idUsuario}</th>
              <td style={{width:"30%", textAlign:'justify'}}>{users.motivo}</td>
              <td style={{width:"30%", textAlign:'center'}} >R${users.valor}</td>
              <td></td>
              <td></td>
             
              <td>
                <div >
                  <FormAddEdit />
                  {' '}
                  
                </div>
          </td>
          </tr>
    </Table>
           
          );
        })}
      </Container>
     
         )
       }
    }
export default Dividas