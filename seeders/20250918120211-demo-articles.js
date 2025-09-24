'use strict';

const author = require('../models/author');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Articles', [
     {
       name: 'Introduction to Ashtanga',
       slug: 'introduction-to-ashtanga',
       image: 'ashtanga.jpg',
       body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       published: '2020-01-08 15:02:30',
       author_id: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
     await queryInterface.bulkInsert('Articles', [
     {
       name: 'Morning vinyasa flow routine',
       slug: 'morning-vinyasa-flow-routine',
       image: 'morning.jpg',
       body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       published: '2020-04-14 15:02:41',
       author_id: 3,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
     await queryInterface.bulkInsert('Articles', [
     {
       name: 'Secrets of a yoga teacher',
       slug: 'secrets-of-a-yoga-teacher',
       image: 'yoga-teacher.jpg',
       body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       published: '2060-05-28 15:02:55',
       author_id: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
