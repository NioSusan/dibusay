'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tags', [{
        name: 'Western',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Japanese',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Sweets & Desserts',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Beverage',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Chinese',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Indonesian',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};