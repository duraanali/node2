const db = require('../../data/dbConfig');

module.exports = {
  find,
  findById,
  findByOwner,
  add,
  remove,
  update
};

function find() {
  let rows = db('restaurants')
  return rows;
}

function findById(id) {
  return db('restaurants')
    .where({ id })
    .first();
}

function findByOwner(owner_id) {
  return db('restaurants')
    .where({ owner_id })
}

async function add(restaurant) {
  const [id] = await db('restaurants').insert(restaurant);
  return findById(id);
}

function remove(id) {
  return db('restaurants')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('restaurants')
    .where({ id })
    .update(changes, '*');
}
