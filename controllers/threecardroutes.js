import express from "express";
const router = express.Router();

const faces = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
const suits = ["clubs", "diamonds", "spades", "hearts"];


function getRandomCardImgSrc() {
    const randFace = faces[Math.floor(Math.random()*faces.length)];
    const randSuit = suits[Math.floor(Math.random()*suits.length)];
    const imgUrl = randFace + "_of_" + randSuit + ".svg";
    return imgUrl;
}

router.get('/threecardpoker', (req, res) => {
  res.render('threecardviews/threecard', {card1: getRandomCardImgSrc(), card2: getRandomCardImgSrc(), card3: getRandomCardImgSrc()});
});



export default router;


