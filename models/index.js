import User from './User.js';
import ActiveGame from './activeGame.js';


ActiveGame.hasOne(User, {
    foriegnKey: 'user_id',
});

