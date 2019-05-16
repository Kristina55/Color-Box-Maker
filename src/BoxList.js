import React, { Component } from "react";
import Box from "./Box"
import NewBoxForm from './NewBoxForm'
import uuid from 'uuid/v4';


class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes : []
    }
    this.addBox = this.addBox.bind(this)
  }

 
  addBox(box) {
    let newBox = {...box, id : uuid()}
    this.setState(state => ({
      boxes : [...state.boxes, newBox]
    })) 
  }
 

  render() {
    const boxComponents = this.state.boxes.map(box => (
      <Box key={box.id} 
      backgroundColor={box.backgroundColor} 
      width={box.width} 
      height={box.height}/>
    ))
    return (
      <div>
        {boxComponents}
        <div>
          <NewBoxForm addBox = {this.addBox}/>
        </div>
      </div>
    )
  }
}


export default BoxList;



