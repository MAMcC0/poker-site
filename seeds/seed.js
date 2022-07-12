const sequelize = require('../config/connection');
const { Cards } = require('../models');

const cardsData = require('./cardsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const cards = await Cards.bulkCreate(cardsData, {
        individualHooks: true,
        returning: true
    });

process.exit(0);
};

seedDatabase();