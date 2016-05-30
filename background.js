chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        id: 'wechat_web',
        width: 1000,
        height: 700,
        maxWidth: 1000,
        maxHeight: 700,
        minWidth: 1000,
        minHeight: 700
    });



    // chrome.app.window.onClosed.addListener(function() {
    //     chrome.app.window.create('index.html', {
    //         id: 'wechat_web2',
    //         width: 1000,
    //         height: 700
    //     });
    // });


});
