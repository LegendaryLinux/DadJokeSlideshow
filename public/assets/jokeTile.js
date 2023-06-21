const tileStyles = [
  {
    backgroundColor: '#09c509',
    fontColor: '#ffffff',
    shadowColor: '#868686',
  },
];

createJokeTile = () => {
  const contentDiv = document.getElementById('main-content');
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  const style = tileStyles[Math.floor(Math.random() * tileStyles.length)];

  const jokeTile = document.createElement('div');
  jokeTile.addEventListener('click', dismissJokeTile);
  jokeTile.style.backgroundColor = style.backgroundColor;
  jokeTile.style.color = style.fontColor;
  jokeTile.style.textShadow = `2px 2px 4px ${style.shadowColor}`;
  jokeTile.classList.add('joke-tile');
  jokeTile.classList.add('top');

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
  evt.target.removeEventListener('click', dismissJokeTile);
  const contentDiv = document.getElementById('main-content');
  evt.target.classList.add('dismissed');
  evt.target.style.zIndex = (parseInt(evt.target.style.zIndex, 10) + contentDiv.childElementCount).toString();
  setTimeout(() => contentDiv.removeChild(evt.target), 500);
  setTimeout(createJokeTile, 150);
};