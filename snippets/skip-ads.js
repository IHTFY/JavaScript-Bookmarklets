if (document.getElementsByTagName("video").length) {
  let video = document.getElementsByTagName("video")[0];
  let speed = video.playbackRate;
  video.playbackRate = speed == 16 ? 1 : 16;
} else {
  console.log("Can't find a video.");
}