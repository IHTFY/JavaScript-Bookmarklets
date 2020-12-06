let link = document.getElementsByTagName('video')[0].src;
let vid = window.location.pathname.split('/').pop();

fetch(new Request(link))
  .then(response => response.blob())
  .then(function (b) {
    let objectURL = URL.createObjectURL(b);
    let tag = document.createElement('a');
    tag.href = objectURL;
    tag.download = `${vid}.mp4`;
    tag.click();
  })