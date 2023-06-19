if (document.getElementsByTagName("video").length) {
  const videos = [...document.getElementsByTagName("video")];
  const currentSpeed = videos[0].playbackRate;
  videos.forEach(v => v.playbackRate = currentSpeed == 1 ? 16 : 1);
} else {
  console.log("Can't find a video.");
}
