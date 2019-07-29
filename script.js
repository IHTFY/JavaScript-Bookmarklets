const list = document.createElement('ol');
document.body.appendChild(list);

const addScript = (text, code) => {
  const newItem = document.createElement('li');
  list.appendChild(newItem);

  const link = document.createElement('a');
  link.href = encodeURI(code);
  link.textContent = text;
  newItem.appendChild(link);
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

addScript("Power Hour", `javascript: (() => {
  if (document.getElementsByClassName('ytp-next-button ytp-button').length) {
    const emojis = n => {
      const doubles = n => Math.floor(n / 2);
      const singles = n => n % 2;
      const faces = ['😋', '😛', '😜', '🤪', '😵', '🤯', '😎'];
      return '🍻'.repeat(doubles(n)) + '🍺'.repeat(singles(n)) + faces[Math.floor(n / 10)] + '🍺'.repeat(singles(60 - n)) + '🍻'.repeat(doubles(60 - n));
    };

    let shots = 0;
    console.log('Starting!');
    const timer = setInterval(() => {
      document.getElementsByClassName('ytp-next-button ytp-button')[0].click();
      console.log(\`\${++shots} shot\${shots > 1 ? 's' : ''} down \${60 - shots} to go! \${emojis(shots)}\`);
      if (shots === 60) {
        clearInterval(timer);
        alert('YOU POWERED THROUGH THE HOUR!');
      }
    }, 60 * 1000);
  } else {
    console.log("Can't find a video.");
  }
})();`);
