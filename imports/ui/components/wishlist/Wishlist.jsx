import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router';
import { browserHistory, Link } from 'react-router';
export default class Wishlist extends Component {
  render(){
    return(
      <div>
        <div className="check-out">
        <div className="container">
        <div className="spec ">
            <h3>Wishlist</h3>
              <div className="ser-t">
                <b></b>
                <span><i></i></span>
                <b className="line"></b>
              </div>
          </div>

        <table className="table ">
          <tr>
          <th className="t-head head-it ">Products</th>
          <th className="t-head">Price</th>
        <th className="t-head">Quantity</th>

          <th className="t-head">Purchase</th>
          </tr>
          <tr className="cross">
          <td className="ring-in t-data">
            <a href="single.html" className="at-in">
              <img src="images/wi.png" className="img-responsive" alt=""/>
            </a>
          <div className="sed">
            <h5>Sed ut perspiciatis unde</h5>
          </div>
            <div className="clearfix"> </div>
            <div className="close1"> <i className="fa fa-times" aria-hidden="true"></i></div>
           </td>
          <td className="t-data">$10.00</td>
          <td className="t-data"><div className="quantity">
                    <div className="quantity-select">
                      <div className="entry value-minus">&nbsp;</div>
                        <div className="entry value"><span className="span-1">1</span></div>
                      <div className="entry value-plus active">&nbsp;</div>
                    </div>
                  </div>

          </td>

          <td className="t-data t-w3l"><a className=" add-1" href="single.html">Add To Cart</a></td>

          </tr>
          <tr className="cross1">
          <td className="t-data ring-in"><a href="single.html" className="at-in"><img src="images/wi1.png" className="img-responsive" alt=""/></a>
          <div className="sed">
            <h5>Sed ut perspiciatis unde</h5>
          </div>
          <div className="clearfix"> </div>
                  <div className="close2"> <i className="fa fa-times" aria-hidden="true"></i></div>
        </td>
          <td className="t-data">$20.00</td>
        <td className="t-data"><div className="quantity">
                    <div className="quantity-select">
                      <div className="entry value-minus">&nbsp;</div>
                        <div className="entry value"><span className="span-1">1</span></div>
                      <div className="entry value-plus active">&nbsp;</div>
                    </div>
                  </div>

          </td>

          <td className="t-data t-w3l"><a className=" add-1" href="single.html">Add To Cart</a></td>

          </tr>
          <tr className="cross2">
          <td className="t-data ring-in"><a href="single.html" className="at-in"><img src="images/wi2.png" className="img-responsive" alt=""/></a>
          <div className="sed">
            <h5>Sed ut perspiciatis unde</h5>
          </div>
          <div className="clearfix"> </div>
            <div className="close3"> <i className="fa fa-times" aria-hidden="true"></i></div>
          </td>
          <td className="t-data">$15.00</td>
          <td className="t-data"><div className="quantity">
                    <div className="quantity-select">
                      <div className="entry value-minus">&nbsp;</div>
                        <div className="entry value"><span className="span-1">1</span></div>
                      <div className="entry value-plus active">&nbsp;</div>
                    </div>
                  </div>

          </td>

          <td className="t-data"><a className=" add-1" href="single.html">Add To Cart</a></td>

          </tr>
          </table>
         </div>
         </div>

      </div>
    )
  }
}
