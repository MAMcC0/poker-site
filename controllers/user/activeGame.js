import Hand from 'pokersolver';
import express from "express";
const router = express.Router();
import  User  from '../../models/User.js';
import  ActiveGame  from '../../models/activeGame.js';


router.get('/', async (req, res) => {
  try {
    const userGame = await User.findByPk( req.session.user_id, 
      {
      attributes: ['rank', 'wallet'],
      
    })
    const user = userGame.get({plain:true})
    console.log(user)
    res.render('threecard', {...user,logged_in:true})
    
  } catch (err) {
    res.status(500).json(err);
  } 
})

router.put('/total_bet', async (req, res) => {
    try {
      console.log(req.body, "this is the body")
      const betToAdd = totalBetAdd(req.body);
      console.log(betToAdd, "this is the bet")
      const activeGameBets = await ActiveGame.update({total_bet: betToAdd}, 
      {
        where: {
          id: req.session.user_id,
        }
      });
        res.status(200).json(betToAdd);
      
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

    let totalBet = 0;
    const ante = (amount) => {
      totalBet += amount;
      return totalBet;
    }
    const bet = (amount) => {
      totalBet += amount;
      return totalBet;
    }
    switch (userInput.type){
      case "ante":
        return ante(userInput.amount);
      case "bet":
         return bet(userInput.amount);
    };
  }

  //call table make data row for card data to be stored


  export default router;