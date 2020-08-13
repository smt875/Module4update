(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hey";
	helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
      }
	window.helloSpeaker = helloSpeaker;

})(window)
