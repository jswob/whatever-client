import Model, { attr, hasMany } from "@ember-data/model";

export default class SearchResultsModel extends Model {
  @attr("string") link;
  @hasMany("data-type") dataType;
}
