const list = document.createElement('ol');
document.body.appendChild(list);

const readJS = async file => {
  const response = await fetch(file);
  const text = await response.text();
  return text;
};

const toURI = async code => {
  code = `javascript:(()=>{${code}})()`;
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

[
  ["Custom Video Speed", "snippets/custom-video-speed.js"],
  ["Skip Ads, Toggle 1x/16x", "snippets/skip-ads.js"],
  ["Power Hour", "snippets/power-hour.js"],
  ["Soundcloud RSS", "snippets/soundcloud-rss.js"],
].forEach(async snippet => addScript(snippet[0], await toURI(await readJS(snippet[1]))));