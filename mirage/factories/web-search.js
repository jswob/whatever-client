import { Factory } from "ember-cli-mirage";

export default Factory.extend({
  link(i) {
    return `http://localhost:4200/web-search/${i}`;
  },

  title() {
    return `Web Search ${i}`;
  },

  body(i) {
    let defaultBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis vestibulum turpis, eget dignissim nibh tempor consectetur. Vivamus tempor tempor elit quis gravida. Fusce ut commodo lorem, eget lobortis nibh. Quisque et finibus ex, sit amet euismod nunc. Phasellus eu nibh porta, tristique mi a, condimentum eros. Aenean dapibus aliquet ipsum, sit amet tincidunt nibh. Etiam pellentesque metus a blandit varius. Praesent pulvinar ante libero, in lobortis metus blandit in. Praesent vel nulla vitae orci eleifend dictum.".split(
      ""
    );
    const bodyLength = Math.floor(Math.random() * 500) + 30;

    return defaultBody + " - " + defaultBody.slice(bodyLength)[0].join("");
  },
});
