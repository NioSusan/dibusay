'use strict';

module.exports = (sequelize, DataTypes) => {
  var Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    hooks: {
      beforeDestroy: function (food, options) {
        
        sequelize.models.Foods_Tag.destroy({where:{FoodId: food.id}})
      }
    }
  });

  
  // Food.beforeDestroy((food, options)=>{

  //   console.log('before')
  //   foodTag.destroy({where:{FoodId: food.id}})
  // });

  Food.associate = function(models) {
    let User = models.User;
    Food.hasMany(models.Comment, {foreignKey : "FoodId"})
    Food.belongsTo(User, {foreignKey:"userId"})
    Food.belongsToMany(models.Tag, { through: models.Foods_Tag });
  };
  return Food;
};