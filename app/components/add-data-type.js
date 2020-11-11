import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AddDataTypeComponent extends Component {
  @service searchAttributes;

  @tracked
  isOpen = false;

  @action
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @action
  addDataType(type) {
    // If it is the last not selected data type - close the pop up menu
    if (this.searchAttributes.notSelectedDataTypes.length == 1)
      this.toggleOpen();

    // Push data type to selected
    this.searchAttributes.pushDataType(type);
  }
}
