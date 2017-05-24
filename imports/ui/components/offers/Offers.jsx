import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
class Offers extends Component {
  render(){
    return (
      <div>
            <div className="content-top ">
            	<div className="container ">
            		<div className="spec ">
            			<h3>Special Offers</h3>
            			<div className="ser-t">
            				<b></b>
            				<span><i></i></span>
            				<b className="line"></b>
            			</div>
            		</div>
            			<div className="tab-head ">
            				<nav className="nav-sidebar">
            					<ul className="nav tabs ">
            					  <li className="active"><a href="#tab1" data-toggle="tab">Staples</a></li>
            					  <li className=""><a href="#tab2" data-toggle="tab">Snacks</a></li>
            					  <li className=""><a href="#tab3" data-toggle="tab">Fruits & Vegetables</a></li>
            					  <li className=""><a href="#tab4" data-toggle="tab">Breakfast & Cereal</a></li>
            					</ul>
            				</nav>
            				<div className=" tab-content tab-content-t ">
            					<div className="tab-pane active text-style" id="tab1">
            						<div className=" con-w3l">
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
            										<img src="images/of.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Moong</a>(1 kg)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$2.00</label><em className="item_price">$1.50</em></p>
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
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
            										<img src="images/of1.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Sunflower Oil</a>(5 kg)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$10.00</label><em className="item_price">$9.00</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            												<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="2" data-name="Sunflower Oil" data-summary="summary 2" data-price="9.00" data-quantity="1" data-image="images/of1.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
            										<img src="images/of2.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Kabuli Chana</a>(1 kg)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$3.00</label><em className="item_price">$2.00</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="3" data-name="Kabuli Chana" data-summary="summary 3" data-price="2.00" data-quantity="1" data-image="images/of2.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
            										<img src="images/of3.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Soya Chunks</a>(1 kg)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$4.00</label><em className="item_price">$3.50</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="4" data-name="Soya Chunks" data-summary="summary 4" data-price="3.50" data-quantity="1" data-image="images/of3.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="clearfix"></div>
            						 </div>
            					</div>
            					<div className="tab-pane  text-style" id="tab2">
            						<div className=" con-w3l">
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal5" className="offer-img">
            										<img src="images/of4.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Lays</a>(100 g)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$1.00</label><em className="item_price">$0.70</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="5" data-name="Lays" data-summary="summary 5" data-price="0.70" data-quantity="1" data-image="images/of4.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal6" className="offer-img">
            										<img src="images/of5.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Kurkure</a>(100 g)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$1.00</label><em className="item_price">$0.70</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="6" data-name="Kurkure" data-summary="summary 6" data-price="0.70" data-quantity="1" data-image="images/of5.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal7" className="offer-img">
            										<img src="images/of6.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Popcorn</a>(250 g)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$2.00</label><em className="item_price">$1.00</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="7" data-name="Popcorn" data-summary="summary 7" data-price="1.00" data-quantity="1" data-image="images/of6.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal8" className="offer-img">
            										<img src="images/of7.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Nuts</a>(250 g)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$4.00</label><em className="item_price">$3.50</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="8" data-name="Nuts" data-summary="summary 8" data-price="3.50" data-quantity="1" data-image="images/of7.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="clearfix"></div>
            						 </div>
            					</div>
            					<div className="tab-pane  text-style" id="tab3">
            						<div className=" con-w3l">
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            								<a href="#" data-toggle="modal" data-target="#myModal9" className="offer-img">
            										<img src="images/of8.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Banana</a>(6 pcs)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$2.00</label><em className="item_price">$1.50</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="9" data-name="Banana" data-summary="summary 9" data-price="1.50" data-quantity="1" data-image="images/of8.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal10" className="offer-img">
            										<img src="images/of9.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Onion</a>(1 kg)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$1.00</label><em className="item_price">$0.70</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="10" data-name="Onion" data-summary="summary 10" data-price="0.70" data-quantity="1" data-image="images/of9.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal11" className="offer-img">
            										<img src="images/of10.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html"> Bitter Gourd</a>(1 kg)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$2.00</label><em className="item_price">$1.00</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="11" data-name="Bitter Gourd" data-summary="summary 11" data-price="1.00" data-quantity="1" data-image="images/of10.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal12" className="offer-img">
            										<img src="images/of11.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Apples</a>(1 kg)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$4.00</label><em className="item_price">$3.50</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="12" data-name="Apples" data-summary="summary 12" data-price="3.50" data-quantity="1" data-image="images/of11.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="clearfix"></div>
            						 </div>
            					</div>
            					<div className="tab-pane text-style" id="tab4">
            							<div className=" con-w3l">
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            								<a href="#" data-toggle="modal" data-target="#myModal13" className="offer-img">
            										<img src="images/of12.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Honey</a>(500 g)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$7.00</label><em className="item_price">$6.00</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="13" data-name="Honey" data-summary="summary 13" data-price="6.00" data-quantity="1" data-image="images/of12.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m ">
            									<a href="#" data-toggle="modal" data-target="#myModal14" className="offer-img">
            										<img src="images/of13.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Chocos</a>(250 g)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$5.00</label><em className="item_price">$4.50</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="14" data-name="Chocos" data-summary="summary 14" data-price="4.50" data-quantity="1" data-image="images/of13.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m ">
            									<a href="#" data-toggle="modal" data-target="#myModal15" className="offer-img">
            										<img src="images/of14.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Oats</a>(1 kg)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$4.00</label><em className="item_price">$3.50</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="15" data-name="Oats" data-summary="summary 15" data-price="3.50" data-quantity="1" data-image="images/of14.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-3 m-wthree">
            								<div className="col-m">
            									<a href="#" data-toggle="modal" data-target="#myModal16" className="offer-img">
            										<img src="images/of15.png" className="img-responsive" alt=""/>
            										<div className="offer"><p><span>Offer</span></p></div>
            									</a>
            									<div className="mid-1">
            										<div className="women">
            											<h6><a href="single.html">Bread</a>(500 g)</h6>
            										</div>
            										<div className="mid-2">
            											<p ><label>$1.00</label><em className="item_price">$0.80</em></p>
            											  <div className="block">
            												<div className="starbox small ghosting"> </div>
            											</div>
            											<div className="clearfix"></div>
            										</div>
            											<div className="add">
            										   <button className="btn btn-danger my-cart-btn my-cart-b" data-id="16" data-name="Bread" data-summary="summary 16" data-price="0.80" data-quantity="1" data-image="images/of15.png">Add to Cart</button>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="clearfix"></div>
            						 </div>
            					</div>
            				</div>
            			</div>

            	</div>
            	</div>
            	</div>

    )
  }

}

export default Offers;
