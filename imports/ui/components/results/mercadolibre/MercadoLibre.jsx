import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from "meteor/meteor";
import { createContainer } from 'meteor/react-meteor-data';
import { Results } from  '/imports/api/results.js';
import Item from './Item';

class MercadoLibre extends Component {
  render(){
    return(
      <div>
        <h1>MercadoLibre</h1>
        <div className="row">
          {this.props.results.map(result => {
            return <Item key={result._id} result={result}/>
          })}
        </div>
      </div>
    )
  }
}
export default AppContainer = createContainer(() => {
    let results = Results.find({});
    return {results: results.fetch()};
}, MercadoLibre);
