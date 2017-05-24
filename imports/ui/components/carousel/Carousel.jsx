import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
class Carousel extends Component {
  render(){
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <br></br>

      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <a href="kitchen.html"> <img className="first-slide" src="images/ba.jpg" alt="First slide"/></a>

        </div>
        <div className="item">
         <a href="care.html"> <img className="second-slide " src="images/ba1.jpg" alt="Second slide"/></a>

        </div>
        <div className="item">
          <a href="hold.html"><img className="third-slide " src="images/ba2.jpg" alt="Third slide"/></a>

        </div>
      </div>
      <br></br>
        <br></br>
      <br></br>
    </div>
    )
  }
 }

 export default Carousel;
