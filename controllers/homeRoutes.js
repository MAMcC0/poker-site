import User from '../models/User.js';
import express from "express";
const router = express.Router();
import withAuth from '../utils/auth.js';

// router.get('/', withAuth, async (req, res) => { 
//      try {
//        const dbGameLanding = await User.findAll({
//              attributes: ['wallet', 'user_name'],
//        });
       
//        const players = dbGameLanding.map((player) =>
//          player.get({ plain: true })
//        );
//        console.log(players, "This is what you should see")
//        res.render('homepage', {
//          players,
//          loggedIn: req.session.loggedIn,
//         wallet: players.wallet,
//         user_name: players.user_name
//        });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// })

router.get('/', withAuth, async (req, res) => {
  try {
    const userGame = await User.findByPk( req.session.user_id, 
      {
      attributes: ['rank', 'wallet'],
      
    })
    const user = userGame.get({plain:true})
    console.log(user)
    res.render('homepage', {...user,logged_in:true})
    
  } catch (err) {
    res.status(500).json(err);
  } 
});


router.get('/login', (req, res) => { 
   
      // If the user is already logged in, redirect the request to another route
      if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
      res.render('login');

  

})

export default router;