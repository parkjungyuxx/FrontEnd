
import { DataTypes } from 'sequelize'

const Users = (sequelize) => sequelize.define("Users", {
  email: {
    type: DataTypes.STRING(100), // varchar(100), 
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100), 
    allowNull: false,
  }
}, {
  tableName: 'dn_users',
  charset: 'utf8', 
  timestamps: true
})

export default Users