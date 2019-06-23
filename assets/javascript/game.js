"use strict"
$(document).ready(function() {
// Setting up and declaring variables
    let possibleWords = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

    const maxGuess = 10;
    let guessedLetters= [];
    let guessingWord= [];
    let wordToMatch;
    let numGuess;
    let wins= 0;
    let pauseGame= false

    resetGame()

    document.onkeypress = event => {
            /*this will check if a letter and is within the queued word,
            will also convert the letter to upper case */
        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase())
        }
    }

    function checkForLetter(letter) {
        let foundLetter = false

        for (let i=0, j= wordToMatch.length; i<j; i++) {
            if (letter === wordToMatch[i]) {
                guessingWord[i] = letter
                foundLetter = true
                if (guessingWord.join("") === wordToMatch) {
                    wins++
                    pauseGame = true
                    //resets game in 3 secs if win will update win counter
                    updateDisplay()
                    setTimeout(resetGame,3000)
                }
            }
        }

        if (!foundLetter) {
            if (!guessedLetters.includes(letter)) {
                guessedLetters.push(letter)
                numGuess--
            }
            if (numGuess === 0) {
                guessingWord = wordToMatch.split()
                pauseGame = true
                setTimeout(resetGame, 200)
            }
        }

        updateDisplay()

    }
    function isAlpha (ch){
        return /^[A-Z]$/i.test(ch);
    }

    function resetGame() {
        numGuess = maxGuess
        pauseGame = false

        wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase()
        console.log(wordToMatch)

        guessedLetters = []
        guessingWord = []

        for (var i=0, j=wordToMatch.length; i < j; i++){
            if (wordToMatch[i] === " ") {
                guessingWord.push(" ")
            } else {
                guessingWord.push("_")
            }
        }

        updateDisplay()
    }

    function updateDisplay () {
        document.getElementById("totalWins").innerText = wins
        document.getElementById("currentWord").innerText = guessingWord.join("")
        document.getElementById("remainingGuesses").innerText = numGuess
        document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ")
    }
})