let numThumbs = 0;

const dl = link => {
  let vid = window.location.pathname.split('/').pop();

  fetch(new Request(link)).then(response => response.blob()).then(b => {
    const objectURL = URL.createObjectURL(b);
    const tag = document.createElement('a');
    tag.href = objectURL;
    tag.download = `${vid}.mp4`;
    tag.click();
  })
}

const dlNext = () => {
  dl(document.querySelector('video').src);
  const left = document.querySelector(`[data-e2e='arrow-left']:not([disabled])`);
  if (left) {
    left.click();
    setTimeout(dlNext, 1500);
  }
}

const scrollDown = () => {
  document.querySelector(`[data-e2e='user-post-item-list']`).scrollIntoView(false);
  const thumbs = document.querySelectorAll(`[data-e2e='user-post-item']`);
  if (thumbs.length > numThumbs) {
    numThumbs = thumbs.length;
    setTimeout(scrollDown, 750);
  } else {
    console.log(numThumbs + ' videos found');
    [...thumbs].pop().querySelector('a').click();
    setTimeout(dlNext, 1500);
  }
}

scrollDown();