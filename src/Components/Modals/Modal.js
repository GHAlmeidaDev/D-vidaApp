import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddDivida from '../Forms/FormAddEdit'


class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  
  render() {
      const closeBtn = <button  style={{fontFamily:"Roboto Mono"}} className="close" color="secondary" onClick={this.toggle}>&times;</button>

      const label = this.props.buttonLabel

      let button = ''
      let title = ''

      
        button = <Button
                  color="secondary"
                  onClick={this.toggle}
                  style={{float: "left", marginRight:"10px", fontFamily:'Roboto Mono'}}>{label}
                </Button>
                
    


      return (
      <div>
        {button}
        <Modal  isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <ModalHeader toggle={this.toggle}  close={closeBtn}>{title}</ModalHeader>
            <ModalBody>
              <AddDivida
                addItemToState={this.props.addItemToState}
                updateState={this.props.updateState}
                toggle={this.toggle}
                divida={this.props.divida} 
              />
            
    
            </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm