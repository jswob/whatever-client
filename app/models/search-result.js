import Model, { attr, hasMany } from "@ember-data/model";

export default class SearchResultModel extends Model {
  @attr("string") link;
  @hasMany("data-type") dataType;
}
