const {faker} = require('@faker-js/faker')
'use strict';

const boilerManufacturers = [
  'Ariston',
  'Chaffot',
  'Baxi',
  'Bong',
  'Saunier',
  'Banderus',
  'Henry',
  
];
const partsManufacturers = [
  'Azure',
  'Gloves',
  'Cambri',
  'Salmon',
  'Montana',
  'Lesly',
  'Radian',
  'Gasoline',
  'Croatia',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize){
    return queryInterface.bulkInsert(
      'BoilerParts', 
      [...Array(100)].map(() => ({
        boiler_manufacturer: boilerManufacturers[
          Math.floor(Math.random() * boilerManufacturers.length)
        ],
        parts_manufacturer: partsManufacturers[
          Math.floor(Math.random() * partsManufacturers.length)
        ],
        price: faker.number.int(10000),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: JSON.stringify([...Array(2)].map(() => `${faker.image.url()}?random=${faker.number.bigInt(30)}`)),
        vendor_code: faker.internet.password(),
        in_stock: faker.number.int(40),
        bestsellers: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.number.int(3),
        compalibility: faker.lorem.sentence(7),
        createdAt: new Date(),
        updatedAt: new Date()
})),
    );
  },
  async down(queryInterface, Sequelize){
    return queryInterface.bulkDelete('BoilerParts', null, {});
  }
};
