import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import {Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button';

var sectionStyle = {
  height: "350px",
  margin: "5px",
};
var selectedStyle = {
  height: "350px",
  margin: "5px",
  backgroundColor: "lightgrey",
};
var unselectedStyle = {
  height: "350px",
  margin: "5px",
  backgroundColor: "white",
};



class Item extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);


  }

  handleClick(e){
    e.preventDefault();
    this.props.setSelected(this.props.result._id);
    console.log(this.props.result._id, 'index');
    this.props.onClick(this.props.result._id);
  }

  render(){

    return (
      <div className="products">

        <div className="col-md-6 m-wthree item">

          {console.log(this.props.isActive, 'is active')}
          <div className="col-m" style={this.props.isActive? selectedStyle: unselectedStyle} >
            <a href="#" data-toggle="modal" data-target="#myModal" className="offer-img">
              <img src={this.props.result.thumbnail} className="img-responsive" alt=""/>

            </a>
            <div className="mid-1">
              <div className="women">
                <h6><Link item={this.props.result} to={'/item/'+ this.props.result._id}>{this.props.result.title}</Link></h6>
              </div>
              <div className="mid-2">
                <p ><em className="item_price">$ {this.props.result.price} COP </em></p>
                  <div className="block">
                  <div className="starbox small ghosting"> </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="add">
                 <button className="btn btn-danger my-cart-btn my-cart-b " data-id="1" data-name="Moong" data-summary="summary 1" data-price="1.50" data-quantity="1" data-image="images/of.png">Add to Cart</button>
                 <button className="btn btn-danger my-cart-btn my-cart-b " onClick={this.handleClick} >Choose</button>

            </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Item;
