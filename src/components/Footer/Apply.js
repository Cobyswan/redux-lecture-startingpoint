import React, { Component } from "react";
import UserName from '../Header/UserName'

export default class Apply extends Component {
  render() {
    return (
      <div>
        {this.props.user ? `Special Savings Promo for:`: null}
        {/* UserName component from the header folder */}
        <UserName user={this.props.user} />
      </div>
    );
  }
}
