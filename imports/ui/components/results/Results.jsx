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
      selectedMercado: '',
      selectedBestBuy: '',
    }


  }
  setMercado(i){
    this.setState({
      selectedMercado: i,
    })
  }
  setBest(i){
    this.setState({
      selectedBestBuy: i,
    })
  }
  componentDidUpdate(){
    console.log('didupdate');
    console.log('if');
    Meteor.call("search", {query: this.props.query});
    Meteor.call("searchBby",{query:this.props.query});

  }
  render(){
    return(
      <div className="row">
        Seleccionados
        {this.state.selectedBestBuy}
        {this.state.selectedMercado}

        <div className="col-md-offset-1 col-md-5">
          <MercadoLibre setSelected={this.setMercado.bind(this)} />
        </div>
        <div className="col-md-5">
          <BestBuy setSelected={this.setBest.bind(this)} />
        </div>
      </div>
    )
  }
}
export default Results;
