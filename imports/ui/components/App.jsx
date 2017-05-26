import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
import Navbarfix from './navbar/NavbarFix.jsx';
import Footer from './footer/Footer.jsx';
import Offers from './offers/Offers.jsx';
import Carousel from './carousel/Carousel.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      userId: '',
    }
  }
  // componentDidMount(){
  //   this.setState({
  //     userId: Meteor.call("getUserId")
  //   })
  // }

  render() {
    return (
      <div>
          <div className="row">
            <div className="col-md-12">
              <Navbarfix/>
            </div>
          </div>
          <div className='row app-container'>
            <div className='col-md-12'>
              {React.cloneElement(this.props.children, {...this.state})}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/*<Offers/>*/}
            </div>
            <div className="col-md-12">
              {/*<Carousel/>*/}
              <Carousel/>
            </div>
            <div className="col-md-12">
              <Offers/>
            </div>
            <div className="col-md-12">
              <Footer/>
            </div>
          </div>
      </div>
    )
  }

}

export default App;
