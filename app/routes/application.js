import Ember from 'ember';

export default Ember.Route.extend({

  model () {

    return Ember.$.ajax('http://130.241.35.161:3014/locations').then((data) => {
      return data;
    });

  },

  setupController(controller, model) {

    let libraries = model.locations.map((item) => {

      let txt = document.createElement("textarea");
      txt.innerHTML = item.name;

      return {
        id: item.id.toString(),
        name:  decodeURI(txt.value)
      };
    });

    controller.set('libraries', libraries);
  }
});
