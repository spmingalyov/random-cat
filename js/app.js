const buttom = document.getElementById('btn');
const image = document.querySelector('.img');
const url = 'https://aws.random.cat/meow';

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
  } catch {
    console.log('error');
  }
}


buttom.addEventListener ('click', () => {
  let isLoaded = image.complete;

  if (isLoaded) {
    fetchHandler();
  }
});