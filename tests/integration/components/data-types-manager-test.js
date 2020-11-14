import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | data-types-manager", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    const dataTypes = [
      { id: 1, name: "name 1" },
      { id: 2, name: "name 2" },
    ];

    const server = this.owner.lookup("service:search-attributes");

    server.setAllDataTypes(dataTypes);

    await render(hbs`
      <DataTypesManager>
        <span data-test-yield >Hello</span>
      </DataTypesManager>
    `);

    assert.dom("[data-test-data-types-manager]").exists();
    assert
      .dom("[data-test-data-type-element]")
      .exists({ count: dataTypes.length });
    assert.dom("[data-test-yield]").exists();
    assert.dom("[data-test-add-data-type]").doesNotExist();

    await click("[data-test-data-type-element] > [data-test-clear-button]");

    assert.dom("[data-test-data-types-manager]").exists();
    assert
      .dom("[data-test-data-type-element]")
      .exists({ count: dataTypes.length - 1 });
    assert.dom("[data-test-yield]").exists();
    assert.dom("[data-test-add-data-type-button]").exists();
  });
});
