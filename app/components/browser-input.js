import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class BrowserInputComponent extends Component {
  @tracked
  query = "";
}
