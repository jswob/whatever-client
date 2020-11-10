import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | pop-up-menu", function (hooks) {
  setupRenderingTest(hooks);

  test("it properly renders all elements", async function (assert) {
    this.set("isOpened", false);
    this.set("label", "Some label");
    this.set("toggleAction", function () {
      this.set("isOpened", !this.get("isOpened"));
    });

    await render(hbs`
      <PopUpMenu @label={{this.label}} @isOpened={{this.isOpened}} @toggleAction={{this.toggleAction}}>
        <button data-test-pop-up-menu-button-1 type="button" class="default-button">text 1</button>
        <button data-test-pop-up-menu-button-2 type="button" class="default-button">text 2</button>
      </PopUpMenu>
      `);

    assert
      .dom("[data-test-pop-up-menu-wrapper]")
      .doesNotExist("When isOpen is set to false it renders nothing");

    this.set("isOpened", true);

    assert
      .dom("[data-test-pop-up-menu-wrapper]")
      .exists()
      .includesText(this.get("label"));

    assert
      .dom("[data-test-pop-up-menu-bg]")
      .exists("If isOpen is set to true it renders all data");
    assert.dom("[data-test-pop-up-menu-button-1]").exists();
    assert.dom("[data-test-pop-up-menu-button-2]").exists();

    this.set("isOpened", false);

    assert
      .dom("[data-test-pop-up-menu-wrapper]")
      .doesNotExist("When isOpen is set to false it renders nothing");
  });
});
