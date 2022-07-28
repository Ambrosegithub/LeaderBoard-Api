import './index.css';
import { fetchScore, addToScore } from './modules/app.js';

const formInput = document.querySelector('#form-input');
const userInput = document.querySelector('#user_input');
const scoreInput = document.querySelector('#score_input');
const refreshBtn = document.querySelector('#refresh-btn');

formInput.addEventListener('submit', (el) => {
  el.preventDefault();
  addToScore(userInput.value, scoreInput.value);
  formInput.reset();
});
refreshBtn.addEventListener('click', () => {
  fetchScore();
});
