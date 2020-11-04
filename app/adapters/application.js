import RESTAdapter from "@ember-data/adapter/rest";
import ENV from "whatever-client/config/environment";

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.api.host;
}
