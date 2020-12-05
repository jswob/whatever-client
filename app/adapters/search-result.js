import ApplicationAdapter from "./application";

export default class SearchResultAdapter extends ApplicationAdapter {
  pathForType(modelName) {
    return modelName.split("-")[0];
  }
}
