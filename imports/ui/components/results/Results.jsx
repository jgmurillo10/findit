import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
import BestBuy from './bestbuy/BestBuy';
import { ResultsMercado } from "../../../api/results.js";
import { Products } from "../../../api/bbyProducts.js";
import MercadoLibre from "./mercadolibre/MercadoLibre.jsx";
import { Session } from 'meteor/session';
import Compare from './Compare.jsx';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: props.query,
      selectedMercado: '',
      selectedBestBuy: '',
      selected: false,
      itemA: '',
      itemB: '',
    }



  }
  setMercado(i){
    this.setState({
      selectedMercado: i,
      selected: true,
    })
    var resTem = ResultsMercado.find({_id: i});
    this.setState({
      mercado : resTem.fetch()[0]
    })
  }
  reset(){
    this.setState({
      mercado : null,
      best : null,
    })
  }
  setBest(i){

    this.setState({
      selectedBestBuy: i,
      selected: true,
    })
    var resTemp = Products.find({_id: i});
    this.setState({
      best : resTemp.fetch()[0]
    })

  }

  // componentDidUpdate(){
  //   console.log('didupdate');
  //   console.log('if');
  //   Meteor.call("search", {query: this.props.query});
  //   Meteor.call("searchBby",this.props.query, this.props.categoria);
  // }

  componentWillUpdate(nextProps){
    console.log('willupdate');
    if(!(this.props.query === nextProps.query)){
        Meteor.call("search", {query: nextProps.query});
        Meteor.call("searchBby",nextProps.query, nextProps.categoria);

    }
  }
  render(){
    return(
      <div>
      <div>

        {/*Modal Items selected*/}
        {this.state.mercado && this.state.best?  
          <Compare mercado={this.state.mercado} best={this.state.best} reset={this.reset.bind(this)}/>
        :
        ''
        }
        <div className="row">


          <div className="col-md-offset-1 col-md-5 col-xs-6">
            <MercadoLibre selected={this.state.selectedMercado} setSelected={this.setMercado.bind(this)} />
          </div>
          <div className="col-md-5 col-xs-6">
            <BestBuy setSelected={this.setBest.bind(this)} />
          </div>
        </div>

      </div>

    </div>
    )
  }
}
export default Results;
