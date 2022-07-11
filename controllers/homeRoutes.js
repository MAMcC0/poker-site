const User = require('../models/User');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      const dbGameLanding = await User.findAll({
            attributes: ['money', 'username'],
      });
  
      const players = dbGameLanding.map((player) =>
        player.get({ plain: true })
      );
      res.render('homepage', {
        players,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });




module.exports = router;