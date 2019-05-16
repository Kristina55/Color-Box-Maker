import React, { Component } from "react";


class Box extends Component {
  render(){
    return (
    <div className="Box" id={this.props.id} 
    style={{backgroundColor:this.props.backgroundColor, 
    width:`${this.props.width}px`, 
    height:`${this.props.height}px` 
    }}>
    </div>
    )
  }
}

export default Box;