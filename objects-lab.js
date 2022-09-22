const game = {
    title: "Guess the Number!",
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    previousGuesses: [],
    play: function () {
      // use getguess and render
      this.secretNum =
        Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
        this.smallestNum
    },
    getGuess: function () {
      // make variable into string and return variable
    },

    render: function (){
      // check to see if guess is too low or too high
    },
  }
  console.log(game)
  
  let guess = ''
  while (guess != 'quit') {
    guess = prompt ('See if you can guess the secret number!')
    if (guess in secretNum) {
        alert('You guessed it!')
        // alert how many guesses it took
    } else if (guess !== secretNum) {
        alert ('Please try again')
        // alert either when too high or too low
    }
  }