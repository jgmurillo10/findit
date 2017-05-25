import React, {Component} from 'react';
import {Link} from 'react-router';
// import Background from 'overview.png';
import {bbyProducts} from "../../api/bbyProducts";
import Results from './results/Results';
var sectionStyle = {
  width: "100%",
  backgroundImage: "url(video.gif)"
};
class Offers extends Component {

  componentDidMount(){

  }
  render() {
    return (
      <div>
        <div style={ sectionStyle }>
          <div className="container">
          <div className="banner-info">
            <h3>It is a long established fact that a reader will be distracted by
            the readable </h3>
            <div className="search-form">
              <form action="#" method="post">
                <input type="text" placeholder="Search..." name="Search..."/>
                <input type="submit" value=" " />
              </form>
            </div>

          </div>
          </div>
        </div>
        <Results/>
      </div>
    )
  }
}

export default Offers;
