import {Meteor} from "meteor/meteor";
import { Mongo } from "meteor/mongo";
let bby = require('bestbuy')('tkCvEbHemKG6ItqbVztrPQXF');

// export const bby = new Mongo.Collection("bby");

  // Meteor.publish("bby", function bbyPublication() {
  //   return bby.find({}, {sort: {created_at: -1}, limit:10});
  // });
    Meteor.methods({
      "bby.getprd"(){
        bby.products('(search=mario)', {show: 'salePrice,name', pageSize: 1})
          .then(function(data){
            if (data.total === 0) console.log('No products found');
            else console.log('Found %d products. First match "%s" is $%d', data.total, data.products[0].name, data.products[0].salePrice);
          })
          .catch(function(err){
            console.warn(err);
          });
      }
    });
  
