import ApplicationAdapter from "./application";
import ENV from "whatever-client/config/environment";

export default class DataTypeAdapter extends ApplicationAdapter {
  namespace = ENV.api.namespace;
}
