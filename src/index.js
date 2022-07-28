 import './index.css';
import { fetchScore , addToScore } from './modules/app.js';
const formInput = document.querySelector('#form-input');
const user_input = document.querySelector('#user_input');
const score_input = document.querySelector('#score_input');
const refresh_btn = document.querySelector('#refresh-btn');

formInput.addEventListener('submit', (el)=>{
  el.preventDefault();
  addToScore(user_input.value, score_input.value)
  formInput.reset();
});
 refresh_btn.addEventListener('click', ()=>{
fetchScore()
 })
