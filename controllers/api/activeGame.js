import { solve, winners } from 'pokersolver';
import express from "express";
const router = express.Router();
// import  User  from '../../models/User.js';
import  ActiveGame  from '../../models/activeGame.js';


router.get()

//Question: is it :bet for this post route?

router.put('/:total_bet', async (req, res) => {
    try {
      const activeGameBets = await ActiveGame.create(totalBetAdd());
        res.status(200).json(activeGameBets);
      ;
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/activeGame', async (req, res) => {
  try {
    const activeGameCurrent = await ActiveGame.destroy({
      where: {
        id: 1,
      },
    });

    if(!activeGameCurrent){
      res.status(404).json({message :'No game currently being played!'});
      return;
    }

    res.status(200).json(activeGameCurrent);
  } catch (err){
    res.status(500).json(err);
  }
});


// make sure to grab the input from front end in an array in an object ("type", "amount")
  const totalBetAdd = (userInput) => {

    let totalBet;
    switch (userInput.type){
      case "ante":
        ante(userInput.amount);
        break;
      case "pair-plus":
          pairPlus(userInput.amount);
          break;
      case "bet":
          bet(userInput.amount);
          break;
    };

    const ante = (amount) => {
      totalBet += amount;
      return totalBet;
    }

    const pairPlus = (amount) => {
      totalBet += amount;
      return totalBet;
    }

    const bet = (amount) => {
      totalBet += amount;
      return totalBet;
    }
     return totalBet;
  }