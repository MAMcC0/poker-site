

let anteAmount = {
    type: 'ante',
};

let betAmount = {
    type: 'bet',
}

let rank;
let wallet;

const startButtonHandler = async () => {
    console.log("inside function")
    //randomize card for dealer and player and call ante function
    
        const response = await fetch(`/user/users/data`, {
            method: 'GET',
        });
        if (response.ok) {
           
             const json = await response.json();
             console.log(json);
            let rank = json.rank;
            let wallet = json.wallet;
            console.log(rank)
            const ante = (rank) => {
                console.log(typeof rank);
                switch (rank) {
                    case "C-game":
                        anteAmount.amount = 5;
                        break;
                    case "Backing":
                        anteAmount.amount = 30;
                        break;
                    case "Underdog":
                        anteAmount.amount = 50;
                        break;
                    case "Joker":
                        anteAmount.amount = 75;
                        break;
                    case "Manaic":
                        anteAmount.amount = 150;
                        break;
                    case "High-Roller":
                        anteAmount.amount = 300;
                        break;
                    case "The Whale":
                        anteAmount.amount = 1000;
                        break;

                }
            };
            ante(rank);
            console.log(anteAmount);
            if (wallet < anteAmount.amount) {
                losersCorner(); 
            } else {
                const requireAnteAmount = (ante) => {
                    let anteMsg = `The ${rank} ante is $${ante} to play`;
                    return anteMsg;
                }
                requireAnteAmount(anteAmount.amount);
            }
        } else {
            console.error("Failed to fetch user information");
        }

    };


const anteOkHandler = async (event) => {
    if (event.target) {
        const response = await fetch(`/user/game/total_bet`, {
            method: 'PUT',
            body: JSON.stringify(anteAmount),
            headers: { 'Content-Type': 'application/json' },
        });

        //ask if response ok for boolean or need a promise
        if (response.ok) {
            let total_bet = response;
            return total_bet;
        }
        else {
            console.error("Failed to add ante amount to total bet")
        }
    };
    showCards()
}

const showCards = async () => {

    const response = await fetch(`/user/cards/`, {
        method: 'GET',


    });
    const json = await response.json();
    console.log(json)
    // is this how we render cards?
    if (response.ok) {

        let card1 = json.cardSvg[0];
        let card2 = json.cardSvg[1];
        let card3 = json.cardSvg[2];
    } else {
        console.error('Could not fetch cards');
    };
    //render buttons for bet or fold
}

const bet = async (event) => {
    event.preventDefault();
    const betInput = document.querySelector('#bet-amount').value.trim();

    betAmount.amount = betInput;

    if (betInput < wallet){
        return //message not allowing submission 
    } else {
    if (betInput) {
        const response = await fetch(`/user/game/total_bet`, {
            method: 'PUT',
            body: betAmount,
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            let total_bet = response;
            return total_bet;
        }
        else {
            console.error("Failed to add ante amount to total bet")
        }

    }}
    solve()
}


const solve = () => {
     
}

const restartGame = async (event) => {
    
    if(event){
        const response = await fetch('/user/game/activeGame', {
            method: 'DELETE'
        });

        if(response.ok){
            document.location.replace('/user/game');
        } else {
            alert('Failed to restart game');
        }
    }
}

//ante payout table
// Straight Flush – 5:1 payout, odds of 1 in 453
// Three-of-a-Kind – 4:1 payout, odds of 1 in 415
// Straight – 2:1 payout, odds of 1 in 29.6

//plain bets 2:1




document //add query selectors still
    //query selector for start game button
    .querySelector('.play-btn')
    .addEventListener('click', startButtonHandler)
 document
 .querySelector('.ante-btn')
     .addEventListener('click', anteOkHandler)
// document
//     .addEventListener('click', bet)
// document
//     .addEventListener('click', solve())

// document
//     .addEventListener('click', restartGame())






//start button calls init game that fetches user info 
// displays rank and wallet amount for user
//then ante function is called that compares required ante amount to wallet
//amount and if wallet amount is < anteamount goes to loserscorner module
//if it isnt it calls active game putroute for total amount bet

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