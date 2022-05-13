'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Reset and start a new game
function newGame() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  // reset starting score
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  playing = true;

  // hide dice
  diceEl.classList.add('hidden');

  // reset current score for both players
  currentScore = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  // reset active player to 0
  if (activePlayer) {
    activePlayer = 0;
  }
  player1Section.classList.remove('player--active');
  player0Section.classList.add('player--active');
}

// Holding the score functionality
function addToScore() {
  //  1. Add current score to active player's score
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[[activePlayer]];

  // 2. Check if player's score is >= 100
  if (scores[activePlayer] >= 100) {
    // Finish the game
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    diceEl.classList.add('hidden');
  } else {
    // Switch to the next player
    changeActivePlayer();
  }
}

// Switch active player function
function changeActivePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0Section.classList.toggle('player--active');
  player1Section.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Genertate random dice roll
    const dice = Math.floor(Math.random() * 6 + 1);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for a rolled 1
    if (dice !== 1) {
      // Add dice roll to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      changeActivePlayer();
    }
  }
});

// Add current score to overall score on btn hold
btnHold.addEventListener('click', () => {
  if (playing) {
    addToScore();
  }
});

// Reset the game
btnNew.addEventListener('click', newGame);
