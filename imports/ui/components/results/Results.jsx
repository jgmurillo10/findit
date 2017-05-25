import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
import BestBuy from './bestbuy/BestBuy';
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
        <BestBuy/>

      </div>
    )
  }
}
export default Results;
