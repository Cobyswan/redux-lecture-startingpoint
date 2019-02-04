import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleNameChange(val){
    this.setState({name: val})
  }

  render() {
    return (
      <div>
        <h1>Login!</h1>
        {/* save the onchange value to localstate and the submitted will value will get passed back to the parent */}
        <input onChange={(e) => this.handleNameChange(e.target.value)}/>
        <button onClick={(e) => this.props.login(this.state.name)}>Submit</button>
      </div>
    );
  }
}
