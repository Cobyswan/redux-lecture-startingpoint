import React, { Component } from "react";
import UserName from './UserName';

export default class UserSection extends Component {
  render() {
    return (
      <div className="user-section-container">
        <span>User:</span>
        {/* UserName Component */}
        <UserName user={this.props.user}/>
      </div>
    );
  }
}
