import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import {Link} from 'react-router';
var sectionStyle = {
  height: "350px",
  margin: "5px",
  backgroundColor: "white"
};
var imageStyle = {
  height: "85px",
  width: "40px"
}

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
class ItemBby extends Component {
  constructor(props){
    super(props);
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    console.log(e);
    this.props.setSelected(this.props.product._id);
    this.props.onClick(this.props.product._id);


  }
  render(){

      //{this.props.result.title}
    return (
      <div onClick={this.handleClick}  className="products">

        <div className="col-md-6 m-wthree">
          <div className="col-m" style={this.props.isActive? selectedStyle: unselectedStyle}>
            <a href="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
              <img src={this.props.product.thumbnailImage} style={imageStyle}  className="img-responsive" alt=""/>

            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html">{this.props.product.name}</a></h6>

              </div>
              <div className="mid-2">
                <p ><em className="item_price">$ {this.props.product.salePrice} USD </em></p>
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
export default ItemBby;
