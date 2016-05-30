// chrome.app.window.current().onMinimized.addListener(function(e) {
//     console.log(123123);
// });
onload = function() {
    var webview = document.getElementById("wx");
    var indicator = document.querySelector("#loading");

    var loadstart = function() {
        webview.style.display = "none";
        loading.style.display = "block";
    }
    var loadstop = function() {
        setTimeout(function () {
          loading.style.display = "none";
          webview.style.display = "block";
        }, 1000);
    }
    webview.addEventListener("loadstart", loadstart);
    webview.addEventListener("loadstop", loadstop);
}
