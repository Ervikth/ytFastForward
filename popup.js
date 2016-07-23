//global Variable
var speed  = 1.0;
/*
After extension icon is clicked it will run those two lines of code.
1. run script to set speed to initial value of 1.
2. set the icon text to match the current speed.
*/
chrome.tabs.executeScript(null, {code:"document.getElementsByClassName(\"video-stream html5-main-video\")[0].playbackRate =1.0;"});
chrome.browserAction.setBadgeText({text: speed.toString()});


/**
When extension icon is clicked set listners on all the div elements inside popup.html

addEventListner('click', click);
Explanation of: ('click', click);
'click' --> is the type of listener, meaning it listens to a click by the user.
, click); --> this is the second parameter and this is the function it is supposed to run
after listener detects a click on the element.
more: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});

/**
addEventListener('click', --> click  <--); this is the click function.

This function takes the whole div element as argument.
The ifs checks if the div id is "<<" or ">>" and runs the specified code.
*/
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
