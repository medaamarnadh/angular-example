'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Student', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      tableName:'Student'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Student');
  }
};