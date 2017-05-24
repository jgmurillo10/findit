import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router';
import { browserHistory, Link } from 'react-router';
export default class SignupPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      error: '',
      errorPassword: '',
      errorMail: '',
      logged: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.createUser = this.createUser.bind(this);
  }
  onChange(){
    let password = document.getElementById("signup-password").value;
    let email = document.getElementById("signup-email").value;
    let passwordconfirmed = document.getElementById("signup-password-confirmed").value;
    if (!(password === passwordconfirmed)){
        this.setState({errorPassword: "Passwords must match"});
    }else{
        this.setState({errorPassword: ""});
    }
    if(!(email.includes("@") && email.includes("."))){
      this.setState({errorMail: "Must be a valid mail"});
    }else{
      this.setState({errorMail: ""});
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let passwordconfirmed = document.getElementById("signup-password-confirmed").value;
    if (this.state.errorPassword.length>0|| this.state.errorMail.length>0 ){
      this.setState({error: 'Error, all the field must be correct'});
    }
    else{
      this.createUser(email, name, password);
    }

  }
  createUser(email, name, password){
    console.log('createuser');
    Accounts.createUser({email: email, username: name, password: password}, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        this.setState({
          logged: true,
        });
        }
    });
  }
  render () {
    if (this.state.logged) {
      browserHistory.push('/');
    }
    const error = this.state.error;
    const errorPassword = this.state.errorPassword;
    const errorMail = this.state.errorMail;
    return(
      <div>
        <div className="banner-top">
        	<div className="container">
        		<h3 >Register</h3>
        		<h4><a href="index.html">Home</a><label>/</label>Register</h4>
        		<div className="clearfix"> </div>
        	</div>
        </div>
        <div className="login">
      		<div className="main-agileits">
      				<div className="form-w3agile form1">
      					<h3>Register</h3>
                { error.length > 0 ? <div className="alert alert-danger fade in">{error}</div> :''}
      					<form onSubmit={this.handleSubmit} className="form">
      						<div className="key">
      							<i className="fa fa-user" aria-hidden="true"></i>
      							<input  type="text" id="signup-name" placeholder="Name" required=""/>
      							<div className="clearfix"></div>
      						</div>
      						<div className="key">
      							<i className="fa fa-envelope" aria-hidden="true"></i>
      							<input  type="text" id="signup-email" onChange={this.onChange.bind(this)}   placeholder="Email" required=""/>
      							<div className="clearfix"></div>
      						</div>
                  { errorMail.length > 0 ? <div className="alert alert-danger fade in">{errorMail}</div> :''}
      						<div className="key">
      							<i className="fa fa-lock" aria-hidden="true"></i>
      							<input id="signup-password"  onChange={this.onChange.bind(this)}   type="password" placeholder="Password"  name="Password" required=""/>
      							<div className="clearfix"></div>
      						</div>
      						<div className="key">
      							<i className="fa fa-lock" aria-hidden="true"></i>
      							<input id="signup-password-confirmed" onChange={this.onChange.bind(this)}  type="password" placeholder="Confirm Password" required=""/>
      							<div className="clearfix"></div>
      						</div>
                  { errorPassword.length > 0 ? <div className="alert alert-danger fade in">{errorPassword}</div> :''}
      						<input type="submit" value="Submit"/>
      					</form>
      				</div>

      			</div>
      		</div>
      </div>
    )
  }
}
