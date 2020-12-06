let numThumbs = 0;
let scroller;

function dl() {
  let vid = window.location.pathname.split('/').pop();

  fetch(new Request(document.getElementsByTagName('video')[0].src))
    .then(response => response.blob())
    .then(function (b) {
      let objectURL = URL.createObjectURL(b);
      let tag = document.createElement('a');
      tag.href = objectURL;
      tag.download = `${vid}.mp4`;
      tag.click();
    })
}

function scrollAndLoad() {
  document.getElementsByClassName('share-layout-content')[0].scrollIntoView(false);
  if (document.getElementsByClassName('video-feed-item').length > numThumbs) {
    numThumbs = document.getElementsByClassName('video-feed-item').length;
  } else {
    clearInterval(scroller);
    console.log(numThumbs + ' videos found');
    videoList = [...document.getElementsByClassName('video-feed-item')];

    alert('Click on the Final Video Quickly');

    setTimeout(() => {

      function downloadAll() {
        let left = document.querySelector('.arrow-left');
        dl();

        setTimeout(() => {
          if (!!left) {
            left.click();
            setTimeout(downloadAll, 1500);
          }
        }, 1500);
      }

      downloadAll();
    }, 3000
    );

  }
}

scroller = setInterval(scrollAndLoad, 2000);
