if (document.getElementsByTagName("video").length) {
  let video = document.getElementsByTagName("video")[0];
  let speed = video.playbackRate;
  let input = Math.min(Math.max(parseFloat(prompt("How fast?\n0x⟷16.0x", speed)), 0), 16);
  video.playbackRate = isNaN(input) ? speed : input;
} else {
  console.log("Can't find a video.");
}