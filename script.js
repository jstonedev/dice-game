'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

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
    current0El.textContent = currentScore; // CHANGE LATER!!
  } else {
    // Switch to next player
    currentScore = 0;
    current0El.textContent = currentScore;
  }
});
