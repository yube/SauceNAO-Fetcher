function sauce(info, tab) {
  chrome.tabs.create({
    url: "https://saucenao.com/search.php?url=" + encodeURIComponent(info.srcUrl)
  });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "sauceNAO",
      title: "SauceNAO",
      contexts: ["image"]
    });
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sauceNAO") {
    sauce(info, tab);
  }
});