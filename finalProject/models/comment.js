'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    text: DataTypes.STRING,
    author: DataTypes.STRING,
    FoodId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Food, {foreignKey: 'FoodId'})
  };
  return Comment;
};