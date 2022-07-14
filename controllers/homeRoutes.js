import User from '../models/User.js';
import express from "express";
const router = express.Router();
import withAuth from '../utils/auth.js';

router.get('/', async (req, res) => { 
     try {
       const dbGameLanding = await User.findAll({
             attributes: ['wallet', 'user_name'],
       });
       
       const players = dbGameLanding.map((player) =>
         player.get({ plain: true })
       );
       res.render('homepage', {
         players,
         loggedIn: req.session.loggedIn,
        wallet: dbGameLanding.wallet,
        user_name: dbGameLanding.user_name
       });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
})


router.get('/login', (req, res) => { 
   
      // If the user is already logged in, redirect the request to another route
      if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
      res.render('login');

  

})

export default router;