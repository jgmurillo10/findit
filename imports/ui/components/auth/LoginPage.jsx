import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router';
import { browserHistory, Link } from 'react-router';
export default class LoginPage extends Component {

  render () {
    return(
      <div>
        <div className="login">

      		<div className="main-agileits">
      				<div className="form-w3agile">
      					<h3>Login</h3>
      					<form action="#" method="post">
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
      						<input type="submit" value="Login"/>
      					</form>
      				</div>
      				<div className="forg">
      					<a href="#" className="forg-left">Forgot Password</a>
      					<Link to={'/signup'} role="button"  className="forg-right">Register</Link>
      				<div className="clearfix"></div>
      				</div>
      			</div>
      		</div>
      </div>
    )
  }
}
