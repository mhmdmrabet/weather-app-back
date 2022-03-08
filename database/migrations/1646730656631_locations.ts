import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Locations extends BaseSchema {
  protected tableName = "locations";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("country").notNullable();
      table.string("name").notNullable();
      table.string("state").notNullable();
      table.string("city_name").nullable();
      table.string("lat").notNullable();
      table.string("lon").notNullable();
      table.string("zip_code").nullable();
      table.string("country_code").nullable();
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
