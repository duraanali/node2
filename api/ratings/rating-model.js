const db = require('../../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  let rows = db('ratings')
  return rows;
}

function findById(id) {
  return db('ratings')
    .where({ id })
    .first();
}

async function add(rating) {
  const [id] = await db('ratings').insert(rating);
  return findById(id);
}

function remove(id) {
  return db('ratings')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('ratings')
    .where({ id })
    .update(changes, '*');
}
