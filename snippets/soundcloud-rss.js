if (document.querySelector('[content*=users]')) {
  const id = document.querySelector('[content*=users]').content.match(/[0-9]+/)[0];
  open(`http://feeds.soundcloud.com/users/soundcloud:users:${id}/sounds.rss`);
} else {
  console.log("Go to a soundcloud user's profile or refreshing the page. For example: https://soundcloud.com/ihtfy");
}