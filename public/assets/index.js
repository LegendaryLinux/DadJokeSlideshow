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

window.addEventListener('load', () => {
  fetchJokes().then((response) => {
    jokes = response.jokes;
    createJokeTile();
  });
});