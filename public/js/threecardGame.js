import router from "../../controllers";

const cardContainer = document.querySelector('.card-container');


let betAmount;


//start game button calls fetch for GET route for active game
// PUT wallet amount in active (foriegn key)
//call for GET Route Card = randomize, sanatize with usable names for cards => front
// GET Route for User 
//needs to go to user routes GET request
// onclick of ok put anteAmout into Active Game Route

const startButtonHandler = async (event) => {
    //randomize card for dealer and player and call ante function
    router.get('/User')


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
        //check in backend
        //function to get more money
        if (walletDisplay < anteAmountReq) {
            losersCorner();
        } 

       


    };
};








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
 //query selector for start game button
    .addEventListener('click', startButtonHandler)
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




//start button calls init game that fetches user info 
// displays rank and wallet amount for user
//then ante function is called that compares required ante amount to wallet
//amount and if wallet amount is < anteamount goes to loserscorner module
//if it isnt it calls active game putroute for total amount bet

//then module pops up for optional pair plus bet, if they hit yes
//bet module pops up to increments, lets users increment by 5
// checks wallet amount to make sure that it is not more than wallet
//otherwise does not let them make the bet
//post route to active game total amount bet
// if choose not to make pair plus 
// then cards are shown 
//after cards are shown allow player to bet with same increment function
// check wallet again
// post to total amount bet

//send cards back to cards route for solve hand function
// return who is winner and winning hand
// pop up in module, ok button for module
// event listener here sends simulatanoues requests for 
// incrementing hands won/lost in user and taking the total
// amount bet either out of wallet or comparing the winning hand
// string to payout table function for multipliers for ante and pair plus
// add to wallet whateve results are
// show restart game button that deletes last active game table and calls
// init game function again