import Model, { attr, hasMany } from "@ember-data/model";

export default class DataTypeModel extends Model {
  @attr("string") name;
  @hasMany("search-result") searchResults;
}
