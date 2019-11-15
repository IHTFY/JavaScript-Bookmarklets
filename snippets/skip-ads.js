if (document.getElementsByTagName("video").length) {
  let videos = [...document.getElementsByTagName("video")];
  let currentSpeed = videos[0].playbackRate;
  videos.forEach(v => v.playbackRate = currentSpeed == 16 ? 1 : 16);
} else {
  console.log("Can't find a video.");
}