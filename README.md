# Word-Guess-Game
Word Guess Game is a simple version of a hangman style game. The purpose of this assignment was to create a word guess game using Javascript.

![Picture of game](https://github.com/welljer/Word-Guess-Game/blob/master/assets/images/game.JPG)

[Link to game](https://welljer.github.io/Word-Guess-Game/)

## How to Play:

Press any Alpha key to start game. Non alpha keys are ignored. The theme of the game is US States. 
The game will randomly select a State from its list. 
It will then display a blank word using underscores to represent the letters in the word.

If a correct letter is guessed, the game will reveal the letter in its correct location. 
If an incorrect letter is selected, then it will add the letter to a list on incorrectly guessed letters and decrement the remaining guesses count.

If the user guesses the correct State name before remaining guesses equal zero, then the game increments the number of wins and restarts the game by selecting a new random State and reseting the game parameters.

If the user does not guess the correct State within the allocated number of guesses, then the game resets.

## Technology

* HTML5
* CSS3
* JavaScript
* JQUERY
