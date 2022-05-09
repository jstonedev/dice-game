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

// Helper Functions
const changeActivePlayer = () => {
  if (player0Section.classList.length === 3) {
    player0Section.classList.remove('player--active');
    player1Section.classList.add('player--active');
    activePlayer = 1;
  } else {
    player1Section.classList.remove('player--active');
    player0Section.classList.add('player--active');
    activePlayer = 0;
  }
};

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
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
});
