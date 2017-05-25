import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from "meteor/meteor";
import { createContainer } from 'meteor/react-meteor-data';
import { Results } from  '/imports/api/results.js';
import Item from './Item';
import { Session } from 'meteor/session';

class MercadoLibre extends Component {
  constructor(props){
    super(props);

    this.state = {
      userId: '',
    }

  }

  render(){
    return(
      <div>
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
    let results = Results.find({userId: Session.get('userId')});
    return {results: results.fetch()};
}, MercadoLibre);
