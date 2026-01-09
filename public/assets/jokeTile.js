let tileStyles = [
  { backgroundColor: '#6f9c7d', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#6f8fa3', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#b08f5f', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#9a7aa8', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#b07b73', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#6b7aa8', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#a87a8e', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#a2724a', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#b8a56c', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#5f8f74', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
  { backgroundColor: '#8f6f9f', fontColor: '#f8f5f0', shadowColor: '#7d776f' },
];
arrayShuffle(tileStyles);

let jokeIndex = 0;
let styleIndex = 0;

createJokeTile = () => {
  const contentDiv = document.getElementById('main-content');
  const joke = jokes[jokeIndex++];
  const style = tileStyles[styleIndex++];

  if(jokeIndex === jokes.length) { jokeIndex = 0; }
  if(styleIndex === tileStyles.length) { styleIndex = 0; }

  const jokeTile = document.createElement('div');
  jokeTile.addEventListener('click', dismissJokeTile);
  jokeTile.style.backgroundColor = style.backgroundColor;
  jokeTile.style.color = style.fontColor;
  jokeTile.style.textShadow = `3px 3px 6px ${style.shadowColor}`;
  jokeTile.classList.add('joke-tile');

  const setup = document.createElement('div');
  setup.classList.add('setup');
  setup.innerText = joke.setup;

  const punchline = document.createElement('div');
  punchline.classList.add('punchline');
  punchline.innerText = joke.punchline;

  const moreHint = document.createElement('div');
  moreHint.classList.add('more-hint');
  moreHint.innerText = 'Click or tap for more.';

  jokeTile.appendChild(setup);
  jokeTile.appendChild(punchline);
  jokeTile.appendChild(moreHint);
  contentDiv.appendChild(jokeTile);
};

const dismissJokeTile = (evt) => {
  createJokeTile();
  let target = evt.target;
  while(!target.classList.contains('joke-tile')) { target = target.parentElement; }
  target.removeEventListener('click', dismissJokeTile);
  const contentDiv = document.getElementById('main-content');
  target.classList.add('dismissed');
  setTimeout(() => contentDiv.removeChild(target), 1000);
};
