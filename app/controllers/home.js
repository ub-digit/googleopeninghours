import Ember from 'ember';

export default Ember.Controller.extend({

  application: Ember.inject.controller(),

  queryParams: ['to', 'from', 'library'],

  to: null,
  from: null,
  library: null,

  libraries: null,
  hours: null

});
