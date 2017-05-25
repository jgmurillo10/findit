import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';

export const Results = new Mongo.Collection('results');
if(Meteor.isClient){
  if(!Meteor.user()){
    var id = new Mongo.ObjectID();
    console.log(id);
    Session.set('userId', id);
    Session.set('hola', 'hHOASGJASFNASOF');
  }
}
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
         item.userId=id;
         Results.insert(item);
       })
     }
    });
  }

});
