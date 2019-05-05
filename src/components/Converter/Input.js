import React, { Component } from 'react';


class Input extends Component {
    // constructor(props){
    // super(props);
    // this.state = {
    // };
    // }




    render() {


        return (
            <div>
                <input name="deg" className="input" value={this.deg} type="number" 
                    onChange={this.props.onChangeDeg} placeholder="temp" />
                <select className="select" value={this.sys} onChange={this.props.onChangeSys}  name="sys">
                    {this.props.measSys.map((val, index) => <option key={index} >{val}</option>)}
                </select>

                <br />
                <button onClick={this.props.onClick} className="btn btn-primary"> Get result</button>
                <p> Your result: {this.result} </p>

            </div>
        );
    }
}

export default Input;