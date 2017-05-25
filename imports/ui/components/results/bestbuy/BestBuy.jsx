import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from  '/imports/api/bbyProducts.js';
import ItemBby from './ItemBby';

class BestBuy extends Component {

  render(){
    return(
      <div>
        
        <div className="row">
          {this.props.products.map(product => {
            console.log(product);
            return <ItemBby key={product._id} product={product}/>

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
