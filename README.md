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

how to check for a win
if certain squares have an x
problem: how to choose the squares that have the x

each span has a number inside, invisible
when I click a cell, it overwrites the number so I can't use the number to compare, unless I concatenate to the number

winning cells: 1,2,3 or 4,5,6 or 7,8,9 or 1,4,7 or 2,5,8 or 3,6,9 or 1,5,9 or 3,5,7

[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

now what? loop through the main array, and for each array if an x or y exists in each of those cells, then the player wins

working on this right now:
click functionality:  
make player one active and when I click, I will see the x image

should I just generate the grid with images like before?
