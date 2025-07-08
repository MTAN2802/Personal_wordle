//Getting words from dataset.js
import data from './dataset.js';
const words = data.words;

const currentDate = new Date();
document.getElementById("today").innerHTML = currentDate.toLocaleDateString();

let wordInPlay = {}
function setWord(){
    const totalWords = 5757;
    const randomNo = Math.floor(Math.random() * totalWords);
    for (let i = 0; i < words[randomNo].length; i++){
        wordInPlay[i] = words[randomNo][i];
    }
}

function startGame(){
    if (document.getElementById("openingpage").style.opacity !== '0'){
        setWord()
    }
    document.getElementById("openingpage").style.opacity = 0;
    document.getElementById("openingpage").style.zIndex = -10;
    console.log(wordInPlay)
}

document.getElementById("start").addEventListener("click", startGame)

//Playing the game
const validKeys = ['Q','W','E','R','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L',
    'Z','X','C','V','B','N','M',
]
const lastLetter = {1: 5, 2: 10, 3: 15, 4: 20, 5: 25, 6: 30} //Key represents Guess they are on, value is the last letter to enter to guess
const firstLetter = {1: 1, 2: 6, 3: 11, 4: 16, 5: 21, 6: 26}
let currentGuess = 1;
let currentLetter = 1;
let guessedWord = []

function enterOrRemoveLetter(e){
    //if pressed key is valid and the current tile is not more than the last possible tile and the tile is empty
    if (validKeys.includes(e.key.toUpperCase()) && currentLetter <= lastLetter[currentGuess.toString()] && document.getElementById(currentLetter).innerHTML === ''){
        document.getElementById(currentLetter).innerHTML = e.key.toUpperCase()
        currentLetter++
        guessedWord.push(e.key.toLowerCase())
    }
    else if (e.key === 'Backspace' && currentLetter >= firstLetter[currentGuess.toString()]){
        currentLetter !== firstLetter[currentGuess.toString()] ? currentLetter-- : null;
        guessedWord.pop()
        document.getElementById(currentLetter).innerHTML = '';
    }
}

function guessWord(e){
    if (e.key === 'Enter' && guessedWord.length === 5){
            if (!words.includes(guessedWord.join(''))){
                alert('Word not in list');
            }
            else{
                howClose();
                guessedWord = [];
            }
    }
}

function howClose(){
    let currTile = firstLetter[currentGuess.toString()]
    let obj = {};
    let word = Object.values(wordInPlay);
    for (let i=0; i < guessedWord.length; i++){
        if (Object.values(wordInPlay).includes(guessedWord[i]) && guessedWord[i] === wordInPlay[i]){
            document.getElementById(currTile).style.backgroundColor = 'green'
            document.getElementById(currTile).style.borderColor = 'green'
            word = word.filter(letter => letter !== guessedWord[i])
        }
        else if (Object.values(wordInPlay).includes(guessedWord[i])){
            obj[currTile] = guessedWord[i]
        }
        else{
           document.getElementById(currTile).style.backgroundColor = 'gray' 
        }
        currTile++
    }

    for (const key in obj){
        if (word.includes(obj[key])){
            document.getElementById(key).style.backgroundColor = '#d1bf4b';
            document.getElementById(key).style.borderColor = '#d1bf4b';
        }
        
    }
    currentGuess++
}

document.addEventListener('keydown', enterOrRemoveLetter)
document.addEventListener('keydown', guessWord)
