chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	popout(request.time);
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});
	});
});

function popout(time){
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function(tabs) {
		var url = tabs[0].url+'?start='+time+'&autoplay=1';
		var embedded;
		if(url.indexOf('/watch') != -1){
		embedded = url.splice(url.indexOf('/watch')+1,8,'embed/');
		}else{
		embedded = url;
		}
		window.open(embedded, '_blank',"toolbar=no,scrollbars=no,resizable=yes");
})};
	
String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

chrome.windows.onCreated.addListener(function(win){
    chrome.windows.get(win.id,{populate:true},function(tabwin){
        setTimeout(function(){
            chrome.tabs.executeScript(tabwin.tabs[0].id,{code:"console.log('window opened');",
			runAt:'document_idle'});
        },500);
    });
});