if (document.getElementsByTagName("video").length) {
  const videos = [...document.getElementsByTagName("video")];
  const currentSpeed = videos[0].playbackRate;
  const input = Math.min(Math.max(parseFloat(prompt("How fast?\n0x⟷16.0x", currentSpeed)), 0), 16);
  if (typeof input === 'number' && !isNaN(input) && input !== currentSpeed) {
    videos.forEach(v => v.playbackRate = input);
  }
} else {
  console.log("Can't find a video.");
}