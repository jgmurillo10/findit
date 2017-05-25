import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
import BestBuy from './bestbuy/BestBuy';
import { ResultsMongo } from "../../../api/results.js";
import MercadoLibre from "./mercadolibre/MercadoLibre.jsx"


class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: props.query,
    }


  }
  componentDidUpdate(){
    console.log('didupdate');
    console.log('if');
    Meteor.call("search", {query: this.props.query});


  }
  render(){
    return(
      <div className="row">
        
        <div className="col-md-6">
          <MercadoLibre/>
        </div>
        <div className="col-md-6">
          <BestBuy/>
        </div>
      </div>
    )
  }
}
export default Results;
