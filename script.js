var randomNum = randomFn(0, 10)
var gameOver = false
var guesses = document.querySelector('.guesses')
var guessInput = document.querySelector('.guessInput')
var guessSubmit = document.querySelector('.guessSubmit')

guessSubmit.addEventListener('click', askForANumber)

function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// fn that checks numbers with the random number
function askForANumber () {
  var guessedNum = Number(guessInput.value)
  if (guessedNum > randomNum) {
    guesses.textContent = 'Your guess is too high!'
  } else if (guessedNum < randomNum) {
    guesses.textContent = 'Your guess is too low!'
  } else if (guessedNum === randomNum) {
    guesses.textContent = 'Congratulation! You got it right!'
    document.body.style.background = 'black'
    gameOver = true
  }
  checkForGameover()
}

function checkForGameover () {
  if (gameOver) {
    // DOM reveal restart button, function newGame()
    resetButton = document.createElement('button')
    resetButton.textContent = 'Start New Game'
    document.body.appendChild(resetButton)
    resetButton.addEventListener('click', newGame)
    guessInput.style.opacity = '0'
    guessSubmit.style.opacity = '0'
  }
}

// DOM execute on clicking restart button
function newGame () {
  resetButton.parentNode.removeChild(resetButton)
  randomNum = randomFn(0, 10)
  gameOver = false
  document.body.style.background = "url('http://www.wallpaperup.com/uploads/wallpapers/2014/01/03/214148/e035318bd6e0c1ddd5aa56af70452274.jpg') no-repeat center"
  document.body.style.backgroundSize = 'auto'
  guesses.textContent = ''
  guessInput.style.opacity = '1'
  guessSubmit.style.opacity = '1'
}
