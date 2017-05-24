import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router';
import { browserHistory, Link } from 'react-router';
export default class SignupPage extends Component {
  render () {
    return(
      <div>
        <div className="login">
      		<div className="main-agileits">
      				<div className="form-w3agile form1">
      					<h3>Register</h3>
      					<form action="#" method="post">
      						<div className="key">
      							<i className="fa fa-user" aria-hidden="true"></i>
      							<input  type="text" value="Username" name="Username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" required=""/>
      							<div className="clearfix"></div>
      						</div>
      						<div className="key">
      							<i className="fa fa-envelope" aria-hidden="true"></i>
      							<input  type="text" value="Email" name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
      							<div className="clearfix"></div>
      						</div>
      						<div className="key">
      							<i className="fa fa-lock" aria-hidden="true"></i>
      							<input  type="password" value="Password" name="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required=""/>
      							<div className="clearfix"></div>
      						</div>
      						<div className="key">
      							<i className="fa fa-lock" aria-hidden="true"></i>
      							<input  type="password" value="Confirm Password" name="Confirm Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirm Password';}" required=""/>
      							<div className="clearfix"></div>
      						</div>
      						<input type="submit" value="Submit"/>
      					</form>
      				</div>

      			</div>
      		</div>
      </div>
    )
  }
}
