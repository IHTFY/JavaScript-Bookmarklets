const list = document.createElement('ol');
document.body.appendChild(list);

const addScript = (text, code) => {
  const newItem = document.createElement('li');
  list.appendChild(newItem);

  const link = document.createElement('a');
  link.href = encodeURI(code);
  link.textContent = text;
  newDiv.appendChild(link);
};

addScript("Custom Video Speed", `javascript: (() => {
        if (document.getElementsByTagName("video").length) {
          let video = document.getElementsByTagName("video")[0];
          let speed = video.playbackRate;
          let input = Math.min(Math.max(parseFloat(prompt("How fast?\\n0x⟷16.0x", speed)), 0), 16);
          video.playbackRate = isNaN(input) ? speed : input;
        } else {
          console.log("Can't find a video.");
        }
      })();`);

addScript("Skip Ads, Toggle 1x/16x", `javascript: (() => {
        if (document.getElementsByTagName("video").length) {
          let video = document.getElementsByTagName("video")[0];
          let speed = video.playbackRate;
          video.playbackRate = speed == 16 ? 1 : 16;
        } else {
          console.log("Can't find a video.");
        }
      })();`);
