const table = "article";

exports.up = async (knex) =>
  knex.schema.createTable(table, (t) => {
    t.uuid("id").defaultTo(knex.raw("uuid_generate_v4()"));
    t.text("title").notNullable();
    t.text("text").notNullable();
    t.text("score");
    t.text("date");
    t.uuid("author").notNullable().references("id").inTable("author");
    t.uuid("team").notNullable().references("id").inTable("team");
    t.uuid("class").notNullable().references("id").inTable("class");
  });

exports.down = async (knex) => knex.schema.dropTable(table);
