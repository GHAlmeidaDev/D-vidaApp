import React from 'react';
import { Button, Container, Table, Modal, ModalBody, Form, ModalHeader } from 'reactstrap';
import FormEdit from '../FormEdit/FormEdit'
import axios from "axios";

class Usuarios extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idUsuario: '',
            motivo: "",
            valor : '',
            modal: false,
            result: '',
            _id: '',
            hidhov: false
          }
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }
    

    componentDidMount(){
        const APP_UUID  = process.env.REACT_APP_UUID;
        const url =`https://provadev.xlab.digital/api/v1/divida/?uuid=${APP_UUID}`
        axios.get(url)
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
    
      modal = () => {
        this.setState({hidhov:true})
      }

      toggle = () => {
        this.setState(prevState => ({
          hidhov: !prevState.hidhov
        }))
      }

      delete(_id) 
      {
        const APP_UUID  = process.env.REACT_APP_UUID;
        const url =`https://provadev.xlab.digital/api/v1/divida/${_id}?uuid=${APP_UUID}`
        fetch(url,
        {
          method: "DELETE",
        })
        .then((result)=> {
          result.json()
          .then(response => window.location.reload(response) );
        })
        
      }''
    
      
      render() {
        const closeBtn = <button  style={{fontFamily:"Roboto Mono"}} className="close" color="secondary" onClick={this.toggle}>&times;</button>
        const { result } = this.state;
        
         if(result) {
           return(
        <Container 
          style={{fontFamily:"Roboto Mono", paddingTop:'4rem'}} 
          type="number" name="id" id="id" 
          value={this.state.id}  
        >
        
        { this.state.result.map((users, i) => {
          return (
           <Container>
                <Table>
                <tr  style={{height:'4rem'}} key={i}>
                <th style={{width:"30%", textAlign:'start'}} scope="row">{users.idUsuario}</th>

                <td style={{width:"30%", textAlign:'justify'}}>{users.motivo}</td>

                <td style={{width:"30%", textAlign:'center'}} >R${users.valor}</td>
                
              
                <td>
                  <div >
                    <Button
                      color="warning"
                      onClick={this.modal}
                      users={users}
                      updateState={this.props.updateState}
                    >
                      Editar
                    </Button>
                    
                    {' '}
                    <Button  color="danger" onClick={() => this.delete(users._id)}>Excluir</Button>
                  </div>
                </td>
                </tr>
                </Table>
                <Modal
                  isOpen={this.state.hidhov}
                >
                   <ModalHeader toggle={this.toggle} >Atualizar</ModalHeader>
                      <ModalBody>
                        <FormEdit
                          
                          updateState={this.props.updateState}
                          toggle={this.toggle}
                          divida={this.props.divida} 
                        />
                      
              
                      </ModalBody>

                </Modal>
            
           </Container>
           
           
          );
        })} 
      </Container>
           ) 
          
       }else {
         return(<Modal  isOpen={this.showModal}  className={this.props.className}><ModalBody><div>Loading...</div></ModalBody></Modal>)
       }
    }
   
  }

  
export default Usuarios