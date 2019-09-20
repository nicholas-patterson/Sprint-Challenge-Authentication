const db = require("../database/dbConfig");

module.exports = {
  findById,
  register,
  login
};

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function register(newUser) {
  return db("users")
    .insert(newUser)
    .then(([id]) => {
      return findById(id);
    });
}

function login(filter) {
  return db("users")
    .where(filter)
    .first();
}
