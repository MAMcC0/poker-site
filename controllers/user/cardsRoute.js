 import express from "express";
 import Cards from "../../models/cards.js";
 const router = express.Router();
 import pokersolver from 'pokersolver';
import ActiveGame from "../../models/activeGame.js";
 const Hand = pokersolver.Hand

//route from homepage start button to threecard page
 router.get('/threecard', (req,res) => {
     console.log("wowow");
    try {
       res.render('threecard');   
    } catch (err) {
        res.json(err)
    }
});


 router.get('/', (req,res) => {
     try {
        res.json(genCardPool(_CARD_ARRAY));   
     } catch (err) {
         res.json(err)
     }
 });

 router.put('/playerWon', async (req,res) => {
    try {
        const gameInfo = solveGame(req.body)
        const ag = await ActiveGame.update(
            {
                playerWon: gameInfo.won
                
            },
            {
                where: {id:1}
            }
            )
            res.json(gameInfo)
            }
            catch (err) {
                res.json(err)
            }
});

// make a put route to pass playerWon boolean
// call solve function on 'put' route
// polish get route

const _CARD_ARRAY = [
    {
        "suit":"c",
        "face":"A",
        "svg_url":"ace_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"A",
        "svg_url":"ace_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"A",
        "svg_url":"ace_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"A",
        "svg_url":"ace_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"2",
        "svg_url":"2_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"2",
        "svg_url":"2_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"2",
        "svg_url":"2_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"2",
        "svg_url":"2_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"3",
        "svg_url":"3_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"3",
        "svg_url":"3_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"3",
        "svg_url":"3_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"3",
        "svg_url":"3_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"4",
        "svg_url":"4_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"4",
        "svg_url":"4_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"4",
        "svg_url":"4_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"4",
        "svg_url":"4_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"5",
        "svg_url":"5_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"5",
        "svg_url":"5_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"5",
        "svg_url":"5_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"5",
        "svg_url":"5_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"6",
        "svg_url":"6_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"6",
        "svg_url":"6_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"6",
        "svg_url":"6_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"6",
        "svg_url":"6_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"7",
        "svg_url":"7_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"7",
        "svg_url":"7_of_diamondss.svg"
    },
    {
        "suit":"h",
        "face":"7",
        "svg_url":"7_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"7",
        "svg_url":"7_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"8",
        "svg_url":"8_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"8",
        "svg_url":"8_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"8",
        "svg_url":"8_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"8",
        "svg_url":"8_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"9",
        "svg_url":"9_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"9",
        "svg_url":"9_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"9",
        "svg_url":"9_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"9",
        "svg_url":"9_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"T",
        "svg_url":"10_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"T",
        "svg_url":"10_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"T",
        "svg_url":"10_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"T",
        "svg_url":"10_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"J",
        "svg_url":"jack_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"J",
        "svg_url":"jack_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"J",
        "svg_url":"jack_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"J",
        "svg_url":"jack_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"Q",
        "svg_url":"queen_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"Q",
        "svg_url":"queen_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"Q",
        "svg_url":"queen_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"Q",
        "svg_url":"queen_of_spades.svg"
    },
    {
        "suit":"c",
        "face":"K",
        "svg_url":"king_of_clubs.svg"
    },
    {
        "suit":"d",
        "face":"K",
        "svg_url":"king_of_diamonds.svg"
    },
    {
        "suit":"h",
        "face":"K",
        "svg_url":"king_of_hearts.svg"
    },
    {
        "suit":"s",
        "face":"K",
        "svg_url":"king_of_spades.svg"
    }
]

//Random card generator 
const genCardPool = (arr) => {
    const cardPool = []
    for (let i = 0; i < 6; i++) {
        const randNum = Math.floor(Math.random() * arr.length)
        const randomCard = arr[randNum]
        if (cardPool.indexOf(randomCard) === -1) {
            cardPool.push(randomCard)
        } else {
            console.log("duplicate")
            i-- ;          
        }
    }
    console.log (cardPool)
    const cleanCards = [];
    const playerCardSvgUrl = [];

    for (let i = 0; i < cardPool.length; i++) {
        const suit = cardPool[i].suit
        const face = cardPool[i].face
        const svg_url = cardPool[i].svg_url 
        
        const suitFace = `${face}${suit}`
        cleanCards.push(suitFace)

        const svgURL = `${svg_url}`
        playerCardSvgUrl.push(svgURL)
        
        
    }
    console.log(playerCardSvgUrl)
    console.log(cleanCards)
    const cardSvg = playerCardSvgUrl.slice(0,3)
    const playerCards = cleanCards.slice(0,3)
    const dealerCards = cleanCards.slice(3,6)
    
    return { cardSvg, playerCards, dealerCards }
    
}

// console.log(genCardPool(_CARD_ARRAY).cardSvg)

console.log('-----------------------------------')


const solveGame = (randomCards) => {
    let playerHand = randomCards.playerCards
    let dealerHand = randomCards.dealerCards
    
    console.log(playerHand);
    console.log(dealerHand);
    
    var hand1 = Hand.solve(playerHand,'threecard',false);
    var hand2 = Hand.solve(dealerHand,'threecard',true);
    
    hand1.index = 0;
    hand2.index = 1;
    var winner = Hand.winners([hand1, hand2]); // hand2
    
    console.log(winner[0].index)
    
    let gameWinner;
    if (winner[0].index === 0) {
        gameWinner = hand1
        console.log(gameWinner.name)
        console.log(gameWinner.descr)
        return {won: true, name: gameWinner.name, descr: gameWinner.descr}
    } else {
        gameWinner = hand2
        console.log(gameWinner.name)
        console.log(gameWinner.descr)
        return {won: false, name: gameWinner.name, descr: gameWinner.descr}
    }
    
    
    
    
}

solveGame(genCardPool(_CARD_ARRAY))
export default router;




