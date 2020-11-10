import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class PopUpMenuComponent extends Component {
  @action
  stopPropagationAction() {
    return;
  }
}
