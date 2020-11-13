import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | data-type-element", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders all data", async function (assert) {
    const dataTypes = [
      { id: 1, name: "name 1" },
      { id: 2, name: "name 2" },
    ];

    const server = this.owner.lookup("service:search-attributes");

    this.set("server", server);

    server.setAllDataTypes(dataTypes);

    await render(hbs`
      {{#each this.server.selectedDataTypes as |type|}}
        <DataTypeElement data-test-element data-test-element-id={{type.id}} @type={{type}} />
      {{/each}}
    `);

    assert
      .dom("[data-test-element]")
      .exists({ count: 2 }, "It starts with 2 elements");

    await click(`[data-test-element-id="2"] > .clear-button`);

    assert
      .dom("[data-test-element]")
      .exists(
        { count: 1 },
        "After succesfull delete, only one element remains"
      );

    assert.equal(
      this.server.selectedDataTypes.length,
      1,
      "Service data are updated"
    );
    assert.equal(
      this.server.selectedDataTypes[0].id,
      1,
      "It deletes correct data-type"
    );

    assert
      .dom(`[data-test-element-id="1"] > .clear-button`)
      .doesNotExist(
        "If only one selected data-type remains disables clear option"
      );
  });
});
