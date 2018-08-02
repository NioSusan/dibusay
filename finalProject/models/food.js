'use strict';
module.exports = (sequelize, DataTypes) => {
  var Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  Food.associate = function(models) {
    let User = models.User;
    Food.hasMany(models.Comment, {foreignKey : "FoodId"})
    Food.belongsTo(User, {foreignKey:"userId"})
    Food.belongsToMany(models.Tag, { through: models.Foods_Tag });
  };
  return Food;
};