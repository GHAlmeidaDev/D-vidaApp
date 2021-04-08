import React, { Component } from 'react'
import { Container, Row, Media, Navbar } from 'reactstrap'
import ModalForm from './Components/Modals/Modal'
import Logo from './Components/assets/salary.png'
import axios from 'axios';
import Usuario from './Components/Users/Usuarios';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        result: []
      }
    }
  
  addItemToState = (dividas) => {
    this.setState(prevState => ({
      dividas: [...prevState.dividas, dividas]
    }))
  }

  updateState = (users) => {
    const itemIndex = this.state.result.findIndex(data => data.id === users.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.result.slice(0, itemIndex),
    // add the updated item to the array
    users,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.result.slice(itemIndex + 1)
    ]
    this.setState({ result: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.divida.filter(divida => divida.id !== id)
    this.setState({ dividas: updatedItems })
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res);
      this.setState({
        users: res.data
        
      });
    });
    
  }
  render() {
   
    return (
     
      <Container  className="App">
          <Navbar>
        
          <Row>
         

             <Media  src={Logo} style={{width:"8rem"}} alt="AppDivida" />
              <h1 style={{margin: "20px 0", fontFamily:'Roboto Mono'}}>Dashboard de Dívidas</h1>
          </Row>
            
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingBottom:'1.5rem'}}>
            
            <div style={{paddingRight:'1rem', paddingTop:'0.3rem'}}>
                <Link to="/">
                    <AiOutlineArrowLeft size={20} style={{color:'black'}}/>
                </Link> 
            </div>
          <ModalForm  buttonLabel="Novo" addItemToState={this.addItemToState}/>
            </div>

          </Navbar>
          <div>
              <Usuario/>
          </div>
      </Container>

    )
  }
}

export default App
