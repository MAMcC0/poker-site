import { solve, winners } from 'pokersolver';
import { rank, wallet } from '../../models/User.js';
const cardContainer = document.querySelector('.card-container');

let anteAmount = 0;
let playerAnte;

function initGame() {
    //randomize card for dealer and player and call ante function
    function ante() {
        switch (rank) {
            case "C-Game":
                anteAmount = 5;
                break;
            case "Backing":
                anteAmount = 30;
                break;
            case "Underdog":
                anteAmount = 50;
                break;
            case "Joker":
                anteAmount = 75;
                break;
            case "Manaic":
                anteAmount = 150;
                break;
            case "High-Roller":
                anteAmount = 300;
                break;
            case "The Whale":
                anteAmount = 1000;
                break;

        }
        //function to get more money
        if (wallet < anteAmount) {
            losersCorner();
        } else {
            playerAnteMatch(anteAmount);
        };

        function playerAnteMatch(anteAmount) {
            //figure out how to match ante function
            //store playerAnteMatch in var
        }

        async function showCards() {
            await playerAnteMatch
            // optional pair plus bet
            //then renderplayerCards

            playerAction()
        };
    }

    function playerAction(event) {
        switch (event.target) {
            case "Bet":
                bet();
                break;
            case "Fold":
                fold();
                break;
            default:
                fold();
                break;

        }
    };
}



function bet() {
    //render bet module
    //starts bet @ ante amount
    // text for incremening bet by 5 dollars
    // check to make sure they're not betting more than they have with if/else statement
    // if so show message saying that cannot bet more than they have
    // submit
    // store in current amount wagered
    // call solve hand function
    solveHand();
}

const fold = async () => {

    //add if statement 
    let lostMoney = playerAnteMatch + pairPlusBet;
    let newWallet = wallet - lostMoney;

    const response = await fetch(`/api/user/`, { //grab just a section to update
        method: 'POST',
    });

    // figure out how to add new wallet to post request for user 
    //increment hands lost in user as well
}



function restartGame() {
    initGame();
}

function convertCardsNames (event){
    if(event.target.className === "players-card"){
        console.log(event.target);
    }


    
}



function solveHand() {
    let playerHand = solve("array", 'threecard', true);
    let dealerHand = solve("dealerArray", 'threecard', true);
    let winner = winners([playerHand, dealerHand]);

    if (winner === playerHand) {
        if (pairPlusBet) {
            let gainedMoney = antePayout() + pairPlusPayout();
            let newWallet = wallet + gainedMoney;

            //post request for additional money
        } else {
            let newWallet = wallet + antePayout();
        }

    } else {
        fold();
    }

    //put request for wallet 
}

function antePayout (){

}
//depending on winner reference ante paytable and bet paytable

//function to check if they got anything pair plus and increment money to paytable
//One pair: 1 to 1
// Flush: 4 to 1
// Straight: 5 to 1
// Trips: 30 to 1
// Any straight flush: 40 to 1
// Mini Royal Flush (Ace, King, Queen of the same suit): 200 to 1


//ante payout table
// Straight Flush – 5:1 payout, odds of 1 in 453
// Three-of-a-Kind – 4:1 payout, odds of 1 in 415
// Straight – 1:1 payout, odds of 1 in 29.6

//plain bets 1:1




document //add query selectors still
    .addEventListener('click', initGame)
document
    .addEventListener('click', restartGame)
document
    .addEventListener('click', bet)
document
    .addEventListener('click', fold)
document
    .addEventListener('click', incrementBet)
document
    .addEventListener('click', decrementBet)
document
    .addEventListener('click', matchAnte)
document
.addEventListener('click', convertCardsNames);

export default initGame


// active game table
//user hands
//dealer hands
//ante bet
// bet
// fold boolen
// money lost 

//card database
//card suit
//card face


//santize cards on backend on start game
//bet api call to the database to increase the pot
//increment/decrement money
// increment/decrement wins