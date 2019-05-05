import React, { Component } from 'react';
import './Converter.css';
import '../../App.css';
import Input from "./Input";

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deg: "",  
      sys: "",
      result: "",
      measSys: ["°C", "°K", "°F"],
    }
    this.handleDegChange = this.handleDegChange.bind(this);
    this.handleSysChange = this.handleSysChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDegChange(e) {
    this.setState({ deg: e.target.value });
  }
  handleSysChange(e) {
    this.setState({ sys: e.target.value });
  }


  handleClick() {

    console.log('Text field deg is: ', this.state.deg, this.state.sys )

  }

  render() {

    return (
      <div>
        <Input result={this.state.result} 
          deg={this.state.deg} 
          sys={this.state.sys} 
          measSys={this.state.measSys} 
          onClick={this.handleClick} 
          onChangeDeg={this.handleDegChange} 
          onChangeSys={this.handleSysChange} />
      </div>
    );
  }
}

export default Converter;