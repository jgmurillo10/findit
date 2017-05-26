import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from "meteor/meteor";
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import { ResultsMercado } from  '/imports/api/results.js';

class Item extends Component {
  constructor(props){
    super(props);
    console.log(this.props.item);
    this.state = {
      item: '',
    }
}

  render(){
    return (
      <div>
        {
          this.props.result?
          <div>
            <div className="banner-top">
            	<div className="container">
            		<h3 >{this.props.result.title}</h3>
            		<h4><a href="index.html">Home</a><label>/</label>{this.props.result.title}</h4>
            		<div className="clearfix"> </div>
            	</div>
            </div>

            <div className="single">
            			<div className="container">
            						<div className="single-top-main">
            	   		<div className="col-md-5 single-top">
            	   		<div className="single-w3agile">

                <div id="picture-frame">
            			<img src={this.props.result.thumbnail} data-src="images/si-1.jpg" alt="" className="img-responsive"/>
            		</div>




            			</div>
            			</div>
            			<div className="col-md-7 single-top-left ">
            								<div className="single-right">
            				<h3>{this.props.result.title}</h3>


            				 <div className="pr-single">
            				  <p className="reduced ">
                        {this.props.result.price}
                      </p>
            				</div>
            				<div className="block block-w3">
            					<div className="starbox small ghosting"> </div>
            				</div>
            				<p className="in-pa"> {this.props.result.permalink} </p>

            				<ul className="social-top">
            					<li><a href="#" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span></span></a></li>
            					<li><a href="#" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span></span></a></li>
            					<li><a href="#" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i><span></span></a></li>
            					<li><a href="#" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i><span></span></a></li>
            				</ul>
            					<div className="add add-3">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="1" data-name="Wheat" data-summary="summary 1" data-price="6.00" data-quantity="1" data-image="images/si.jpg">Add to Cart</button>
            										</div>



            			<div className="clearfix"> </div>
            			</div>


            			</div>
            		   <div className="clearfix"> </div>
            	   </div>


            	</div>
            </div>

          </div>

          :
          <p>Cargando</p>

        }
      </div>
    )
  }
}
export default AppContainer = createContainer(({params}) => {
  console.log(params.item_id);
    let results = ResultsMercado.find({_id: params.item_id});
    console.log(results);
    return {result: results.fetch()[0]};
}, Item);
