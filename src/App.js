import React, { Component } from 'react'
import { Container, Row, Col, Media, Navbar } from 'reactstrap'
import ModalForm from './Components/Modals/Modal'
import Logo from './Components/assets/salary.png'
import axios from 'axios';
import Usuario from './Components/Users/Usuarios';
class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        dividas: []
      }
    }
  
  addItemToState = (dividas) => {
    this.setState(prevState => ({
      dividas: [...prevState.dividas, dividas]
    }))
  }

  updateState = (divida) => {
    const itemIndex = this.state.dividas.findIndex(data => data.id === divida.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.dividas.slice(0, itemIndex),
    // add the updated item to the array
    divida,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.dividas.slice(itemIndex + 1)
    ]
    this.setState({ dividas: newArray })
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
    const { users } = this.state;
    return (
      
      <Container className="App">
          <Navbar  className="navbar-dark">
        
          <Row>
             <Media  src={Logo} style={{width:"8rem"}} alt="AppDivida" />
              <h1 style={{margin: "20px 0", fontFamily:'Roboto Mono'}}>Cadastro de Dívidas</h1>
          </Row>
            
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <ModalForm   buttonLabel="Novo" addItemToState={this.addItemToState}/>
        
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