'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("usuario",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },

      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario");
  }
};