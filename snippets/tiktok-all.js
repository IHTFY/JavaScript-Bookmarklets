let numThumbs = 0;

function dl() {
  let vid = window.location.pathname.split('/').pop();

  fetch(new Request(document.getElementsByTagName('video')[0].src)).then(response => response.blob()).then(function (b) {
    let objectURL = URL.createObjectURL(b);
    let tag = document.createElement('a');
    tag.href = objectURL;
    tag.download = `${vid}.mp4`;
    tag.click();
  })
}

function scrollDown() {
  document.querySelector(`[data-e2e='user-post-item-list']`).scrollIntoView(false);

  if (document.querySelectorAll(`[data-e2e='user-post-item']`).length > numThumbs) {
    numThumbs = document.querySelectorAll(`[data-e2e='user-post-item']`).length;
    setTimeout(scrollDown, 1000);
  } else {
    console.log(numThumbs + ' videos found');
    videoList = [...document.querySelectorAll(`[data-e2e='user-post-item']`)];

    videoList.pop().querySelector('a').click();

    setTimeout(dlNext, 1500);
  }
}

scrollDown();

function dlNext() {
  dl();
  const left = document.querySelector(`[data-e2e='arrow-left']:not([disabled])`);
  if (left) {
    left.click();
    setTimeout(() => {
      dlNext();
    }
      , 1500);
  }
}

