'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        is: {
          args:/^\w+@[a-z]+\.[a-z]{3}$/,
          msg: "Email format is incorrect"
        },
        isUnique: (email, next) => {
          User.find({
              where:{email:email},
              attributes:["id"]
          })
              .done((error, user)=>{
                if(error)
                  return next("Email address already in use");
                if(user)
                  return next("Email address already in use!");
                next();
              });
            }
          }
        }
  }, {});


  User.associate = function(models) {
    let Food = models.Food;
    User.hasMany(Food,{foreignKey:"userId"})
  };
  return User;
};