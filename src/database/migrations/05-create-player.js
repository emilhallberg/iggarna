const table = "player";

exports.up = async (knex) =>
  knex.schema.createTable(table, (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.text("name").notNullable();
    t.text("src").notNullable();
    t.text("alt").notNullable();
    t.uuid("team").notNullable().references("id").inTable("team");
  });

exports.down = async (knex) => knex.schema.dropTable(table);
