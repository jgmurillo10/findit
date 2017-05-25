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
      selected: false,
    }


  }
  setMercado(i){
    this.setState({
      selectedMercado: i,
      selected: true,
    })
  }
  setBest(i){
    this.setState({
      selectedBestBuy: i,
      selected: true,
    })
  }

  componentWillUpdate(nextProps){
    console.log('will update', nextProps);
    if(!(this.props.query === nextProps.query)){
      if(!this.state.selected){
        Meteor.call("search", {query: nextProps.query});
        Meteor.call("searchBby",{query:nextProps.query});
      }
    }
  }
  render(){
    return(
      <div className="row">
        Seleccionados
        {this.state.selectedBestBuy}
        {this.state.selectedMercado}

        <div className="col-md-offset-1 col-md-5 col-xs-6">
          <MercadoLibre setSelected={this.setMercado.bind(this)} />
        </div>
        <div className="col-md-5 col-xs-6">
          <BestBuy setSelected={this.setBest.bind(this)} />
        </div>
      </div>
    )
  }
}
export default Results;
