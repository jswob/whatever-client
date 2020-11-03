import Model, { attr } from "@ember-data/model";
import SearchResultsModel from "./search-results";

export default class WebSearchModel extends SearchResultsModel {
  @attr("string") title;
  @attr("string") body;
}
