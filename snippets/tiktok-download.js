let id = window.location.pathname.match(/\d+/)[0];
let date =  ~~(Date.now()/1000);
let code = `a:4:{s:9:"watermark";b:0;s:7:"videoId";s:19:"${id}";s:3:"uid";s:32:"91f1130c08d98809966817231b2fddea";s:4:"time";i:${date};}`
let url = `https://ttdownloader.com/dl.php?v=~${btoa(code)}`;
window.open(url);