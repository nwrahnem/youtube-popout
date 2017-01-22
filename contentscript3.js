var wfullscreen = false;
var rect;
var head;
var plusStyle;
var body;
var bodycache=[];

function addButton(callback){
	setInterval( function() {
	if (document.getElementsByClassName("ytp-plus-button").length){
		clearInterval();
	}else{
		var s = document.getElementsByClassName("ytp-right-controls");
		var ytpbutton = document.createElement('button');
		ytpbutton.className = 'ytp-plus-button ytp-button';
		ytpbutton.innerHTML = '<svg id = "plusSVG" height = "100%" version="1.1" viewBox="0 0 36 36" width = "100%"> \
								<g class="ytp-plus-button-edge"> \
									<path d="m 18,10 -8,0 0,16 16,0 0,-8 -2,0 0,6 -12,0 0,-12 6,0 0,-2 0,0 z" fill="#fff"></path> \
								</g> \
								<g class="ytp-plus-arrow"> \
									<path d="m 20,10 6,0 0,6 -2,0 0,-3 -5,5 -1,-1 5,-5 -3,0 0,-2 0,0 z" fill="#fff"></path> \
								</g> \
							   </svg>';
		ytpbutton.title = 'Popout';
							   
		
		s[0].insertBefore(ytpbutton, document.getElementsByClassName('ytp-subtitles-button')[0]);
		console.log("button added");
		if(callback) callback(document.getElementById('player'));
	}}, 500);
	
	}

function addListener(elem){
	document.getElementsByClassName("ytp-plus-button").item(0).addEventListener("click", (function(){
		popout();
}))};

chrome.runtime.onMessage.addListener(
  function(sender, sendResponse) {
    popout();
    sendResponse();
  });
  
function popout(){
	if(document.getElementsByClassName("html5-main-video")[0]){
	var ytplayer = document.getElementsByClassName("html5-main-video")[0];
		ytplayer.pause();
		chrome.runtime.sendMessage({time: Math.floor(ytplayer.currentTime)}, function(response) {
	});
	}
}

function elemObject (elem){
	this.elem = elem;
}

function addClass(classname) {
  var heightClass = document.getElementsByClassName("player-height");
  for(var i =0, il = heightClass.length;i<il;i++){
     heightClass[i].className += " "+classname;
  }
}

addButton(addListener);