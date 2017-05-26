import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
import BestBuy from './bestbuy/BestBuy';
import { ResultsMercado } from "../../../api/results.js";
import { Products } from "../../../api/bbyProducts.js";
import MercadoLibre from "./mercadolibre/MercadoLibre.jsx";
import { Session } from 'meteor/session';
class Compare extends Component {
  constructor(props){
    super(props);
  }
  render(){
    if(!this.props.mercado)
    return(<div></div>);
    else{
    return(
      <div>

          <a className="btn" data-toggle="modal" data-target="#myModal" >Launch Modal</a>
              <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                  <div className="modal-content modal-info">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body modal-spa">
                      <div className="row">


                      { this.props.mercado ?
                        <div>
                        <div className="col-md-6">

                          <h3>{this.props.mercado._id}</h3>
                          <div className="item">
                            <img src={this.props.mercado.thumbnail} className="img-responsive" alt=""/>
                          </div>
                          <p className="in-para"> .</p>
                          <div className="price_single">
                            <span className="reducedfrom ">
                              $ {this.props.mercado.price} COP
                            </span>

                           <div className="clearfix"></div>
                          </div>
                          <h4 className="quick">Quick Overview:</h4>
                          <p className="quick_desc">{this.props.mercado.title}</p>
                           <div className="add-to">
                               <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id="1" data-name="Moong" data-summary="summary 1" data-price="1.50" data-quantity="1" data-image="images/of.png">Add to Cart</button>
                            </div>

                            <div className="clearfix"> </div>

                        </div>

                        <div className="col-md-6">

                          <h3>{this.props.mercado._id}</h3>
                          <div className="item">
                            <img src={this.props.mercado.thumbnail} className="img-responsive" alt=""/>
                          </div>
                          <p className="in-para"> .</p>
                          <div className="price_single">
                            <span className="reducedfrom ">
                              $ {this.props.mercado.price} COP
                            </span>

                           <div className="clearfix"></div>
                          </div>
                          <h4 className="quick">Quick Overview:</h4>
                          <p className="quick_desc">{this.props.mercado.title}</p>
                           <div className="add-to">
                               <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id="1" data-name="Moong" data-summary="summary 1" data-price="1.50" data-quantity="1" data-image="images/of.png">Add to Cart</button>
                            </div>

                            <div className="clearfix"> </div>

                        </div>
                        </div>

                        :
                        <h3>Not selected</h3>

                      }
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

      </div>
    )}
  }
}
export default Compare;
