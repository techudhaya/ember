import Model, { attr } from '@ember-data/model';

export default Model.extend({
  name: attr('string'),
  mail: attr('string'),
  phone_number: attr('string')

});
