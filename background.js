chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    id: 'wechat_web',
    innerBounds: {
      width: 1000,
      height: 800
    }
  });
});
