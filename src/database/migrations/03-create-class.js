const table = "class";

exports.up = async (knex) =>
  knex.schema.createTable(table, (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.text("name").unique().notNullable();
  });

exports.down = async (knex) => knex.schema.dropTable(table);
