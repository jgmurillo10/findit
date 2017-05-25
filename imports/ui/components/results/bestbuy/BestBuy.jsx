import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";

class BestBuy extends Component {

  search()
  {
    console.log("holi");
    Meteor.call('bby.getprd');
  }
  render(){
    return(
      <div>
        BestBuy
        {this.search()}
      </div>
    )
  }
}
export default BestBuy;
