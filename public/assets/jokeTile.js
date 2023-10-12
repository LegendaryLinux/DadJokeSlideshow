let tileStyles = [
  { backgroundColor: '#09c509', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#59b8c0', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#d7d052', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#b770be', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#e08e86', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#5770e0', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#de5f9d', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#d57620', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#e7cd7e', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#45b06e', fontColor: '#ffffff', shadowColor: '#868686' },
  { backgroundColor: '#d238e1', fontColor: '#ffffff', shadowColor: '#868686' },
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
  jokeTile.style.textShadow = `2px 2px 4px ${style.shadowColor}`;
  jokeTile.classList.add('joke-tile');

  const setup = document.createElement('div');
  setup.classList.add('setup');
  setup.innerText = joke.setup;

  const punchline = document.createElement('div');
  punchline.classList.add('punchline');
  punchline.innerText = joke.punchline;

  jokeTile.appendChild(setup);
  jokeTile.appendChild(punchline);
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
