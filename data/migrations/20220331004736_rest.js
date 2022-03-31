exports.up = function (knex) {
  return knex.schema
    .createTable("owners", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("email").notNullable();
      tbl.string("created").notNullable();
      tbl.string("updated").notNullable();
    })
    .createTable("restaurants", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("location").notNullable();
      tbl
        .integer("owner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("owners")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        tbl.string("created").notNullable();
        tbl.string("updated").notNullable();
    })
    .createTable("ratings", (tbl) => {
      tbl.increments();
      tbl
        .integer("restaurant_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("restaurants")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("rating").notNullable();
        tbl.string("created").notNullable();
        tbl.string("updated").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("owners")
    .dropTableIfExists("restaurants")
    .dropTableIfExists("ratings");
};
