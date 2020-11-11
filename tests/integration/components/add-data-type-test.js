import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | add-data-type", function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    const dataTypes = [
      { id: 1, name: "some 1" },
      { id: 2, name: "some 2" },
      { id: 3, name: "some 3" },
    ];

    this.set("dataTypes", dataTypes);

    const searchAttributes = this.owner.lookup("service:search-attributes");

    searchAttributes.setAllDataTypes(dataTypes);

    searchAttributes.removeDataType(dataTypes[0]);
    searchAttributes.removeDataType(dataTypes[1]);

    this.set("service", searchAttributes);
  });

  test("it properly opens and close", async function (assert) {
    await render(hbs`<AddDataType />`);

    assert.dom("[data-test-add-data-type-button]").exists();
    assert.dom("[data-test-add-data-type-menu]").doesNotExist();

    await click("[data-test-add-data-type-button]");

    assert.dom("[data-test-add-data-type-menu]").exists();
    assert.dom("[data-test-add-data-option]").exists({ count: 2 });

    await click("[data-test-pop-up-menu-bg]");

    assert.dom("[data-test-add-data-type-menu]").doesNotExist();

    await click("[data-test-add-data-type-button]");

    assert.dom("[data-test-add-data-type-menu]").exists();

    await click("[data-test-pop-up-menu-exit-icon]");

    assert.dom("[data-test-add-data-type-menu]").doesNotExist();

    await click("[data-test-add-data-type-button]");

    assert.dom("[data-test-add-data-type-menu]").exists();

    await click("[data-test-add-data-type-menu]");

    assert.dom("[data-test-add-data-type-menu]").exists();
  });

  test("it properly manage selectedDataTypes", async function (assert) {
    await render(hbs`<AddDataType />`);

    await click("[data-test-add-data-type-button]");

    assert.equal(
      this.service.notSelectedDataTypes.length,
      2,
      "It starts with two not selected data types"
    );

    await click(`[data-test-add-data-option-id="1"]`);

    assert.equal(
      this.service.notSelectedDataTypes.length,
      1,
      "After click it has only one not selected data type"
    );
    assert.dom("[data-test-add-data-option]").exists({ count: 1 });

    await click(`[data-test-add-data-option-id="2"]`);

    assert.equal(
      this.service.notSelectedDataTypes.length,
      0,
      "After second click it doesn't has selected data type"
    );

    assert.dom("[data-test-add-data-option]").doesNotExist();
    assert.dom("[data-test-add-data-type-menu]").doesNotExist();
    assert.dom("[data-test-add-data-type-button]").doesNotExist();
  });
});
