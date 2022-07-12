import User from '../models/User.js';
import express from "express";
const router = express.Router();

router.get('/', async (req, res) => {
    // try {
    //   const dbGameLanding = await User.findAll({
    //         attributes: ['money', 'username'],
    //   });
  
    //   const players = dbGameLanding.map((player) =>
    //     player.get({ plain: true })
    //   );
    //   res.render('homepage', {
    //     players,
    //     loggedIn: req.session.loggedIn,
    //   });
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
  //  }
  res.render('homepage')
  });

  const faces = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  const suits = ["clubs", "diamonds", "spades", "hearts"];
  
  
  function getRandomCardImgSrc() {
      const randFace = faces[Math.floor(Math.random()*faces.length)];
      const randSuit = suits[Math.floor(Math.random()*suits.length)];
      const imgUrl = randFace + "_of_" + randSuit + ".svg";
      return imgUrl;
  }
  
  router.get('/threecardpoker', (req, res) => {
    res.render('threecard', {card1: getRandomCardImgSrc(), card2: getRandomCardImgSrc(), card3: getRandomCardImgSrc()});
  });
  


export default router;