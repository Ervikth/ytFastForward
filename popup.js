var speed  = 1.0;

function click(e) {
  if(e.target.id == "<<"){
    speed-=0.5;
    chrome.tabs.executeScript(null,
        {code:"document.getElementsByClassName(\"video-stream html5-main-video\")[0].playbackRate ="+ (Math.round(speed * 100) / 100) + ";"});
  }
  if(e.target.id == ">>"){
    speed+=0.5;
    chrome.tabs.executeScript(null,
        {code:"document.getElementsByClassName(\"video-stream html5-main-video\")[0].playbackRate ="+ (Math.round(speed * 100) / 100) + ";"});
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
