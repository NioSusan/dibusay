'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [{
        name: 'susan',
        password: 'd29e674b947a0f80779113cb5cb93069',
        salt: '35b9722d098aecfa8a87ad7495e1ddbf',
        email: 'susan@mail.com',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'susi',
        password: '52865065be2dc111d3e903df21da364b',
        salt: '56bb2ad13110b3efde6f82bc70ed62be',
        email: 'susi@mail.com',
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'windra',
        password: '8a6c0915602264fac6d98ca2fe3788e9',
        salt: 'a29328f0f456b28b028434c27acd6fbf',
        email: 'windra@mail.com',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Users', null, {});
  }
};
