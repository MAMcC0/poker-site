import User from './User.js';
import ActiveGame from './activeGame.js';
import UserStats from './userstats.js';



ActiveGame.hasOne(User, {
    foriegnKey: 'user_id',
});

UserStats.hasMany(User, {
    foreignKey: 'user_id',
})