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

const genNew = document.querySelector('#genNew');
const color = document.querySelector('#color');
const setBgColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
  color.innerHTML = `#${randomColor}`;
};
genNew.addEventListener('click', () => {
  setBgColor();
  setBgColor();
});
