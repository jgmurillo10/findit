import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: props.query,
    }
  }
  render(){
    return(
      <div>
        {this.props.query}
      </div>
    )
  }
}
export default Results;
