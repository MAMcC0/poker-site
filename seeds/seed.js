import sequelize from '../config/connection.js';
import  User  from '../models/User.js';

import userData from './userProfileData.json' assert {type: 'json'};

const seedDatabase = async () => {
     await sequelize.sync();

     await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

process.exit(0);
};

seedDatabase();