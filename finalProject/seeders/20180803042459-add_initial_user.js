'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [{
        username: 'susan',
        password: '1909d529f01e579ab6e5c518ba50747b',
        salt: 'e07699cad3d27e12c0a86ec4fd57c171',
        email: 'susan@mail.com',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        username: 'susi',
        password: '52865065be2dc111d3e903df21da364b',
        salt: '56bb2ad13110b3efde6f82bc70ed62be',
        email: 'susi@mail.com',
        createdAt: new Date,
        updatedAt: new Date
      },{
        username: 'windra',
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
