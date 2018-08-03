'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Food', 'userId', {type: Sequelize.INTEGER});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Food', 'userId', {type: Sequelize.INTEGER});
  }
};
