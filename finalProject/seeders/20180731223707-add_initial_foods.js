'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Food', [
    {
      name : 'Steak',
      price : 10000,
      image : 'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=616fc216eff2732910545ebd5d5018b6&auto=format&fit=crop&w=700&q=60',
      description: 'Plate of steak and broccoli with brown sauce for dinner',
      userId : 1,
      createdAt : new Date,
      updatedAt : new Date
    },
    {
      name : 'Ice Cream',
      price : 20000,
      image : 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a79032b5988e4ac75c36e51d8f734a32&auto=format&fit=crop&w=700&q=60',
      description: 'Pink loganberry popsicles on a table with dried leaves and pinecones',
      userId : 2,
      createdAt : new Date,
      updatedAt : new Date
    },
    {
      name : 'Pesto',
      price : 30000,
      image : 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f791b5847ff52ab502255c37c7e78498&auto=format&fit=crop&w=700&q=60',
      description: 'Bowl of green pesto dip topped with tomatoes, herbs, and flowers',
      userId : 3,
      createdAt : new Date,
      updatedAt : new Date
    },
    {
      name : 'Pasta',
      price : 40000,
      image : 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77085791f82bf96b345de27c64e52e9e&auto=format&fit=crop&w=700&q=60',
      description: 'pasta with pancetta on a white ',
      userId : 2,
      createdAt : new Date,
      updatedAt : new Date
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Food', null, {})
    }
  }
};
