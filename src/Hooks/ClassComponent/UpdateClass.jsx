import React, { Component } from 'react'

export default class UpdateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          company: "webskitters",
          address: "salt lake kolkata",
          sine: "2010",
        };
      }

      change = () => {
        this.setState({sine: "now 2023"});
      }
      add=()=>{
         this.setState({address:"barasat"})
      }

  render() {
    return (
      <>
       <div>
        <h1>name company {this.state.company}</h1>
        <p>
          Address 
          { this.state.address}
          from {this.state.sine}.
        </p>
        <button
          type="button"
          onClick={this.change}
        >Update year</button>

       <button
          type="button"
          onClick={this.add}
        >Update address</button>
      </div>
        
      </>
    )
  }
}