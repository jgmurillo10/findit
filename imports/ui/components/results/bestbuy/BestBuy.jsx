import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from  '/imports/api/bbyProducts.js';
class BestBuy extends Component {

  // search()
  // {
  //   console.log("holi");
  //   Meteor.call('bby.getprd');
  // }
  render(){
    return(
      <div>
        BestBuy
        <div className="row">
          {this.props.products.map(product => {
            console.log(product);
          })}
        </div>
      </div>
    )
  }
}
export default AppContainer = createContainer(() => {
    let products = Products.find({});
    return {products: products.fetch()};
}, BestBuy);
