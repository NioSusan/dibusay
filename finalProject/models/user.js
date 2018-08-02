'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    let Food = models.Food;
    User.hasMany(Food,{foreignKey:"userId"})
  };
  return User;
};