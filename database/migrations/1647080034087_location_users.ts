import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class LocationUsers extends BaseSchema {
  protected tableName = "location_user";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.uuid("user_id").unsigned().references("users.id");
      table.integer("location_id").unsigned().references("locations.id");
      table.unique(["user_id", "location_id"]);
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
