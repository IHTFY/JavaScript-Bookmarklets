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

const addScript = (text, URI) => {
  const newItem = document.createElement('li');
  list.appendChild(newItem);

  const link = document.createElement('a');
  link.href = URI;
  link.textContent = text;
  newItem.appendChild(link);
};

const arr = [
  ["Custom Video Speed", "snippets/custom-video-speed.js"],
  ["Skip Ads, Toggle 1x/16x", "snippets/skip-ads.js"],
  ["Power Hour", "snippets/power-hour.js"],
  ["Soundcloud RSS", "snippets/soundcloud-rss.js"],
  ["Unix time of a tweet", "snippets/tweet-time.js"],
  ["Tongue Twister Solver", "snippets/tongue-twister.js"],
  ["Wonky Page", "snippets/wonky.js"]
];

const codify = async snippet => [snippet[0], toURI(await readJS(snippet[1]))];

Promise.all(arr.map(codify))
  .then(codifiedPairs => codifiedPairs.forEach(pair => addScript(...pair)));