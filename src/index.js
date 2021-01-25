const body = document.querySelector('body');

const addTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

addTitle('New Project');
