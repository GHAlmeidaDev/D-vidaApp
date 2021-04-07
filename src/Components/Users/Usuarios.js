import React from 'react';
import { Button, Form, FormGroup, Label, Col, Container, Table, Modal, ModalBody } from 'reactstrap';
import FormAddEdit from '../FormEdit/FormEdit';
import axios from "axios";

class Dividas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idUsuario: '',
            motivo: '',
            valor : '',
            modal: false,
            result: '',
            _id: '',
            text:''
          }
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
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

    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    
   

      delete(_id) 
      {
        const divida = '?uuid=f03c8b8f-c7e1-407f-9d9b-85422ba45452'
        fetch(`https://provadev.xlab.digital/api/v1/divida/${_id}?uuid=f03c8b8f-c7e1-407f-9d9b-85422ba45452`,
        {
          method: "DELETE",
        })
        .then((result)=> {
          result.json()
          .then(response => window.location.reload(response) );
        })
        
      }''
      
      render() {
        
        const { result } = this.state;
        
         if(result) {
           return(
        <Container 
          style={{fontFamily:"Roboto Mono", paddingTop:'4rem'}} 
          type="number" name="id" id="id" 
          onChange={this.handleChange} 
          value={this.state.id}  
        >
        
        {this.state.result && this.state.result.map((users, _id) => {
          return (
            <Table>
            <tr  style={{height:'4rem'}} key={users._id}>
              <th style={{width:"30%", textAlign:'start'}} scope="row">{users.idUsuario}</th>
              <td style={{width:"30%", textAlign:'justify'}}>{users.motivo}</td>
              <td style={{width:"30%", textAlign:'center'}} >R${users.valor}</td>
              
             
              <td>
                <div >
                  <Button
                    color="warning"
                    onClick={() => this.update()}
                  >
                    Editar
                  </Button>
                  {' '}
                  <Button style={{width: '5.2rem'}} color="danger" onClick={() => this.delete(users._id)}>Excluir</Button>
                </div>
          </td>
          </tr>
    </Table>
           
          );
        })} 
      </Container>
           ) 
          
       }else {
         return(<Modal  isOpen={this.showModal}  className={this.props.className}><ModalBody><div>Loading...</div></ModalBody></Modal>)
       }
    }
  }
export default Dividas