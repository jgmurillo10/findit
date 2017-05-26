import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from "meteor/meteor";
import { createContainer } from 'meteor/react-meteor-data';
import { ResultsMercado } from  '/imports/api/results.js';
import Item from './Item';
import { Session } from 'meteor/session';

class MercadoLibre extends Component {
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
        <div>
          {this.props.query?
            <h2>Mercado Libre Results</h2>
          :
          ''
        }

          {this.props.results.map(result => {
            return <Item key={result._id} selected={this.props.selected}  onClick={ this.handleClick } isActive={ this.state.activeIndex? this.state.activeIndex === result._id:false } setSelected={this.props.setSelected.bind(this)} result={result}/>
          })}
{/*
          {this.props&&this.props.results?
            <div>
              <h2>Mercado Libre</h2>
              <div className="row">
              {this.props.results.map(result => {
                return <Item key={result._id} selected={this.props.selected}  onClick={ this.handleClick } isActive={ this.state.activeIndex? this.state.activeIndex === result._id:false } setSelected={this.props.setSelected.bind(this)} result={result}/>
              })}
              </div>
            </div>:
          <span></span>
        } */}
        </div>
      </div>
    )
  }
}
export default AppContainer = createContainer(() => {
    let results = ResultsMercado.find({userId: Session.get('userId')});
    return {results: results.fetch()};
}, MercadoLibre);
