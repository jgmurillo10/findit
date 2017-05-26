import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ReactiveVar } from 'meteor/reactive-var';
import {Router,Route,Link, browserHistory, IndexRoute} from 'react-router';


import './main.html';
//  --------  Assets ----------
//CSS
    //<!-- //for-mobile-apps -->
import '/imports/assets/css/bootstrap.css';
//<!-- Custom Theme files -->
import '/imports/assets/css/style.css';
import '/imports/assets/css/font-awesome.css';
import '/imports/assets/css/jstarbox.css';
//JS
import '/imports/assets/js/bootstrap.js';
import '/imports/assets/js/event.js';
import '/imports/assets/js/jquery-1.11.1.min.js';
import '/imports/assets/js/move-top.js';
import '/imports/assets/js/easing.js';
import '/imports/assets/js/event2.js';
import '/imports/assets/js/start.js';
import '/imports/assets/js/jstarbox.js';
import '/imports/assets/js/jquery.vide.min.js';



//UI Components
import Home from '../imports/ui/components/Home.jsx';
import App from '../imports/ui/components/App.jsx';
import LoginPage from '../imports/ui/components/auth/LoginPage';
import SignupPage from '../imports/ui/components/auth/SignupPage';
import Wishlist from '../imports/ui/components/wishlist/Wishlist';
import Results from '../imports/ui/components/results/Results';



Meteor.startup(()=>{
   $('html').attr('lang', 'es');
   render (
    <Router history={ browserHistory } >
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      {/* <Route path='intro' component={Intro}/> */}
      <Route path="login" component={ LoginPage }/>
      <Route path="signup" component={ SignupPage }/>
      <Route path="wishlist" component={ Wishlist }/>


    </Route>
  </Router>,
     document.getElementById('render-target')
   );
});
