"use strict";
const Sequelize = require("sequelize");
const dbConfig = require("../config/config.js"); 
const Users = require("./user.js"); 

const Sequelize = require("sequelize");
const db = {};
db.Users = Users(sequelize);

Object.keys(db).forEach((modelName) => {
  db[modelName](sequelize);
});

const config = dbConfig["development"];
console.log(config);
export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
