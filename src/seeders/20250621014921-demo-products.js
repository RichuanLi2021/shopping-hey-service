'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Products', [
      {
        title: "Wireless Headphones",
        description: "Noise cancelling over-ear headphones",
        image: "https://res.cloudinary.com/da3w329cx/image/upload/v1683056487/samples/landscapes/nature-mountains.jpg",
        price: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Smart Watch",
        description: "Smart wearable with health tracking",
        image: "https://res.cloudinary.com/da3w329cx/image/upload/v1683056500/cld-sample-5.jpg",
        price: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Laptop",
        description: "14-inch Full HD display, 256GB SSD",
        image: "https://res.cloudinary.com/da3w329cx/image/upload/v1683056499/cld-sample-3.jpg",
        price: 600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
