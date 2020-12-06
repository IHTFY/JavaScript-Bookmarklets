let xhr = new XMLHttpRequest();
let link = document.getElementsByTagName('video')[0].src;
let vid = window.location.pathname.split('/').pop();
xhr.open('GET', link, true);
xhr.responseType = 'blob';
xhr.onload = function () {
  let urlCreator = window.URL || window.webkitURL;
  let videoUrl = urlCreator.createObjectURL(this.response);
  let tag = document.createElement('a');
  tag.href = videoUrl;
  tag.download = `${vid}.mp4`;
  tag.click();
};
xhr.onerror = err => {
  alert('Download Failed');
};
xhr.send();