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
      cel: null,
      kel: null,
      fah: null,

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

GetResult(){

 
  return(
    <div>
      <p>{this.state.cel} °C,</p>
      <p> {this.state.kel}°K, </p>
      <p>{this.state.fah}  °F</p>
     </div>
  )
}

  handleClick() {
    
    this.setState({
      result: `${this.state.deg} ${this.state.sys}`
    })

    if (this.state.sys === "°C" && this.state.deg !== null) {
      this.setState({
        cel: Number(this.state.deg).toFixed(1),
        fah: Number((this.state.deg * 1.8) + 32).toFixed(1),
        kel: Number(1 * this.state.deg + 273.15).toFixed(1)
      })
      
    };
    
    if (this.state.sys === "°K" && this.state.deg !== null) {
      this.setState({
        kel: Number(this.state.deg).toFixed(1),
        cel: Number(this.state.deg - 273.15).toFixed(1),
        fah: Number((this.state.deg - 273.15) * 1.8 + 32).toFixed(1),
        
      })
     
    };
    if  (this.state.sys === "°F" && this.state.deg !== null) {
      this.setState({
        fah: Number(this.state.deg).toFixed(1),
        kel: Number((this.state.deg - 32) * 5 / 9 + 273.15).toFixed(1),
        cel: Number((this.state.deg - 32) * 5 / 9).toFixed(1),
        
      })
    
    };
     console.log(this.state.kel, this.state.cel, this.state.fah)
    return (
      <div>
        <p>{this.state.cel} °C,</p>
        <p> {this.state.kel}°K, </p>
        <p>{this.state.fah}  °F</p>
      </div>
    )
   
  }

  render() {

    return (
      <div>
        <Input
          result={this.state.result}
          deg={this.state.deg}
          sys={this.state.sys}
          measSys={this.state.measSys}

          onClick={this.handleClick}
          onChangeDeg={this.handleDegChange}
          onChangeSys={this.handleSysChange} />

    <div> {this.GetResult()}</div>
      </div>
    );
  }
}

export default Converter;