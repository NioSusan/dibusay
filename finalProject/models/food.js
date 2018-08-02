'use strict';
module.exports = (sequelize, DataTypes) => {
  var Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Food.associate = function(models) {
    Food.hasMany(models.Comment, {foreignKey : "FoodId"})
    Food.belongsToMany(models.Tag, { through: models.Foods_Tag });
  };
  return Food;
};