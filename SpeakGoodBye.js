(function (window) {
	var byeSpeaker = {};
	var speakWord = "Good Morning";
	byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
      }
	window.byeSpeaker = byeSpeaker;

})(window)