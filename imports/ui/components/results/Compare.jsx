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
import { Table } from 'react-bootstrap';
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

                  <h3>  {this.props.mercado.title}</h3>
                    <img src={this.props.mercado.thumbnail} className="img-responsive" alt=""/>



                </div>
                <div className="col-md-6">
                  <h3>  {this.props.best.name}</h3>
                  <img src={this.props.best.thumbnailImage} className="img-responsive" alt=""/>
                </div>
                <div className="">
                  <Table responsive>
                     <thead>
                       <th>Spec</th>
                       <th>{this.props.mercado.title}</th>
                       <th>{this.props.best.name}</th>

                     </thead>
                     <tbody>
                       <tr>
                         <td>Price</td>
                         <td>$ {this.props.mercado.price} COP</td>
                         <td>$ {Math.floor(this.props.best.salePrice*2911)} COP </td>

                       </tr>
                       <tr>
                         <td>Rating Average</td>
                         <td>
                           {this.props.mercado.reviews.rating_average?
                           <span>{this.props.mercado.reviews.rating_average}</span>
                         :
                         <span>Not available</span>
                       }
                         </td>
                         <td>{this.props.best.customerReviewAverage}</td>

                       </tr>

                     </tbody>
                   </Table>
                   <h3>Price difference: { Math.abs(Math.floor(this.props.best.salePrice*2911) - this.props.mercado.price) }</h3>
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
