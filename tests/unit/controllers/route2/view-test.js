import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | route2/view', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:route2/view');
    assert.ok(controller);
  });
});
