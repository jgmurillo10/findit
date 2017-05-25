import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import {Link} from 'react-router';

class ItemBby extends Component {
  render(){
      //{this.props.result.title}
    return (
      <div className="products">

        <div className="col-md-6 m-wthree">
          <div className="col-m">
            <a href="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
              <img src={this.props.product.image} className="img-responsive" alt=""/>

            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html">{this.props.product.name}</a></h6>
              {console.log(this.props.product.name)}
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
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemBby;
