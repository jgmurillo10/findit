import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'

export const Results = new Mongo.Collection('results');

Meteor.methods({
  search(query){
    Results.remove({});
    console.log('call');
    HTTP.call('GET', 'https://api.mercadolibre.com/sites/MCO/search', {
     params: { q: query.query }
   }, function(error, result) {
     if (!error) {
       console.log(result);
       result.data.results.map(item => {
         Results.insert(item);
       })
     }
    });
  }

});
