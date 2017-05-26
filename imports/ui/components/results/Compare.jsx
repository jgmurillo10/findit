import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Meteor} from "meteor/meteor";
import BestBuy from './bestbuy/BestBuy';
import { ResultsMercado } from "../../../api/results.js";
import { Products } from "../../../api/bbyProducts.js";
import MercadoLibre from "./mercadolibre/MercadoLibre.jsx";
import { Session } from 'meteor/session';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
class Compare extends Component {
  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.state = {
      showModal: true,
    }
  }
  close() {
   this.setState({ showModal: false });
   this.props.reset();
 }

 open() {
   this.setState({ showModal: true });
 }
  render(){

    return(
      <div>

        <Modal show={this.state.showModal} onHide={this.close} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Comparing </Modal.Title>

        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
          {
            this.props.mercado ?
            <Modal.Body>
              <div className="row">
                <div className="col-md-6">
                  {this.props.mercado.title}
                  {this.props.mercado.price}
                </div>
                <div className="col-md-6">
                  {this.props.best.name}
                  {this.props.best.salePrice}
                </div>
              </div>

              </Modal.Body>
            :
            ''
          }


        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>

      </div>
    )
  }
}
export default Compare;
