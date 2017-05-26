import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from  '/imports/api/bbyProducts.js';
import ItemBby from './ItemBby';

class BestBuy extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: null,
    }
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick(index) {
    console.log('clic', index);
    this.setState({activeIndex: index});
  }
  render(){
    return(
      <div>
        {this.props&&this.props.products?
          <div>
            <h2>Best Buy</h2>
            <div className="row">
            {this.props.products.map(product => {
              return <ItemBby key={product._id}  onClick={ this.handleClick } isActive={ this.state.activeIndex? this.state.activeIndex === product._id:false }  setSelected={this.props.setSelected.bind(this)} product={product}/>
            })}
            </div>
          </div>:
        <span></span>
      }
      </div>
    )
  }
}
export default AppContainer = createContainer(() => {
    let products = Products.find({});
    return {products: products.fetch()};
}, BestBuy);
