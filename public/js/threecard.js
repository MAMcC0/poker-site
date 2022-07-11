// require poker solver
// require holdem


// start round function
    // function needs to ask for ante bet
            //switch case based on rank for how much the ante 
    // prompt if they want to also place a pair plus bet
    // if they chose yes prompt bet amount
    // show user cards
    //can decide an additional bet or fold

    //if click bet button require bet to match ante or higher
    //if fold call function to check cards

    //function to check cards

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




//event listener for start function
//event listener for play again function
//event listener for bet button
// event listener for fold button


document
    .addEventListener('click',initGame)
    .addEventListener('click', restartGame)
    .addEventListener('click', bet)
    .addEventListener('click', fold)