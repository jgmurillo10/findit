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
    console.log(Session.get('userId'));
    console.log(Session.get('hola'));

  }
  componentDidMount(){
    console.log(Session.get('userId'));
  }
  componentWillUpdate(){
    console.log(Session.get('userId'));

  }

  render(){
    return(
      <div>
        <div className="row">
          <h1>
            {this.state.userId}</h1><h1>HOLAAAAAA {this.props.userId} {this.state.userId}</h1>

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
