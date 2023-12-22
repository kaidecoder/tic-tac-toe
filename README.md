I need to make a gameboard - use a table?? a grid?DONE:
Then I need to create my players
I need logic for the gameboard for when someone wins
I need to design my player movement

everything goes inside an event listener
i need to know whose turn it is first(ask who goes first), then the game proceeds
start the game by seeing if the square you clicked on is empty
if it is empty, you get a message that square is taken
else you click there
then it runs the checkIfWin() method to see if your move resulted in a win
if it did, game over
if it didn't the computer switches turn, allowing the other person to play
if it is your turn, you can click anywhere you want to make a play
if there is an x or an o there already, you cannot click there

my players: X and O

at the start of the game call clearGameboard()

startGame()

playerOnePlays()
playerTwoPlays()
checkForAWin()