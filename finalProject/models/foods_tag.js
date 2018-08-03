'use strict';
module.exports = (sequelize, DataTypes) => {
  var Foods_Tag = sequelize.define('Foods_Tag', {
    FoodId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {});
  Foods_Tag.associate = function(models) {
    // associations can be defined here
  };
  return Foods_Tag;
};