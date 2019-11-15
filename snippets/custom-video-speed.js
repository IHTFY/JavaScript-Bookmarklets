if (document.getElementsByTagName("video").length) {
  let videos = [...document.getElementsByTagName("video")];
  let currentSpeed = videos[0].playbackRate;
  let input = Math.min(Math.max(parseFloat(prompt("How fast?\n0x⟷16.0x", currentSpeed)), 0), 16);
  videos.forEach(v => v.playbackRate = isNaN(input) ? currentSpeed : input);
} else {
  console.log("Can't find a video.");
}