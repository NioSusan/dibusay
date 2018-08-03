'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('Food', 'price',{ type: Sequelize.STRING });
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Food', 'price',{ type: Sequelize.STRING });
  }
};
