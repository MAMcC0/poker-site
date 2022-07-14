import User from '../models/User.js';
import express from "express";
const router = express.Router();
import withAuth from '../utils/auth.js';


router.get('/', withAuth, async (req, res) => { 
     try {
       const dbGameLanding = await User.findAll({
             attributes: ['wallet', 'user_name'],
       });
  
       const players = dbGameLanding.map((player) =>
         player.get({ plain: true })
       );
       res.render('homepage', {
         players,
         loggedIn: req.session.loggedIn
       });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => { 
  try {
    const dbGameLanding = await User.findAll({
          attributes: ['wallet', 'user_name'],
    });

    const players = dbGameLanding.map((player) =>
      player.get({ plain: true })
    );
    res.render('homepage', {
      players,
      loggedIn: req.session.loggedIn
    });
 } catch (err) {
   console.log(err);
   res.status(500).json(err);
 }
})

export default router;