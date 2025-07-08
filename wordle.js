//Getting words from dataset.js
import data from './dataset.js';
const words = data.words;

const currentDate = new Date();
document.getElementById("today").innerHTML = currentDate.toLocaleDateString();

let wordInPlay
function setWord(){
    const totalWords = 5757;
    const randomNo = Math.floor(Math.random() * totalWords);
    wordInPlay = words[randomNo];
};

function startGame(){
    document.getElementById("openingpage").style.opacity = 0;
}

document.getElementById("start").addEventListener("click", startGame)
document.getElementById("start").addEventListener("click", setWord)

//Playing the game
const validKeys = ['Q','W','E','R','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L',
    'Z','X','C','V','B','N','M',
]
const lastLetter = {1: 5, 2: 10, 3: 15, 4: 20, 5: 25, 6: 30} //Key represents Guess they are on, value is the last letter to enter to guess
const firstLetter = {1: 1, 2: 6, 3: 11, 4: 16, 5: 21, 6: 26}
let currentGuess = 1;
let currentLetter = 1;

function enterOrRemoveLetter(e){
    document.getElementById(currentLetter).innerHTML
    if (validKeys.includes(e.key.toUpperCase()) && currentLetter <= lastLetter[currentGuess.toString()] && document.getElementById(currentLetter).innerHTML === ''){
        document.getElementById(currentLetter).innerHTML = e.key.toUpperCase()
        currentLetter++
    }
    else if (e.key.toUpperCase() === 'BACKSPACE' && currentLetter >= firstLetter[currentGuess.toString()]){
        currentLetter !== firstLetter[currentGuess.toString()] ? currentLetter-- : null;
        document.getElementById(currentLetter).innerHTML = ''
    }
}

document.addEventListener('keydown', enterOrRemoveLetter)
