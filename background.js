const getTentacledUrl = (url) => {
  return `https://tntcl.app/${encodeURIComponent(url)}`;
}

chrome.browserAction.onClicked.addListener((tab) => {
  window.open(getTentacledUrl(tab.url));
});