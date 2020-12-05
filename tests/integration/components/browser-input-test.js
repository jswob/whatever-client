import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, fillIn } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | browser-input", function (hooks) {
  setupRenderingTest(hooks);

  test("it shows search-icon if value is provided", async function (assert) {
    this.set("action", function () {});

    await render(hbs`<BrowserInput @action={{this.action}} />`);

    // Renders all necessary data
    assert.dom("[data-test-wrapper]").exists();
    assert.dom("[data-test-input]").exists().hasNoValue();

    // If data-test-input has no value, it doesn't render a search-icon
    assert.dom("data-test-search-icon").doesNotExist();

    // Fill inpuut with random data
    await fillIn("[data-test-input]", "random value");

    // When input has value, it renders a search-icon
    assert.dom("[data-test-search-icon]").exists();
  });
});
