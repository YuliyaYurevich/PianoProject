const keys = document.querySelectorAll('.key');

function audioPlay(playFile) {
  new Audio(playFile).play();
}

keys.forEach((key, i) => {
  const playFile = 'audio/key-' + (i + 1) + '.mp3';
  key.addEventListener('click', () => {
    console.log(playFile);
    audioPlay(playFile);
  });
});
