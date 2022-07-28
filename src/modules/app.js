const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const gameId = 'YezulV9ho9Ix3Z5X3qdY';
const addUrlScores = `${API_URL + gameId}/scores`;
const createGame = async () => {
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My cool new game',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};
createGame();

function scoreTable(scores) {
  let output = '';
  scores.forEach((game) => {
    output += `<li>${game.user}: ${game.score}</li>`;
  });
  document.querySelector('.score-list').innerHTML = output;
}
// to fetch added score from the API
const fetchScore = async () => {
  await fetch(addUrlScores)
    .then((response) => response.json())
    .then((json) => scoreTable(json.result));
};

const addToScore = async (user, score) => {
  await fetch(addUrlScores, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      user,
      score,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      fetchScore(json);
    })
    .catch((error) => error);
};
export { fetchScore, addToScore };
