import React from 'react';
import { Button, Container, Table, Modal, ModalBody, Form, ModalHeader,FormGroup, Label, Input } from 'reactstrap';
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
            hidhov: false,
            editMode: false
          }
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
      this.update = this.update.bind(this);
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

      editDiv (_id) {
        console.log(_id)
        this.setState({
          editMode: _id
        })
      
        let editingItem = this.state.result.find(users => {
          return users._id === _id;
        })
        this.setState({
          motivo: editingItem.motivo,
          valor:editingItem.valor
        })
        this.setState({hidhov:true})
      }
      
      update (e) {
        console.log('event', e)
        e.preventDefault();
        let _id = this.state.editMode;
        const APP_UUID  = process.env.REACT_APP_UUID;
        const url =`https://provadev.xlab.digital/api/v1/divida/${_id}?uuid=${APP_UUID}`
        axios.put(url, {motivo: this.state.motivo, valor: this.state.valor})
          .then(response => {
            window.location.reload(response) ;
            
            this.setState({
              motivo: '',
              valor: ''
            })
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
    
      onChange = e => {
        this.setState({[e.target.name]: e.target.value})
      }
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
                <Table >
                <tr  style={{height:'4rem'}} key={i}>
                <th style={{width:"30%", textAlign:'start'}} scope="row">{users.idUsuario}</th>

                <td style={{width:"30%", textAlign:'justify'}}>{users.motivo}</td>

                <td style={{width:"30%", textAlign:'center'}} >R${users.valor}</td>
                
              
                <td>
                  <div >
                    <Button
                      color="warning"
                      onClick={this.editDiv.bind(this, users._id )}
                      
                      
                    >
                      Editar
                    </Button>
                    
                    {' '}
                    <Button  color="danger" onClick={() => this.delete(users._id)}>Excluir</Button>
                  </div>
                </td>
                </tr>
                </Table>
            
           </Container>
           
           
          );
        })} 
<Modal isOpen={this.state.hidhov}>
<ModalHeader toggle={this.toggle}  close={closeBtn}></ModalHeader>
<ModalBody>
<Form onSubmit={this.update}>
       <h3>Atualizar</h3>

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
     </ModalBody>
     </Modal>
     
      </Container>
           ) 
          
       }else {
         return(<Modal  isOpen={this.showModal}  className={this.props.className}><ModalBody><div>Loading...</div></ModalBody></Modal>)
       }
    }
   
  }

  
export default Usuarios