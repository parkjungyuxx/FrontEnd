'use strict';
import { Sequelize } from 'sequelize';
import dbConfig from '../config/config.js'
import Users from './user.js';


const config = dbConfig['development']
console.log(config)


export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)
// db 연결 준비 끝

const db = {}
db.Users = Users
// 테이블 정의한 model이 들어가는 공간

Object.keys(db).forEach(modelName => {
  db[modelName] = db[modelName](sequelize)
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// 테이블 간의 관계를 정의

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db
