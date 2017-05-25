import {Meteor} from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Products = new Mongo.Collection("products");

  // Meteor.publish("bby", function bbyPublication() {
  //   return bby.find({}, {sort: {created_at: -1}, limit:10});
  // });
    Meteor.methods({
      "bby.getprd"(){
        console.log("getprd");
        let bby = require('bestbuy')(process.env.BBY_API_KEY);
        bby.products('(search=mario)', {show: 'salePrice,name', pageSize: 1})
          .then(Meteor.bindEnvironment(function(data){
            if (data.total === 0) console.log('No products found');
            else{
              console.log('Found %d products. First match "%s" is $%d', data.total, data.products[0].name, data.products[0].salePrice);
              console.log(data);

              Products.insert(data.products);
          }}))
          .catch(function(err){
            console.warn(err);
          });
      }
    });
