'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { name: 'Tecnologias Back-end', position: 1, created_at: new Date(), updated_at: new Date() },
      { name: 'Tecnologias Front-end', position: 2, created_at: new Date(), updated_at: new Date() },
      { name: 'Ferramentas de Desenvolvimento', position: 3, created_at: new Date(), updated_at: new Date() },
      { name: 'Soft-skills', position: 4, created_at: new Date(), updated_at: new Date() },
      { name: 'Carreira', position: 5, created_at: new Date(), updated_at: new Date() },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
};
