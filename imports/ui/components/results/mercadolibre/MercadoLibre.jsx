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
  }

  render(){
    return(
      <div>
        <div>
          {this.props.results.map(result => {
            return <Item key={result._id} selected={this.props.selected} setSelected={this.props.setSelected.bind(this)} result={result}/>
          })}
        </div>
      </div>
    )
  }
}
export default AppContainer = createContainer(() => {
    let results = ResultsMercado.find({userId: Session.get('userId')});
    return {results: results.fetch()};
}, MercadoLibre);
