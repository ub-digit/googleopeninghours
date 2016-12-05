import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({

  queryParams: {
    from: {
      refreshModel: true
    },
    to: {
      refreshModel: true
    },
    library: {
      refreshModel: true
    }
  },

  model(params) {

    let days = moment(params.to).diff(moment(params.from), 'days') + 1;

    let requestParams = Ember.$.param({
      start_date: params.from,
      days: days,
      location_id: params.library
      }
    );

    return Ember.$.ajax('http://130.241.35.161:3014/openhours?' + requestParams).then((data) => {
      return data;
    }, () => {
      return null;
    });

  },

  setupController(controller, model) {

    let hours = [];

    if (model) {
      hours = model.openhours.map((item) => {

        let dateString = item.date + ': ';

        if (item.is_open) {
          return dateString += item.open + "-" + item.close;
        } else {
          return dateString += 'x';
        }
      });

      hours = hours.join();
    }

    controller.set('hours', hours);
    controller.set('model', model);
  }
});
