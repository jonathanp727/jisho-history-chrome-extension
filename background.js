chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({username: null, password: null}, function() {
  });
});
