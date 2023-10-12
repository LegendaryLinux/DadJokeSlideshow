let jokes = [];

const fetchJokes = () => new Promise((resolve, reject) => {
  const request = new Request('assets/dadJokes.json');
  fetch(request).then((response) => {
    if (!response.ok) {
      return reject(new Error(`Failed to fetch jokes.json file. HTTP code ${response.status}.`));
    }

    response.json().then((json) => resolve(json));
  });
});

const arrayShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

window.addEventListener('load', () => {
  fetchJokes().then((response) => {
    jokes = response.jokes;
    arrayShuffle(jokes);
    createJokeTile();
  });
});