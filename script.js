const list = document.createElement('ol');
document.body.appendChild(list);

const readJS = async file => {
  const response = await fetch(file);
  const text = await response.text();
  return text;
};

const toURI = code => {
  code = `javascript:{${code}}`;
  return encodeURI(code);
};

const addScript = (label, URI, desc) => {
  const newItem = document.createElement('li');
  list.appendChild(newItem);

  const link = document.createElement('a');
  link.href = URI;
  link.textContent = label;
  newItem.appendChild(link);

  const description = document.createElement('span');
  description.textContent = desc;
  newItem.appendChild(description);
};

const arr = [
  {
    title: "Custom Video Speed",
    path: "snippets/custom-video-speed.js",
    description: "Set the playback speed of all videos on the page (0x to 16x)",
  },
  {
    title: "Skip Ads, Toggle 1x/16x",
    path: "snippets/skip-ads.js",
    description: "Toggle the playback speed of all videos between 0x and 16x",
  },
  {
    title: "Power Hour",
    path: "snippets/power-hour.js",
    description: "Automatically go to the next youtube video every 60 seconds for 1 hour",
  },
  {
    title: "SoundCloud RSS",
    path: "snippets/soundcloud-rss.js",
    description: "Get the RSS feed for a SoundCloud Channel",
  },
  {
    title: "Unix time of a tweet",
    path: "snippets/tweet-time.js",
    description: "Copy the unix timecode for when a tweet was posted",
  },
  {
    title: "Tongue Twister Solver",
    path: "snippets/tongue-twister.js",
    description: "Text to Speech with repetition option",
  },
  {
    title: "Wonky Page",
    path: "snippets/wonky.js",
    description: "Slightly rotate each element on the webpage randomly",
  },
  {
    title: "TikTok Video Download",
    path: "snippets/tiktok-download.js",
    description: "Download an individual TikTok video",
  },
  {
    title: "TikTok Channel Download",
    path: "snippets/tiktok-all.js",
    description: "Download all the videos on a TikTok channel. Very Hacky.",
  },
  {
    title: "NYT scroller",
    path: "snippets/nyt.js",
    description: "Scroll on NYT",
  },
  {
    title: "Twitch Bonus",
    path: "snippets/twitch-bonus.js",
    description: "Collect Twitch bonus every 10 seconds",
  }
];

const extractJS = async snippet => [snippet.title, toURI(await readJS(snippet.path)), snippet.description];

Promise.all(arr.map(extractJS))
  .then(a => a.forEach(pair => addScript(...pair)));