const input = document.querySelector('.url-bar');
const iframe = document.querySelector('.web-view');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = input.value.trim();
   iframe.src = `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`;

  }
});
