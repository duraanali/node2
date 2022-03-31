exports.seed = function(knex, Promise) {
  return knex('restaurants').insert([
    { name: 'Salama Restaurant', location: 'Saint Cloud, MN', owner_id: 1, created: '2022-03-30', updated: '2022-03-30' },
    { name: 'Afro Deli', location: 'Minnesota', owner_id: 2, created: '2022-03-30', updated: '2022-03-30' },
    { name: 'Pizza Hut', location: 'Saint Paul, MN', owner_id: 1, created: '2022-03-30', updated: '2022-03-30' }
  ]);
};
