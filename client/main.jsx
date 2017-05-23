import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ReactiveVar } from 'meteor/reactive-var';
import {Router,Route,Link, browserHistory, IndexRoute} from 'react-router';
import Home from '../imports/ui/components/Home.jsx';
import App from '../imports/ui/components/App.jsx';

Meteor.startup(()=>{
   $('html').attr('lang', 'es');

   render (

     <Router history={ browserHistory } >
       <Route path="/" component={ App } >
         <IndexRoute component={ Home }/>


       </Route>
     </Router>,
     document.getElementById('render-target')
   );
});
