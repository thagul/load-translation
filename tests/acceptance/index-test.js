import { test } from 'qunit';
import moduleForAcceptance from 'load-translation/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find("p:first").text(), 'Hello');
  });
});
