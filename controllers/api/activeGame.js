import { solve, winners } from 'pokersolver';
import express from "express";
const router = express.Router();
// import  User  from '../../models/User.js';
import  ActiveGame  from '../../models/activeGame.js';


router.get()

//Question: is it :bet for this post route?

router.post('/:bet', async (req, res) => {
    try {
      const activeGameData = await ActiveGame.create(req.body);
  
      req.session.save(() => {
        req.session.activeGame_bet = activeGameData.bet;
  
        res.status(200).json(activeGameData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  