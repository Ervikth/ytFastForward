var speed  = 1.0;

chrome.tabs.executeScript(null, {code:"document.getElementsByClassName(\"video-stream html5-main-video\")[0].playbackRate =1.0;"});

chrome.browserAction.setBadgeText({text: speed.toString()});

function click(e) {
  if(e.target.id == "<<"){
    speed-=0.25;
    chrome.browserAction.setBadgeText({text: speed.toString()});

    chrome.tabs.executeScript(null,
        {code:"document.getElementsByClassName(\"video-stream html5-main-video\")[0].playbackRate ="+ speed.toFixed(2) + ";"});
  }
  if(e.target.id == ">>"){
    speed+=0.25;
    chrome.browserAction.setBadgeText({text: speed.toString()});
    chrome.tabs.executeScript(null,
        {code:"document.getElementsByClassName(\"video-stream html5-main-video\")[0].playbackRate ="+ speed.toFixed(2) + ";"});
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
