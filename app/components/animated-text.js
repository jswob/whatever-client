import Component from "@glimmer/component";

export default class AnimatedTextComponent extends Component {
  constructor() {
    super(...arguments);

    const randomNumber = Math.round(Math.random() * 10000);
    const id = "s-text-" + randomNumber;

    this.randomId = id;
  }

  strokes = ["1", "2", "3", "4", "5"];
}
