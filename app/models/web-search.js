import Model, { attr } from "@ember-data/model";
import SearchResultModel from "./search-result";

export default class WebSearchModel extends SearchResultModel {
  @attr("string") title;
  @attr("string") body;
}
