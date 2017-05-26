import {Meteor} from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { Session } from 'meteor/session';

export const Products = new Mongo.Collection("products");

if(Meteor.isClient){
  if(!Meteor.user()){
    var id = new Mongo.ObjectID();
    console.log('hi',id);
    Session.set('userId2', id);
  }
}
    Meteor.methods({
      searchBby(query,categoria){
        console.log("id en bby", id);
        const userId = id;
        Products.remove({});
        console.log("category id", categoria);
        console.log("getprd");
        let bby = require('bestbuy')(process.env.BBY_API_KEY);
        bby.products('(search='+query+')&(categoryPath.id=' +categoria+')', {show: 'name,salePrice,shippingCost,url,shipping,customerReviewAverage,description,thumbnailImage', pageSize: 10})
          .then(Meteor.bindEnvironment(function(data){
            if (data.total === 0) console.log('No products found');
            else{
              console.log('Found %d products. First match "%s" is $%d', data.total, data.products[0].name, data.products[0].salePrice);
              console.log(data);
              data.products.map(item => {
                console.log("before insert " , userId);

                item.userId=id;
                console.log("bby " , item.userId);
                Products.insert(item);
              })
            }
          })
          )
          .catch(function(err){
            console.warn(err);
          });
      }
    });
