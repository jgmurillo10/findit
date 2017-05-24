import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router';
import { browserHistory, Link } from 'react-router';
export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      logged: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        this.setState({
          error: err.reason,
        });
      } else {
        this.setState({
          logged: true,
        })
      }
    });
  }
  render () {
    if (this.state.logged) {
      browserHistory.push('/');
    }
    const error = this.state.error;
    return(
      <div>
        <div className="login">

      		<div className="main-agileits">
      				<div className="form-w3agile">
      					<h3>Login</h3>
                { error.length > 0 ? <div className="alert alert-danger fade in">{error}</div> :''}
      					<form onSubmit={this.handleSubmit}>
      						<div className="key">
      							<i className="fa fa-envelope" aria-hidden="true"></i>
      							<input id="login-email" type="text" placeholder="Email"  required=""/>
      							<div className="clearfix"></div>
      						</div>
      						<div className="key">
      							<i className="fa fa-lock" aria-hidden="true"></i>
      							<input id="login-password" type="password" placeholder="Password"  required=""/>
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
