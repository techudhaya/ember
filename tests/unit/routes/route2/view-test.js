import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | route2/view', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:route2/view');
    assert.ok(route);
  });
});
